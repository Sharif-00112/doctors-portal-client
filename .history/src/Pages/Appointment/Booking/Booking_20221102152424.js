import React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import {Button} from '@mui/material';



const Booking = ({booking}) => {
    const { id, name, time, space } = booking
    return (
        <div>
            <Paper elevation={3} >
                <Typography sx={{pt:1, fontSize: 20, fontWeight: 600}} style={{color: '#5CE7ED'}} variant='h5' gutterBottom component='div'>
                    {name}
                </Typography>
                <Typography variant='h6' gutterBottom component='div'>
                    {time}
                </Typography>
                <Typography variant='caption' display='block' gutterBottom>
                    {space} slots available
                </Typography>
                <Button sx={{m:2 }} variant="contained" style={{backgroundColor: '#5CE7ED'}}>Book Appointment</Button>
            </Paper>
        </div>
    );
};

export default Booking;