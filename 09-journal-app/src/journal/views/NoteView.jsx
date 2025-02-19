import { SaveOutlined } from "@mui/icons-material"
import { Button, Grid2 as Grid, TextField, Typography } from "@mui/material"
import { ImageGallery } from "../components"

export const NoteView = () => {
    return (
        <Grid container direction='column' justifyContent='space-between' alignItems='center' sx={{ mb: 1 }}>
            <Grid size={12} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography fontSize={39} fontWeight='light'>19 de febrero de 2025</Typography>

                <Button color="primary" sx={{ padding: 2 }}>
                    <SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
                    Guardar
                </Button>
            </Grid>
            <Grid container sx={{ mt: 2 }} size={12}>
                <TextField
                    type="text"
                    variant="filled"
                    fullWidth
                    placeholder="Ingrese un título"
                    label='Título'
                    sx={{ border: 'none', mb: 1 }}
                />
                <TextField
                    type="text"
                    variant="filled"
                    fullWidth
                    multiline
                    placeholder="¿Qué sucedió el dia hoy? "
                    label='Descripción'
                    minRows={5}
                />
            </Grid>
            <ImageGallery></ImageGallery>
        </Grid >
    )
}
