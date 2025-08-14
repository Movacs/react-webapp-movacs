import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import './LoginPage.css';


export default function LoginPage() {
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
    };

    return (
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            minHeight="100vh"
            sx={{ color: 'text.primary' }}
        >
            <Box
                sx={{
                    p: 4,
                    bgcolor: "white",
                    borderRadius: 2,
                    boxShadow: 3,
                    width: 300,
                }}
            >
                <div className='login-text'>
                    <h2>Log In</h2>
                </div>
                <TextField
                    label="Username"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    sx={{ marginBottom: 1 }}
                />
                <TextField
                    label="Password"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    sx={{ marginBottom: 5 }}
                    type="password"
                />
                <Button variant="contained" color="primary" fullWidth>
                    Log in
                </Button>
                <p>Not a member? <a href='/register'>Register</a></p>
            </Box>
        </Box>
    );
}
