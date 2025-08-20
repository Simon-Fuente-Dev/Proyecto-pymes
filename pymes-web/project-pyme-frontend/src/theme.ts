//Define un tema global de material ui

import { createTheme } from "@mui/material";

const theme = createTheme({
    palette: {
        mode: 'dark',
        primary: {main: '#1976d2'},
        secondary: {main: '#9c27b0'}
    },
    components: {
        MuiAppBar: {
            styleOverrides: {
                root: {
                    boxShadow: 'none',
                    borderBottom: '1px solid #eee'
                }
            }
        }
    }
});

export default theme;