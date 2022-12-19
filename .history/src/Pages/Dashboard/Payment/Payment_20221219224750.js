import { Typography } from '@mui/material';
import React from 'react';

const Payment = () => {
    return (
        <div>
            <Typography sx={{ fontWeight: 600, mb:2 }} variant="h6" component="div">
                Please pay for: 
            </Typography>
        </div>
    );
};

export default Payment;