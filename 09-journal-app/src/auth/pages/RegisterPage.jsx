import { Link as RouterLink } from 'react-router-dom';

import { Button, Link, ListItem, TextField } from "@mui/material"
import Grid from '@mui/material/Grid2';
import { AuthLayout } from '../layout/AuthLayout';

export const RegisterPage = () => {
    return (
        <AuthLayout title='Registro'>
            <form>
                <Grid container>
                    <Grid size={{ xs: 12 }}>
                        <ListItem>
                            <TextField label="Nombre Completo" type="text" placeholder="Nombre..." fullWidth autoComplete='off' />
                        </ListItem>
                    </Grid>
                    <Grid size={{ xs: 12 }}>
                        <ListItem>
                            <TextField label="Corre" type="email" placeholder="corre@google.com" fullWidth />
                        </ListItem>
                    </Grid>
                    <Grid size={{ xs: 12 }}>
                        <ListItem>
                            <TextField label="Contraseña" type="password" placeholder="password" fullWidth />
                        </ListItem>
                    </Grid>
                    <Grid container size={{ xs: 12 }}>
                        <Grid size={{ xs: 12 }}>
                            <ListItem>
                                <Button variant='contained' fullWidth>Crear Cuenta</Button>
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
        </AuthLayout>
    )
}
