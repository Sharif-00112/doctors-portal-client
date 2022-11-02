import React from 'react';
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';

const Booking = ({ id, name, time, space }) => {
    return (
        <div>
            <Paper elevation={3} >
                <Typography sx={{ mb: 1, mt: 1, fontWeight: 500, color: '#5CE7ED' }} variant="h5" component="div">
                        {name}
                </Typography>
            </Paper>
        </div>
    );
};

export default Booking;