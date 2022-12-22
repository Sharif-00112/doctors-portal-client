import { Typography } from '@mui/material';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Payment = () => {
    const {rawAppointmentId} = useParams();
    const appointmentId = rawAppointmentId.split(':');
    // const [appointment, setAppointment] = useState([]);
    // const url = `http://localhost:3005/appointments${appointmentId}`
    console.log(appointmentId);
    // console.log(url);

    // useEffect( () => {
    //     fetch()
    // }, [])

    return (
        <div>
            <Typography sx={{ fontWeight: 600, mb:2 }} variant="h6" component="div">
                Please pay for: {appointmentId}
            </Typography>
        </div>
    );
};

export default Payment;