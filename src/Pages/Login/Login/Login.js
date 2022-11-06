import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import { Container } from '@mui/material';
import loginImg from '../../../images/images/login.png'

const Login = () => {
    return (
        <Container>
            <h2>Login</h2>

            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid xs={12} md={6}>
                    1
                    </Grid>
                    <Grid xs={12} md={6}>
                        <img style={{ width:'80%' }} src={loginImg} alt="" />
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
};

export default Login;