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
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import HomeIcon from '@mui/icons-material/Home';
import BarChartIcon from '@mui/icons-material/BarChart';
import StarIcon from '@mui/icons-material/Star';

import MenuIcon from '@mui/icons-material/Menu';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';

import { styled } from '@mui/material/styles';
import {useState} from "react";
import { useLocation, useNavigate } from 'react-router-dom'


const StyledListItem = styled(ListItem)(({ theme }) => ({
    cursor: 'pointer',
    '& .MuiListItemText-primary': {
        fontSize: '1rem',
        fontWeight: 500,
    },
}))

const drawerWidthOpen = 250;
const drawerWidthClosed = 75;


const items = [
    { label: 'Pagina Principal', icon: <HomeIcon />, path: '/sda' },
    { label: 'Productos y servicios', icon: <BusinessCenterIcon />, path: '/sda' },
    { label: 'Estadisticas', icon: <BarChartIcon />, path: '/sda' },
    { label: 'Comentarios y Calificaciones', icon: <StarIcon />, path: '/sda' },
];


const Sidebar = () => {
    const { pathname } = useLocation()

    const [openMenu, setOpenMenu] = useState(true);
    return (
        <Box sx={{ display: "flex" }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    zIndex: (theme) => theme.zIndex.drawer + 1,
                }}
            >
                <Toolbar sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                    <IconButton
                        onClick={() => {
                            setOpenMenu(!openMenu);
                        }}
                    >
                        {openMenu ? <MenuOpenIcon /> : <MenuIcon />}

                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        Mi Panel de Control
                    </Typography>
                </Toolbar>
            </AppBar>

            {/* Sidebar permanente */}
            <Drawer
                variant="permanent"
                sx={{
                    width: openMenu ? 'auto' : drawerWidthClosed,
                    flexShrink: 0,
                    whiteSpace: "nowrap",
                    boxSizing: "border-box",
                    transition: (theme) =>
                        theme.transitions.create("width", {
                            easing: theme.transitions.easing.sharp,
                            duration: theme.transitions.duration.leavingScreen,
                        }),
                    [`& .MuiDrawer-paper`]: {
                        width: openMenu ? 'auto' : drawerWidthClosed,
                        minWidth: openMenu ? 180 : drawerWidthClosed,
                        boxSizing: 'border-box',
                        backgroundColor: '#1e1e1e',
                        color: '#fff',
                        transition: (theme) =>
                            theme.transitions.create('width', {
                                easing: theme.transitions.easing.sharp,
                                duration: theme.transitions.duration.standard,
                            }),
                    },
                }}
            >
                <Toolbar />
                <Divider />
                <Box sx={{ overflow: 'auto' }}>
                    <List>
                        {items.map((item) => {
                            const selected = pathname === item.path;
                            return (
                                <StyledListItem button
                                    key={item.path}
                                    selected={selected}
                                                sx={{
                                                    display: "flex",
                                                    gap:1
                                                }}
                                    onClick={() => { console.log(item.path) }}

                                >
                                    <ListItemIcon
                                        sx={[
                                            {
                                                minWidth: 0,
                                                justifyContent: 'center',
                                            }
                                        ]}
                                    >
                                        {item.icon}
                                    </ListItemIcon>
                                    <ListItemText
                                        primary={item.label}
                                        sx={{
                                            opacity: openMenu ? 1 : 0,
                                            whiteSpace: 'nowrap',
                                            overflow: "hidden"
                                        }}
                                    />


                                </StyledListItem>
                            )
                        })}

                    </List>
                </Box>
            </Drawer>
        </Box>

    )
}


export default Sidebar