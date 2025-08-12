import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';


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
                <TextField
                    label="Első mező"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Második mező"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                />
                <Button variant="contained" color="primary" fullWidth>
                    Küldés
                </Button>
            </Box>
        </Box>
    );
}
