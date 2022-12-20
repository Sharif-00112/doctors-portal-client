import { Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Payment = () => {
    const {appointmentId} = useParams();
    const [appointment, setAppointment] = useState({});

    useEffect( () =>{
        fetch(`http://localhost:3005/appointments/${appointmentId}`)
        .then(res => res.json())
        .then(data => setAppointment(data));
    }, [appointmentId])
    return (
        <div>
            <Typography sx={{ fontWeight: 600, mb:2 }} variant="h5" component="div">
                Payment for: {appointmentId}
            </Typography>
            <Typography sx={{ fontWeight: 600, mb:2 }} variant="h6" component="div">
                Please pay: {appointment.price}
            </Typography>
        </div>
    );
};

export default Payment;