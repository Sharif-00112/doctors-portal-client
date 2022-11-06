import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import { Button, Container } from '@mui/material';
import Typography from '@mui/material/Typography';
import loginImg from '../../../images/images/login.png'
import TextField from '@mui/material/TextField';
import Navigation from '../../Shared/Navigation/Navigation';

const Login = () => {
    const handleOnChange = e =>{
        const field = e.target.name;
        const value = e.target.value;
        console.log(field, value);
    }
    const handleLoginSubmit = e => {
        e.preventDefault();
        alert('Login Clicked!');
    }

    return (
        <div className="">
            <Navigation></Navigation>
            <Container sx={{ my:8 }}>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2}>
                        <Grid sx={{ mt:10 }} xs={12} md={6}>
                            <Typography sx={{ my:2, fontSize: 25, fontWeight: 600 }} style={{color: '#5CE7ED'}} variant="h4" component="div">
                                Please Login Here
                            </Typography>
                            <form onSubmit={ handleLoginSubmit }>
                                <TextField 
                                    sx={{ width:'75%', m:1 }}
                                    id="standard-basic"
                                    name='email' 
                                    onChange={handleOnChange}
                                    label="Your Email" 
                                    variant="standard" />
                                <br />
                                <TextField 
                                    sx={{ width:'75%', m:1 }}
                                    id="standard-basic" 
                                    name='password'
                                    onChange={handleOnChange}
                                    label="Your Password" 
                                    type="password"
                                    variant="standard" />
                                <br />
                                <Button type='submit' sx={{ width:'50%',m:3 }} variant="contained" style={{backgroundColor: '#5CE7ED'}}>Login</Button>
                            </form>

                        </Grid>
                        <Grid xs={12} md={6}>
                            <img style={{ width:'80%' }} src={loginImg} alt="" />
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </div>
    );
};

export default Login;