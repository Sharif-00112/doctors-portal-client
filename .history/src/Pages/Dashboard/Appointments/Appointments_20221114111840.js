import { Typography } from '@mui/material';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import useAuth from '../../../hooks/useAuth';

const Appointments = () => {
    const { user } = useAuth();
    const [appointments, setAppointments] = useState([]);

    useEffect( () =>{
        const url = `http://localhost:3005/appointments?email=${user.email}`
        fetch(url)
        .then(res => res.json())
        .then(data => setAppointments(data))
    },[user.email])

    return (
        <div>
            <Typography sx={{ fontWeight: 600 }} variant="h4" component="div">
                Appointments: {appointments.length}
            </Typography>

        </div>
    );
};

export default Appointments;