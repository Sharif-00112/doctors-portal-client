import { Typography } from '@mui/material';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import useAuth from '../../../hooks/useAuth';

const Appointments = () => {
    const { user } = useAuth();
    const [appointments, setAppointments] = useState([]);

    useEffect( () =>{
        const url = `https://vast-brushlands-50966.herokuapp.com/appointments?email=${user.email}`
        fetch(url)
    },[])

    return (
        <div>
            <Typography sx={{ fontWeight: 600 }} variant="h4" component="div">
                Appointments
            </Typography>

        </div>
    );
};

export default Appointments;