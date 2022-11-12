import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Navigation = () => {
    const { user, logout } = useAuth();
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
                            style={{ textDecoration:'none', color:'white' }}
                            to = '/home'>
                            <Button color="inherit">Home</Button>
                        </Link>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            Doctors Portal
                        </Typography>
                        <Link 
                            style={{ textDecoration:'none', color:'white' }}
                            to = '/appointment'>
                            <Button color="inherit">Appointment</Button>
                        </Link>
                        {/* <NavLink 
                            style={{ textDecoration:'none', color:'white' }}
                            to = '/login'>
                            <Button color="inherit">Login</Button>
                        </NavLink> */}
                        {
                            user?.email ?
                            <NavLink 
                                style={{ textDecoration:'none', color:'white' }}
                                to = '/login'>
                                <Button onClick={logout} color="inherit">Logout</Button>
                            </NavLink>
                            :
                            <NavLink 
                                style={{ textDecoration:'none', color:'white' }}
                                to = '/login'>
                                <Button color="inherit">Login</Button>
                            </NavLink>
                        }
                    </Toolbar>
                </AppBar>
            </Box>
            <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                </IconButton>
                </Tooltip>
                <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
                >
                {settings.map((setting) => (
                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                    </MenuItem>
                ))}
                </Menu>
            </Box>
        </div>
    );
};

export default Navigation;