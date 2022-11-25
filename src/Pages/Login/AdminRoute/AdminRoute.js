import React from 'react';
import { Navigate } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import CircularProgress from '@mui/material/CircularProgress';


const AdminRoute = ({children}) => {
    const { user, admin, isLoading } = useAuth();
  
    if(isLoading){ return <CircularProgress /> }
    return (
        user.email && admin ? children 
        : 
        <Navigate to="/home" />
    );
};

export default AdminRoute;