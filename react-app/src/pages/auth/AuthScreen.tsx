import { useContext, useState } from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Snackbar, useTheme } from '@mui/material';
import { AuthContext } from '../../contexts/authContext';


export function AuthScreen() {
    const { email, setEmail, password, setPassword, handleLogin } = useContext(AuthContext);
    const theme = useTheme();
    const [error, setError] = useState('')
    const [showError, setShowError] = useState(false);

    async function login() {
        try {
            await handleLogin()
        } catch (e: any) {
            setError(e.response.data.message)
            setShowError(true)
        }
    }

    return (
        <Container component="main" maxWidth="xs" >
            <CssBaseline />
            <Box
                sx={{
                    marginTop: 20,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Typography component="h1" variant="h4" color={theme.palette.primary.main}>
                    Login
                </Typography>
                <Box sx={{ mt: 1 }}>
                    <TextField
                        value={email}
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email"
                        name="email"
                        autoFocus
                        onChange={email => setEmail(email.target.value)}
                    />
                    <TextField
                        value={password}
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Senha"
                        type="password"
                        id="password"
                        onChange={password => setPassword(password.target.value)}
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2, color: 'white' }}
                        color="primary"
                        onClick={() => login()}
                    >
                        Entrar
                    </Button>
                </Box>
            </Box>
            <Snackbar
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                open={showError}
                onClose={() => setShowError(false)}
                message={error}
                ContentProps={{
                    sx: {
                      background: theme.palette.error.main
                    }
                  }}/>
        </Container>
    );
}