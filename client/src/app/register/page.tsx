"use client"
import React, { useState } from 'react';
import { Button, TextField, Container, Typography } from '@mui/material';
import axios from 'axios';
import { Console } from 'console';
import { useRouter } from 'next/router';

const Register: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter()

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        // Handle registration logic here
        try {
            const userInfo = {
                email: email,
                password: password
            }

            const res = await axios.post('http://localhost:8000/user/register', userInfo)
            localStorage.setItem('user', JSON.stringify(res.data));
            router.push('/')

            console.log(res.data)
            
        } catch (error) {
            
        }
    };

    return (
        <Container maxWidth="xs">
            <Typography variant="h5" component="h2" align="center" sx={{mt: 4, mb: 2}}>
                Register
            </Typography>
            <form onSubmit={handleSubmit}>
                <TextField
                    fullWidth
                    label="Email"
                    variant="outlined"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    sx={{mb: 2}}
                />
                <TextField
                    fullWidth
                    label="Password"
                    variant="outlined"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    sx={{mb: 2}}
                />
                <Button variant="contained" color="primary" type="submit" fullWidth>
                    Register
                </Button>
            </form>
        </Container>
    );
};

export default Register;