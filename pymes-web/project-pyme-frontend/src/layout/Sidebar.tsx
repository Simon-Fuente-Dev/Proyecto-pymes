//Componentes de mui
import {
    AppBar,
    Box,
    CssBaseline,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Toolbar,
    Typography,
    Divider
} from "@mui/material";
//Iconos de mui
import MenuIcon from '@mui/icons-material/Menu';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import HomeIcon from '@mui/icons-material/Home';
import BarChartIcon from '@mui/icons-material/BarChart';
import StarIcon from '@mui/icons-material/Star';

import { styled } from '@mui/material/styles';

import { useLocation, useNavigate } from 'react-router-dom'


const StyledListItem = styled(ListItem)(({ theme }) => ({
    cursor: 'pointer',
    '& .MuiListItemText-primary': {
        fontSize: '1rem',
        fontWeight: 500,
    },
}))

// const drawerWidth = 220;

const items = [
    { label: 'Pagina Principal', icon: <HomeIcon />, path: '/sda' },
    { label: 'Productos y servicios', icon: <BusinessCenterIcon />, path: '/sda' },
    { label: 'Estadisticas', icon: <BarChartIcon />, path: '/sda' },
    { label: 'Comentarios y Calificaciones', icon: <StarIcon />, path: '/sda' },
];


const Sidebar = () => {
    const { pathname } = useLocation()
    return (
        <Box sx={{ display: "flex" }}>
            <CssBaseline />


            {/* Sidebar permanente */}
            <Drawer
                variant="permanent"
                sx={{
                    flexShrink: 0,
                    [`& .MuiDrawer-paper`]: { boxSizing: 'border-box' },
                }}
            >
                <Toolbar>
                    <Typography variant="h6">Mi empresa</Typography>
                </Toolbar>
                <Divider />
                <Box sx={{ overflow: 'auto' }}>
                    <List>
                        {items.map((item) => {
                            const selected = pathname === item.path;
                            return (
                                <StyledListItem button
                                    key={item.path}
                                    selected={selected}
                                    onClick={() => { console.log(item.path) }}
                                >
                                    <ListItemIcon>
                                        {item.icon}
                                    </ListItemIcon>
                                    <ListItemText primary={item.label}/>
                                </StyledListItem>
                            )
                        })}
                        {/* <StyledListItem button>
                            <ListItemIcon>
                                <HomeIcon />
                            </ListItemIcon>
                            <ListItemText primary="Pagina Principal" />
                        </StyledListItem>
                        <StyledListItem button>
                            <ListItemIcon>
                                <BusinessCenterIcon />
                            </ListItemIcon>
                            <ListItemText primary="Productos y servicios" />
                        </StyledListItem>
                        <StyledListItem button>
                            <ListItemIcon>
                                <BarChartIcon />
                            </ListItemIcon>
                            <ListItemText primary="Estadisticas" />
                        </StyledListItem> */}
                    </List>
                </Box>
            </Drawer>
        </Box>

    )
}


export default Sidebar