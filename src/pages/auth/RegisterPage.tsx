import { Box, Button, TextField } from "@mui/material";
import React, { useState } from "react";
import './RegisterPage.css';

export default function RegisterPage() {
    const [form, setForm] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Add registration logic here
        alert("Registered!");
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
                    backgroundColor: "rgba(255,255,255,1)",

                }}
            >
                <div className="register-text">
                    <h2>Registration</h2>
                </div>
                <TextField
                    label="Email address"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    sx={{ marginBottom: 1 }}
                    type='email'
                />
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
                    Register
                </Button>
                <p>Already a member? <a href='/login'>Log In</a></p>
            </Box>
        </Box>
    );
};

