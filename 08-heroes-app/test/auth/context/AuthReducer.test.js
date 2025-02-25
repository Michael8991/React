import { types } from "../../../src/auth"
import { authReducer } from "../../../src/auth/context/AuthReducer"

describe('Pruebas AuthReducer.js', () => {
    const initialState = {
        logged: false
    }
    test('Debe retornar el estado por defecto', () => {
        const newState = authReducer(initialState, {});
        expect(newState).toBe(initialState);
        //*Cuando pasamos el action como un objeto vacio, 
        //* este se interpreta como undefined por lo que salta directamente al default. Devolviendo el state.
    }),
        test('Debe de (login) llamar el login autenticar y establecer el user', () => {
            const action = {
                type: types.login,
                payload: {
                    user: {
                        id: '123',
                        username: 'Michael',
                    }
                }
            }
            const newState = authReducer(initialState, action);
            console.log(newState)
            expect(newState.logged).toBe(true)
            expect(newState.user).toBe(action.payload) // Porque el contain no vale??
        }),
        test('Debe de (logout) borrar el name del usuario y logged en false', () => {
            const state = {
                logged: true,
                user: {
                    id: '123',
                    username: 'Michael'
                }
            }
            const newState = authReducer(state, { type: types.logout })
            console.log(newState)
            expect(newState).toEqual(initialState)
        })
})