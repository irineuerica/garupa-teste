import { createTheme } from '@mui/material';

export const theme = createTheme({
    palette: {
        primary: {
            main:'#4BBEA3',
            dark: '#039782'
        },
        secondary: {
            main: '#E81E63'
        },
        error: {
            main: '#D63232'
        },
        text: {
            primary: '#1e1e1e',
        },
        background:{
           default: '#f6f6f6'
        }
    },
    typography: {
        fontFamily: `"Roboto", "Helvetica", "Arial", sans-serif`,
    }

});