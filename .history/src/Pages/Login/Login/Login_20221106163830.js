import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import { Container } from '@mui/material';
import Typography from '@mui/material/Typography';
import loginImg from '../../../images/images/login.png'
import TextField from '@mui/material/TextField';

const Login = () => {
    const handleLoginSubmit = e => {
        e.preventDefault();

    }

    return (
        <Container sx={{ py:10 }}>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid xs={12} md={6}>
                        <Typography sx={{ my:2, fontSize: 25, fontWeight: 600 }} style={{color: '#5CE7ED'}} variant="h4" component="div">
                            Login
                        </Typography>
                        <form onSubmit={ handleLoginSubmit }>
                            <TextField 
                                id="standard-basic" 
                                label="Your Email" 
                                variant="standard" />
                            <br />
                            <TextField 
                                id="standard-basic" 
                                label="Your Password" 
                                type="password"
                                variant="standard" />
                        </form>

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