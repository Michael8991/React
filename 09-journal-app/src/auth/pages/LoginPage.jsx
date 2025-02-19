import { Link as RouterLink } from 'react-router-dom';

import { Google } from "@mui/icons-material";
import { Button, Link, ListItem, TextField, Typography } from "@mui/material"
import Grid from '@mui/material/Grid2';
import { AuthLayout } from '../layout/AuthLayout';

export const LoginPage = () => {
    return (
        <AuthLayout title='Login'>
            <form>
                <Grid container>
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
                        <Grid size={{ xs: 12, sm: 6 }}>
                            <ListItem>
                                <Button variant='contained' fullWidth>Login</Button>
                            </ListItem>
                        </Grid>
                        <Grid size={{ xs: 12, sm: 6 }}>
                            <ListItem>
                                <Button variant='contained' fullWidth><Google /><Typography sx={{ ml: 1 }}>Google</Typography></Button>
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
