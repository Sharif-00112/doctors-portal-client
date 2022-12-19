import { Typography } from '@mui/material';
import React from 'react';
import { useParams } from 'react-router-dom';

const Payment = () => {
    const {appointmentId} = useParams();
    return (
        <div>
            <Typography sx={{ fontWeight: 600, mb:2 }} variant="h6" component="div">
                Please pay for: {appointmentId}
            </Typography>
        </div>
    );
};

export default Payment;