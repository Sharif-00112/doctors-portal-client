import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
// import Grid from '@mui/material/Unstable_Grid2';
// import Calendar from '../../Shared/Calendar/Calendar';
// import Appointments from '../Appointments/Appointments';
// import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
// import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import NotFound from '../../NotFound/NotFound';
import DashboardHome from '../DashboardHome/DashboardHome';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import AddDoctor from '../AddDoctor/AddDoctor';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
 
const drawerWidth = 220;

function Dashboard(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  // const [date, setDate] = useState(new Date());

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />

      <Link 
        style={{ textDecoration:'none', color:'black' }}
        to = '/appointment'>
        <Button sx={{mx:3}} color="inherit">Appointment</Button>
      </Link>
      <Link 
        style={{ textDecoration:'none', color:'black' }}
        to = '/dashboard'>
        <Button sx={{mx:3}} color="inherit">Dashboard</Button>
      </Link>
      <Link 
        style={{ textDecoration:'none', color:'black' }}
        to = '/makeAdmin'>
        <Button sx={{mx:3}} color="inherit">Make Admin</Button>
      </Link>
      <Link 
        style={{ textDecoration:'none', color:'black' }}
        to = '/addDoctor'>
        <Button sx={{mx:3}} color="inherit">Add Doctor</Button>
      </Link>

      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Dashboard
          </Typography>
          <Link 
            style={{ textDecoration:'none', color:'white' }}
            // style={{ textDecoration:'none' }}
            to = '/appointment'>
            <Button sx={{mx:3}} color="inherit">Appointment</Button>
            {/* Appointment */}
          </Link>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />

        {/* <Typography paragraph>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
              <Grid xs={12} md={5}>
                <Typography sx={{ fontWeight: 600, my:3 }} variant="h6" component="div">
                  Please select your booking date:
                </Typography>
                <Calendar
                  date={date}
                  setDate={setDate}
                ></Calendar>
              </Grid>
              <Grid xs={12} md={7}>
                <Appointments
                  date={date}
                ></Appointments>
              </Grid>
            </Grid>
          </Box>
        </Typography> */}

        <Router>
          <Routes>
            <Route exact path = '/dashboard' element={<DashboardHome/>}/>
            <Route exact path = '/dashboard/makeAdmin' element={<MakeAdmin/>}/>
            <Route exact path = '/dashboard/addDoctor' element={<AddDoctor/>}/>
            <Route exact path = '*' element={<NotFound/>}/>
          </Routes>
        </Router>

      </Box>
    </Box>
  );
}

Dashboard.propTypes = {
  window: PropTypes.func,
};

export default Dashboard;
