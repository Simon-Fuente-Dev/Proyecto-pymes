import { AppBar, Box, CssBaseline, Drawer, IconButton, List, ListItem, ListItemIcon, ListItemText, Toolbar } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import EmailIcon from '@mui/icons-material/Email';

import HomeIcon from '@mui/icons-material/Home';
import BarChartIcon from '@mui/icons-material/BarChart';
const drawerWidth = 240;

const Sidebar = () => {

    return (
        <Box sx={{ display: "flex" }}>
            <CssBaseline />
            {/* Sidebar permanente */}
            <Drawer
                variant="permanent"
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
                }}
            >
                <Toolbar>
                    <MenuIcon />
                </Toolbar>
                <Box sx={{ overflow: 'auto' }}>
                    <List>
                        <ListItem button>
                            <ListItemIcon>
                                <HomeIcon />
                            </ListItemIcon>
                            <ListItemText>Pagina Principal</ListItemText>
                        </ListItem>
                        <ListItem button>
                            <ListItemIcon>
                                <BarChartIcon />
                            </ListItemIcon>
                            <ListItemText>Estadisticas</ListItemText>
                        </ListItem>
                        {/*{['Inbox', 'Starred', 'Send email'].map((text, index) => (*/}
                        {/*    <ListItem button key={text}>*/}
                        {/*        <ListItemIcon>*/}
                        {/*            {index % 2 === 0 ? <MenuIcon /> : <EmailIcon />}*/}
                        {/*        </ListItemIcon>*/}
                        {/*        <ListItemText primary={text} />*/}
                        {/*    </ListItem>*/}
                        {/*))}*/}
                    </List>
                </Box>
            </Drawer>
        </Box>

    )
}


export default Sidebar