import { CircularProgress, Grid2 as Grid, Typography } from "@mui/material"

export const CheckingAuth = () => {
    return (
        <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            sx={{ minHeight: '100vh', backgroundColor: 'primary.main', padding: 4 }}
        >
            <Grid>
                <CircularProgress color="warning" />
            </Grid>
        </Grid>
    )
}
