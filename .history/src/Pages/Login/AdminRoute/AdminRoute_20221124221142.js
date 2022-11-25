import React from 'react';
// import { Spinner } from 'react-bootstrap';
import { Navigate } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
// import useAuth from '../../../hooks/useAuth';
import CircularProgress from '@mui/material/CircularProgress';


const AdminRoute = ({children}) => {
    // const {children, ...rest} = props;
    // const {user, isLoading} = useAuth();
    const { user, isLoading } = useAuth();
  
    // if(isLoading){
    //     return <Spinner className='m-2 p-2' animation="border" role="status">
    //         <span className="visually-hidden">Loading...</span>
    //     </Spinner>
    // }
    if(isLoading){ return <CircularProgress /> }
    return (
        user.email ? children 
        : 
        <Navigate to="/login" />
    );
};

export default AdminRoute;