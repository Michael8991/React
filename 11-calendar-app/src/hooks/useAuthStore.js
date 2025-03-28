import { useDispatch, useSelector } from "react-redux"
import { calendarApi } from "../api";
import { clearErrorMessage, onCheckingAuth, onLoginAuth, onLogoutAuth, onLogoutCalendar } from "../store";
import { jwtDecode } from "jwt-decode";


export const useAuthStore = () => {

    const { status, user, errorMessage } = useSelector(state => state.auth);
    const dispatch = useDispatch()

    const startLogin = async ({ email, password }) => {
        dispatch(onCheckingAuth())
        try {
            const { data } = await calendarApi.post('/auth', { email, password });
            localStorage.setItem('token', data.token)
            localStorage.setItem('token-init-date', new Date().getTime());
            dispatch(onLoginAuth({ name: data.name, uid: data.uid }))

        } catch (error) {
            dispatch(onLogoutAuth('Credenciales incorrectos'))
            setTimeout(() => {
                dispatch(clearErrorMessage())
            }, 10)
        }
    }

    const startRegister = async ({ name, email, password, password2 }) => {
        dispatch(onCheckingAuth());
        try {
            if (password !== password2) {
                onLogoutAuth('Las contraseñas no coinciden.')
                return;
            }
            const { data } = await calendarApi.post('/auth/new', { name, email, password })
            localStorage.setItem('token', data.token)
            localStorage.setItem('token-init-date', new Date().getTime());
            dispatch(onLoginAuth({ name: data.name, uid: data.uid }))

        } catch (error) {
            dispatch(onLogoutAuth(error.response.data?.msg || 'Error al crear el usuario.'))
            setTimeout(() => {
                dispatch(clearErrorMessage())
            }, 10)
        }
    }

    const checkAuthToken = async () => {
        const token = localStorage.getItem('token');
        if (!token) return dispatch(onLogoutAuth());
        try {
            const { data } = await calendarApi.get('/auth/renew');
            localStorage.setItem('token', data.token)
            localStorage.setItem('token-init-date', new Date().getTime());
            const currentToken = localStorage.getItem('token')
            const decoded = jwtDecode(currentToken);
            dispatch(onLoginAuth({ name: decoded.name, uid: decoded.uid }))
        } catch (error) {
            localStorage.clear();
            dispatch(onLogoutAuth('Error al recrear el token.'))
            setTimeout(() => {
                dispatch(clearErrorMessage())
            }, 10)
        }
    }

    const startLogout = () => {
        localStorage.clear();
        dispatch(onLogoutAuth())
        dispatch(onLogoutCalendar())
    }

    return {
        //*Properties
        status,
        user,
        errorMessage,

        //*Methodos 
        startLogin,
        startRegister,
        checkAuthToken,
        startLogout
    }
}