import { Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Payment = () => {
    const {appointmentId} = useParams();
    const [appointment, setAppointment] = useState([]);
    const url = `http://localhost:3005/appointments/${appointmentId}`;
    // console.log(url);

    useEffect( () => {
        fetch(url)
        .then(res => res.json())
        .then(data => setAppointment(data))
    }, [url])

    return (
        <div>
            <Typography sx={{ fontWeight: 600, mb:2 }} variant="h5" component="div">
                Payment for <br />
                Patient: {appointment.patientName} <br />
                Service: {appointment.serviceName} <br />
                Date: {appointment.date}
            </Typography>
            <Typography sx={{ fontWeight: 600, mb:2 }} variant="h6" component="div">
                Please pay: ${appointment.price}
            </Typography>
        </div>
    );
};

export default Payment;