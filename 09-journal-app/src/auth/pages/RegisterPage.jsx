import { Link as RouterLink } from 'react-router-dom';

import { Alert, Button, Link, ListItem, TextField } from "@mui/material"
import Grid from '@mui/material/Grid2';
import { AuthLayout } from '../layout/AuthLayout';
import { useForm } from '../../hooks';
import { useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startCreatingUserWithEmailPassword } from '../../store/auth/thunks';
import { Alarm } from '@mui/icons-material';

const formData = {
    email: '',
    password: '',
    displayName: ''
}

const formValidations = {
    email: [(value) => value.includes('@'), 'El correo debe tener un formato correcto'],
    password: [(value) => value.length >= 6, 'El password debe de tener mas de 6 digitos'],
    displayName: [(value) => value.length >= 1, 'El name debe de tener una longitud mayor a 1 digito.']
}

export const RegisterPage = () => {

    const dispatch = useDispatch();

    const [formSubmitted, setFormSubmitted] = useState(false);

    const { status, errorMessage } = useSelector(state => state.auth);
    const isCheckingAuthentication = useMemo(() => status === 'checking', [status])

    const {
        displayName, email, password, onInputChange, formState, isFormValid, emailValid, passwordValid, displayNameValid
    } = useForm(formData, formValidations);

    const onSubmit = (event) => {
        event.preventDefault();
        setFormSubmitted(true)
        if (!isFormValid) return
        dispatch(startCreatingUserWithEmailPassword(formState));
    }

    return (
        <AuthLayout title='Registro'>
            <form onSubmit={onSubmit}>
                <Grid container>
                    <Grid size={{ xs: 12 }}>
                        <ListItem>
                            <TextField
                                label="Nombre
                                Completo"
                                type="text"
                                placeholder="Nombre..."
                                fullWidth
                                autoComplete='off'
                                name='displayName'
                                value={displayName}
                                onChange={onInputChange}
                                error={!!displayNameValid && formSubmitted}
                                helperText={displayNameValid}
                            />
                        </ListItem>
                    </Grid>
                    <Grid size={{ xs: 12 }}>
                        <ListItem>
                            <TextField
                                label="Corre"
                                type="email"
                                placeholder="corre@google.com"
                                fullWidth
                                name='email'
                                value={email}
                                onChange={onInputChange}
                                error={!!emailValid && formSubmitted}
                                helperText={emailValid}
                            />
                        </ListItem>
                    </Grid>
                    <Grid size={{ xs: 12 }}>
                        <ListItem>
                            <TextField
                                label="Contraseña"
                                type="password"
                                placeholder="password"
                                fullWidth
                                name='password'
                                value={password}
                                onChange={onInputChange}
                                error={!!passwordValid && formSubmitted}
                                helperText={passwordValid}
                            />
                        </ListItem>
                    </Grid>
                    <Grid container size={{ xs: 12 }}>
                        <Grid display={!!errorMessage ? '' : 'none'} size={{ xs: 12 }}>
                            <ListItem className=''>
                                <Alert severity='error'>{errorMessage}</Alert>
                            </ListItem>
                        </Grid>
                    </Grid>
                    <Grid container size={{ xs: 12 }}>
                        <Grid size={{ xs: 12 }}>
                            <ListItem>
                                <Button
                                    disabled={isCheckingAuthentication}
                                    variant='contained'
                                    fullWidth
                                    type='submit'
                                >Crear Cuenta</Button>
                            </ListItem>
                        </Grid>
                    </Grid>

                    <Grid container direction='row' justifyContent='end' size={{ xs: 12 }}>
                        <Link variant='caption' component={RouterLink} to="/auth/login" sx={{ mr: 2, textDecoration: 'none' }}>
                            ¿Ya tienes una cuenta? Ingresa
                        </Link>
                    </Grid>
                </Grid>
            </form>
        </AuthLayout >
    )
}
