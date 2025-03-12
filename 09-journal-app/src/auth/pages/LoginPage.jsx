import { Link as RouterLink } from 'react-router-dom';

import { Google } from "@mui/icons-material";
import { Alert, Button, Link, ListItem, TextField, Typography } from "@mui/material"
import Grid from '@mui/material/Grid2';
import { AuthLayout } from '../layout/AuthLayout';
import { useForm } from '../../hooks';
import { checkingAuthentication, startGoogleSignIn, startLoginWithEmailPassword } from '../../store/auth/thunks';
import { useDispatch, useSelector } from 'react-redux';
import { useMemo } from 'react';

const formData = {
    email: '',
    password: ''
}

export const LoginPage = () => {

    const { status, errorMessage } = useSelector(state => state.auth)

    const dispatch = useDispatch()

    const { email, password, onInputChange } = useForm(formData)
    const isAuthenticating = useMemo(() => status === 'checking', [status])
    const onSubmit = (event) => {
        event.preventDefault();
        dispatch(startLoginWithEmailPassword({ email, password }))
    }

    const onGoogleSignIn = () => {
        console.log('On Google SignIn')
        dispatch(startGoogleSignIn())
    }


    return (
        <AuthLayout title='Login'>
            <form onSubmit={onSubmit}>
                <Grid container>
                    <Grid size={{ xs: 12 }}>
                        <ListItem>
                            <TextField
                                label="Correo"
                                type="email"
                                placeholder="correo@google.com"
                                fullWidth
                                name='email'
                                onChange={onInputChange}
                                value={email}
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
                                onChange={onInputChange}
                                value={password}
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
                        <Grid size={{ xs: 12, sm: 6 }}>
                            <ListItem>
                                <Button disabled={isAuthenticating} type='submit' variant='contained' fullWidth>Login</Button>
                            </ListItem>
                        </Grid>
                        <Grid size={{ xs: 12, sm: 6 }}>
                            <ListItem>
                                <Button disabled={isAuthenticating} onClick={onGoogleSignIn} variant='contained' fullWidth><Google /><Typography sx={{ ml: 1 }}>Google</Typography></Button>
                            </ListItem>
                        </Grid>
                    </Grid>
                    <Grid container direction='row' justifyContent='end' size={{ xs: 12 }}>
                        <Link variant='caption' component={RouterLink} to="/auth/register" sx={{ mr: 2, textDecoration: 'none' }}>
                            Crear una cuenta
                        </Link>
                    </Grid>
                </Grid>
            </form>
        </AuthLayout>
    )
}
