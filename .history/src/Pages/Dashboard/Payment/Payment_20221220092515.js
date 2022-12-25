import { Typography } from '@mui/material';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Payment = () => {
    const {appointmentId} = useParams();
    // const [appointment, setAppointment] = useState([]);
    const url = `https://doctors-portal-372608.et.r.appspot.com/appointments/${appointmentId}`
    console.log(appointmentId);
    console.log(url);

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