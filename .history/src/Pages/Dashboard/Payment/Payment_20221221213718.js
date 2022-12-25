import { Typography } from '@mui/material';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CheckoutForm from '../CheckoutForm/CheckoutForm';


const stripePromise = loadStripe('pk_test_51MFhNTGwpStg5ZnpGqZOdcIPAlfJW9pLxfTxBrFSwiCokH3v8vH5XHlPND8HWXzDduRCtleMMlMnap4orL0XCEDU00DecdWaxq')

const Payment = () => {
    const {appointmentId} = useParams();
    const [appointment, setAppointment] = useState([]);
    const url = `https://doctors-portal-372608.et.r.appspot.com/appointments/${appointmentId}`;
    // console.log(url);

    useEffect( () => {
        fetch(url)
        .then(res => res.json())
        .then(data => setAppointment(data))
    }, [url])

    return (
        <div>
            <Typography sx={{ fontWeight: 600, mb:2 }} variant="h5" component="div">
                Payment for- <br />
                Patient: {appointment.patientName} <br />
                Service: {appointment.serviceName} <br />
                Date: {appointment.date}
            </Typography>
            <Typography sx={{ fontWeight: 600, mb:5 }} variant="h6" component="div">
                Please pay: ${appointment.price}
            </Typography>

            <Elements stripe={stripePromise}>
                <CheckoutForm
                    appointment={appointment}
                />
            </Elements>
        </div>
    );
};

export default Payment;