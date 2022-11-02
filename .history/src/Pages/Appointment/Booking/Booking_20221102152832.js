import React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import {Button} from '@mui/material';



const Booking = ({booking}) => {
    const { id, name, time, space } = booking
    return (
        <div>
            <Paper elevation={3} sx={{py:5}}>
                <Typography sx={{pt:1, fontSize: 20, fontWeight: 600, color: '#5CE7ED'}} variant='h5' gutterBottom component='div'>
                    {name}
                </Typography>
                <Typography sx={{pt:1, fontSize: 18, fontWeight: 500, color: 'black'}} variant='h6' gutterBottom component='div'>
                    {time}
                </Typography>
                <Typography sx={{fontSize: 12, fontWeight: 500, color: 'gray'}} variant='caption' display='block' gutterBottom>
                    {space} slots available
                </Typography>
                <Button sx={{mt:1}} variant="contained" style={{backgroundColor: '#5CE7ED'}}>Book Appointment</Button>
            </Paper>
        </div>
    );
};

export default Booking;