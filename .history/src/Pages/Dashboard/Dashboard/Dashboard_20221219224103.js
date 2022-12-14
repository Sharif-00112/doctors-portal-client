import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
// import InboxIcon from '@mui/icons-material/MoveToInbox';
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';
// import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import DashboardHome from '../DashboardHome/DashboardHome';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import AddDoctor from '../AddDoctor/AddDoctor';
import AdminRoute from '../../Login/AdminRoute/AdminRoute';

import { 
  Routes,
  Route
} from "react-router-dom";
import Appointment from '../../Appointment/Appointment/Appointment';
import useAuth from '../../../hooks/useAuth';
import Payment from '../Payment/Payment';
 
const drawerWidth = 220;

function Dashboard(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const {admin} = useAuth();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar sx={{}} />
      <Divider />

      <Link 
        style={{ textDecoration:'none', color:'black' }}
        to = 'dashboard'>
        <Button sx={{mx:3}} color="inherit">Dashboard</Button>
      </Link>
      <Link 
        style={{ textDecoration:'none', color:'black' }}
        to = 'appointment'>
        <Button sx={{mx:3}} color="inherit">Appointment</Button>
      </Link>
      {admin && <Box>
        <Link 
          style={{ textDecoration:'none', color:'black' }}
          to = 'makeAdmin'>
          <Button sx={{mx:3}} color="inherit">Make Admin</Button>
        </Link>
        <Link 
          style={{ textDecoration:'none', color:'black' }}
          to = 'addDoctor'>
          <Button sx={{mx:3}} color="inherit">Add Doctor</Button>
        </Link>
      </Box>}

      <Divider />
      {/* <List>
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
      </List> */}
      {/* <Divider /> */}
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
          ml: { sm: `${drawerWidth}px` }
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
            to = '/home'>
            <Button sx={{mx:2}} color="inherit">Home</Button>
          </Link>
          <Link 
            style={{ textDecoration:'none', color:'white' }}
            to = '/appointment'>
            <Button sx={{mx:2}} color="inherit">Appointment</Button>
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

          <Routes>
            <Route path = 'appointment' element={<Appointment/>}/>
            <Route path = '/' element={<DashboardHome/>}/>
            <Route path = 'dashboard' element={<DashboardHome/>}/>
            <Route path = {`payment/:appointmentId`} element={<Payment></Payment>}/>
            {/* way-1 to secure route through AdminRoute  */}
            <Route path = 'makeAdmin' element = {
              <AdminRoute>
                <MakeAdmin></MakeAdmin>
              </AdminRoute>
            }> </Route>
            <Route path = 'addDoctor' element = {
              <AdminRoute>
                <AddDoctor></AddDoctor>
              </AdminRoute>
            }> </Route>
          </Routes>
          
      </Box>
    </Box>
  );
}

Dashboard.propTypes = {
  window: PropTypes.func,
};

export default Dashboard;
