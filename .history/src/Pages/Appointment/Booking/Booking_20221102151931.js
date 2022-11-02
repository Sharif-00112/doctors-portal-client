import React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';


const Booking = ({booking}) => {
    const { id, name, time, space } = booking
    return (
        <div>
            <Paper elevation={3} >
                <Typography variant='h5' gutterBottom component='div'>
                    {name}
                </Typography>
                <Typography variant='h6' gutterBottom component='div'>
                    {time}
                </Typography>
                <Typography variant='caption' display='block' gutterBottom>
                    {space} slots available
                </Typography>
            </Paper>
        </div>
    );
};

export default Booking;