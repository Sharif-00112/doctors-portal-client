import { Typography } from '@mui/material';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const Payment = () => {
    const {appointmentId} = useParams();
    const [appointment, setAppointment] = useState([]);
    const url = `https://doctors-portal-372608.et.r.appspot.com/appointments/${appointmentId}`;
    console.log(url);
    return (
        <div>
            <Typography sx={{ fontWeight: 600, mb:3 }} variant="h6" component="div">
                Payment for: {appointmentId}
            </Typography>
        </div>
    );
};

export default Payment;