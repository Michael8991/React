import { DeleteOutline, SaveOutlined, UploadFileOutlined } from "@mui/icons-material"
import { Button, Grid2 as Grid, IconButton, TextField, Typography } from "@mui/material"
import { ImageGallery } from "../components"
import { useForm } from "../../hooks/useForm"
import { useDispatch, useSelector } from "react-redux"
import { useEffect, useMemo, useRef } from "react"
import { setActiveNote, startDeleatingNote, startSavingNote, startUploadingFiles } from "../../store/journal"
import Swal from "sweetalert2"
import 'sweetalert2/dist/sweetalert2.css'

export const NoteView = () => {

    const dispatch = useDispatch()

    const { active: activeNote, messageSaved, isSaving } = useSelector(state => state.journal)

    const { body, title, onInputChange, formState, date } = useForm(activeNote)

    const dateString = useMemo(() => {
        const newDate = new Date(date)
        return newDate.toUTCString()
    }, [date])

    const fileInputRef = useRef()

    useEffect(() => {
        dispatch(setActiveNote(formState))
    }, [formState])

    const onSaveNote = () => {
        dispatch(startSavingNote())
    }
    useEffect(() => {
        if (messageSaved.length > 0) {
            Swal.fire('Nota actualizada', messageSaved, 'success')
        }
    }, [messageSaved])

    const onFileInputChange = ({ target }) => {
        if (target.files === 0) return;
        dispatch(startUploadingFiles(target.files))
    }

    const onDelete = () => {
        dispatch(startDeleatingNote())
    }

    return (
        <Grid container direction='column' justifyContent='space-between' alignItems='center' sx={{ mb: 1 }}>
            <Grid size={12} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography fontSize={39} fontWeight='light'>{dateString}</Typography>

                <input type="file" multiple onChange={onFileInputChange} style={{ display: 'none' }} ref={fileInputRef} />
                <IconButton
                    color="primary"
                    disabled={isSaving}
                    onClick={() => fileInputRef.current.click()}
                >
                    <UploadFileOutlined />
                </IconButton>

                <Button disabled={isSaving} onClick={onSaveNote} color="primary" sx={{ padding: 2 }}>
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
                    name="title"
                    value={title}
                    onChange={onInputChange}
                />
                <TextField
                    type="text"
                    variant="filled"
                    fullWidth
                    multiline
                    placeholder="¿Qué sucedió el dia hoy? "
                    label='Descripción'
                    minRows={5}
                    name="body"
                    value={body}
                    onChange={onInputChange}
                />
            </Grid>

            <Grid container sx={{ display: 'flex', justifyContent: 'end' }}>
                <Button
                    onClick={onDelete}
                    sx={{ mt: 2 }}
                    color="error"
                >
                    <DeleteOutline />
                    Borrar
                </Button>
            </Grid>
            <ImageGallery images={activeNote.imageUrls}></ImageGallery>
        </Grid >
    )
}
