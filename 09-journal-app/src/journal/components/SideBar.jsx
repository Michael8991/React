import { TurnedInNot } from "@mui/icons-material"
import { Box, Divider, Drawer, Grid2 as Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from "@mui/material"
import { useDispatch, useSelector } from "react-redux"
import { SideBarItem } from "./SideBarItem";
import { startEditNote } from "../../store/journal";

export const SideBar = ({ drawerWitdh }) => {



    const { displayName } = useSelector((state) => state.auth);
    const { notes } = useSelector((state) => state.journal);




    return (
        <Box
            component='nav'
            sx={{ width: { sm: drawerWitdh }, flexShrink: { sm: 0 } }}
        >
            <Drawer
                variant='permanent'// Temporary
                open
                sx={{
                    display: { xs: 'block' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWitdh }
                }}
            >
                <Toolbar>
                    <Typography variant='h6' noWrap component='div'>
                        {displayName}
                    </Typography>
                </Toolbar>
                <Divider />
                <List>
                    {
                        notes.map(note => (
                            <SideBarItem key={note.id} note={note} />
                        ))
                    }
                </List>
            </Drawer>
        </Box>
    )
}
