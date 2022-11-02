import React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material';

const Booking = ({ id, name, time, space }) => {
    return (
        <div>
            <Paper elevation={3} >
                <Typography sx={{ fontSize: 20, fontWeight: 600  }} style={{color: 'black'}} variant="h5" component="div">
                    {id}
                </Typography>
            </Paper>
        </div>
    );
};

export default Booking;