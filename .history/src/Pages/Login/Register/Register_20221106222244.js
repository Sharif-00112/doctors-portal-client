import React from 'react';
import Typography from '@mui/material/Typography';
import Navigation from '../../Shared/Navigation/Navigation';


const Register = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Typography sx={{ my:2, fontSize: 25, fontWeight: 600 }} style={{color: '#5CE7ED'}} variant="h4" component="div">
                Registration Page
            </Typography>
        </div>
    );
};

export default Register;