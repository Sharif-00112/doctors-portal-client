import React from 'react';
import { Container } from '@mui/system';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import Booking from '../Booking/Booking';

const bookings = [
    {
        id: 1,
        name: 'Teeth Orthodontics',
        time: '08.00 AM - 09.00 AM',
        space: 10,
    },
    {
        id: 2,
        name: 'Cosmetic Dentistry',
        time: '09.00 AM - 10.00 AM',
        space: 8,
    },
    {
        id: 3,
        name: 'Teeth Cleaning',
        time: '10.00 AM - 11.00 AM',
        space: 9,
    },
    {
        id: 4,
        name: 'Cavity Protection',
        time: '11.00 AM - 12.00 PM',
        space: 5,
    },
    {
        id: 5,
        name: 'Pediatric Dental',
        time: '06.00 PM - 07.00 PM',
        space: 10,
    },
    {
        id: 6,
        name: 'Oral Surgery',
        time: '07.00 PM - 08.00 PM',
        space: 10,
    }
]

const AvailableAppointments = ({ date }) => {
    return (
        <Container>
            {/* {console.log(typeof(date), date)} */}
            <h2>Available Appointments on {date.toDateString()}</h2>
            <Typography sx={{fontSize: 25, fontWeight: 600, color: '#5CE7ED'}} variant='h4' gutterBottom component='div'>
                Available Appointments on: {date.toDateString()}
            </Typography>

            <Box sx={{ flexGrow: 1 , mt:5}}>
                <Grid container spacing={2}>
                    {
                        bookings.map(booking => (
                            <Grid xs={6} sm={6} md={4} key={booking.id}>
                                <Booking 
                                    key = {booking.id}
                                    booking = {booking}
                                ></Booking>
                            </Grid>
                        ))
                    }
                </Grid>
            </Box>
        </Container>
    );
};

export default AvailableAppointments;