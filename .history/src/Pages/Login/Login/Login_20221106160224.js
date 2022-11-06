import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import { Container } from '@mui/material';

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
                    2
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
};

export default Login;