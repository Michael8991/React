import { TurnedInNot } from "@mui/icons-material"
import { Grid2 as Grid, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material"
import { useMemo } from "react"
import { useDispatch, useSelector } from "react-redux"
import { startEditNote } from "../../store/journal"

export const SideBarItem = ({ note }) => {

    const dispatch = useDispatch()

    // const { uid } = useSelector(state => state.journal)

    const onEditNote = () => {
        dispatch(startEditNote(note))
        // console.log(note.id)
    }

    const newTitle = useMemo(() => {
        return note.title.length > 17
            ? note.title.substring(0, 17) + '...'
            : note.title
    }, [note.title])

    return (
        <ListItem key={note.id} disablePadding>
            <ListItemButton
                onClick={onEditNote}
            >
                <ListItemIcon>
                    <TurnedInNot />
                </ListItemIcon>
                <Grid container>
                    <ListItemText
                        primary={newTitle} />
                </Grid>
            </ListItemButton>
        </ListItem>
    )
}
