import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <div>
            <Box sx={{ flexGrow: 1, pb:2 }}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Link 
                            style={{ textDecoration:'none', color:'white'}}
                            to = '/home'>
                            <Button color="inherit">Home</Button>
                        </Link>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            Doctors Portal
                        </Typography>
                        <Link to = '/appointment'>
                            <Button color="inherit">Appointment</Button>
                        </Link>
                        <NavLink to = '/login'>
                            <Button color="inherit">Login</Button>
                        </NavLink>
                        {/* <Button color="inherit">Login</Button> */}
                    </Toolbar>
                </AppBar>
            </Box>
        </div>
    );
};

export default Navigation;