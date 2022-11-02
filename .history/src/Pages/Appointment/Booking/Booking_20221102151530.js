import React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';


const Booking = ({ id, name, time, space }) => {
    return (
        <div>
            <Paper elevation={3} >
                <Typography variant='h5' gutterBottom component='div'>
                    {name}
                </Typography>
            </Paper>
        </div>
    );
};

export default Booking;