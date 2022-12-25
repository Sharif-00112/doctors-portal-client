import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import { Button, Container } from '@mui/material';
import Typography from '@mui/material/Typography';
import registerImg from '../../../images/images/login.png'
import TextField from '@mui/material/TextField';
import { NavLink, useNavigate } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { useTitle } from '../../../hooks/useTitle';
import CircularProgress from '@mui/material/CircularProgress';
import Alert from '@mui/material/Alert';
  

const Register = () => {
    // const { error, customRegister, handleRegisterSubmitBtn, handleEmailChange, handlePasswordChange } = useAuth();
    const { error, customRegister, isLoading, user, signInUsingGoogle } = useAuth();

    useTitle("Register");

    //redirect after login
    const navigate = useNavigate();

    const [registerData, setRegisterData] = useState({});

    const handleOnChange = e =>{
        const field = e.target.name;
        const value = e.target.value;
        // console.log(field, value);
        const newRegisterData = { ...registerData };
        newRegisterData[field] = value;
        setRegisterData(newRegisterData);
        // console.log(newRegisterData);
        // handleEmailChange(registerData.email);
        // handlePasswordChange(registerData.password);
    }

    const handleRegisterSubmit = e => {
        e.preventDefault();
        if(registerData.password !== registerData.password2){
            alert('Password did not matched!');
            return;
        }
        // handleEmailChange(registerData.email);
        // handlePasswordChange(registerData.password);
        // handleRegisterSubmitBtn();
        // console.log(registerData.email);
        // console.log(registerData.password);

        customRegister(registerData.email, registerData.password, navigate);
        // alert('Register Clicked!');
        // alert(error);
    }

    return (
        <div>
            <Container sx={{ my:5 }}>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2}>
                        <Grid sx={{ mt:5 }} xs={12} md={6}>
                            <Typography sx={{ my:2, fontSize: 25, fontWeight: 600 }} style={{color: '#5CE7ED'}} variant="h4" component="div">
                                User Registration
                            </Typography>
                                                        
                            {/* error  */}
                            {error && <Alert severity="error">{error}</Alert>}
                            
                            { (!isLoading && !user.email) && <form onSubmit={ handleRegisterSubmit }>
                                <TextField 
                                    sx={{ width:'75%', m:1 }}
                                    // required
                                    id="standard-basic"
                                    name='name' 
                                    type='text'
                                    onChange={handleOnChange}
                                    label="Your Name" 
                                    variant="standard" />
                                <br />
                                <TextField 
                                    sx={{ width:'75%', m:1 }}
                                    required
                                    id="standard-basic"
                                    name='email' 
                                    type='email'
                                    onChange={handleOnChange}
                                    label="Your Email" 
                                    variant="standard" />
                                <br />
                                <TextField 
                                    sx={{ width:'75%', m:1 }}
                                    required
                                    id="standard-basic" 
                                    name='password'
                                    onChange={handleOnChange}
                                    label="Enter a strong Password" 
                                    type="password"
                                    variant="standard" />
                                <br />
                                <TextField 
                                    sx={{ width:'75%', m:1 }}
                                    required
                                    id="standard-basic" 
                                    name='password2'
                                    onChange={handleOnChange}
                                    label="Confirm Password" 
                                    type="password"
                                    variant="standard" />
                                <br />
                                {/* <Typography sx={{ mt:2, fontSize: 14, fontWeight: 400 }} style={{color: 'orange'}} variant="h6" component="div">
                                    "Hints: Password should have minimum 8 characters length, 1 letter in Upper Case, 1 letter in Lower Case, 1 Special Character and 1 number"
                                </Typography> */}
                                <br />
                                <Button type='submit' sx={{ width:'50%',m:3 }} variant="contained" style={{backgroundColor: '#5CE7ED'}}>
                                    Register
                                </Button>
                                <br />
                                Or
                                <br />
                                <Button onClick={signInUsingGoogle} type='' sx={{ width:'75%',m:3 }} variant="contained" style={{backgroundColor: 'red'}}>
                                    Register with GOOGLE
                                </Button>
                                <br />
                                <NavLink 
                                    // style={{ textDecoration:'none'}} 
                                    to='/login'>
                                    <Button sx={{ color: 'black' }}>
                                        Already Registered? Please Login here
                                    </Button>
                                </NavLink>
                            </form>}
                            {/* Spinner  */}
                            {isLoading && <CircularProgress />}

                            {/* success alert  */}
                            {user?.email && <Alert severity="success">Registration and Login succeeded for "{user.email}"</Alert>}

                        </Grid>
                        <Grid xs={12} md={6}>
                            <img style={{ width:'80%' }} src={registerImg} alt="" />
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </div>
    );
};

export default Register;