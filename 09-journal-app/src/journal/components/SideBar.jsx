import { TurnedInNot } from "@mui/icons-material"
import { Box, Divider, Drawer, Grid2 as Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from "@mui/material"

export const SideBar = ({ drawerWitdh }) => {
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
                        Michael Rodríguez
                    </Typography>
                </Toolbar>
                <Divider />
                <List>
                    {
                        ['Enero', 'Febrero', 'Marzo', 'Abril'].map(text => (
                            <ListItem key={text} disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <TurnedInNot />
                                    </ListItemIcon>
                                    <Grid container>
                                        <ListItemText
                                            primary={text}
                                            secondary={'Lorem ipsum dolor sit amet consectetur adipisicing elit.'} />
                                    </Grid>
                                </ListItemButton>
                            </ListItem>
                        ))
                    }
                </List>
            </Drawer>
        </Box>
    )
}
