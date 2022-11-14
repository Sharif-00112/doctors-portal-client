import { Typography } from '@mui/material';
import React from 'react';
import useAuth from '../../../hooks/useAuth';

const Appointments = () => {
    const {user} = useAuth();
    return (
        <div>
            <Typography sx={{ fontWeight: 600 }} variant="h4" component="div">
                Appointments
            </Typography>

        </div>
    );
};

export default Appointments;