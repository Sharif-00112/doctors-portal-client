import React from 'react';
// import { Spinner } from 'react-bootstrap';
import { Navigate } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
// import useAuth from '../../../hooks/useAuth';
import CircularProgress from '@mui/material/CircularProgress';


const PrivateRoute = ({children}) => {
    // const {children, ...rest} = props;
    // const {user, isLoading} = useAuth();
    const { user, isLoading } = useAuth();
  
    if(isLoading){ return <CircularProgress /> }
    return (
        user.email ? children 
        : 
        <Navigate to="/login" />
    );
};

export default PrivateRoute;