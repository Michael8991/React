import { StarOutline, } from "@mui/icons-material"
import { Grid2 as Grid, Typography } from "@mui/material"

export const NothingSelectedView = () => {
    return (
        <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            sx={{ minHeight: 'calc(100vh - 115px)', backgroundColor: 'primary.main', borderRadius: 3 }}
        >
            <Grid >
                <StarOutline sx={{ fontSize: 100, color: 'white' }} />
            </Grid>
            <Grid >
                <Typography fontWeight={300} color="white" variant="h5" >Selecciona o crea una nota</Typography>
            </Grid>
        </Grid>
    )
}
