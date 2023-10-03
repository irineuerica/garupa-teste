import { useContext } from 'react';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import GlobalStyles from '@mui/material/GlobalStyles';
import AppBar from '@mui/material/AppBar';
import { Avatar, Button, CssBaseline, Stack, useTheme } from '@mui/material';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { AuthContext } from '../contexts/authContext';
import SportsBarRoundedIcon from '@mui/icons-material/SportsBarRounded';

export function TopBar() {
    const theme = useTheme();
    const { handleLogout } = useContext(AuthContext)

    return (
        <Stack>
            <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
            <CssBaseline />
            <AppBar
                position="static"
                color="default"
                elevation={0}
                sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}`, backgroundColor: theme.palette.primary.main }}
            >
                <Toolbar sx={{ flexWrap: 'wrap' }}>
                    <Typography variant="h6" color="white" noWrap sx={{ flexGrow: 1 }}>
                    <Avatar sx={{ bgcolor: theme.palette.primary.dark }}>
                        <SportsBarRoundedIcon />
                    </Avatar>
                    </Typography>

                    <Button href="#" variant="outlined" sx={{
                        my: 1, mx: 1.5, backgroundColor: theme.palette.primary.dark, color: 'white', textTransform: 'none', "&:hover": {
                            backgroundColor: theme.palette.primary.dark, color: 'white'
                        },
                    }} endIcon={<ExitToAppIcon />} onClick={() => handleLogout()}>
                        Logout
                    </Button>
                </Toolbar>
            </AppBar>
        </Stack>
    )
}