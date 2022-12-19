import React, { useState } from 'react';
import { Container } from '@mui/system';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import Booking from '../Booking/Booking';
import Alert from '@mui/material/Alert';

const bookings = [
    {
        id: 1,
        name: 'Teeth Orthodontics',
        time: '08.00 AM - 09.00 AM',
        space: 10,
        price: 100
    },
    {
        id: 2,
        name: 'Cosmetic Dentistry',
        time: '09.00 AM - 10.00 AM',
        space: 8,
        price: 200
    },
    {
        id: 3,
        name: 'Teeth Cleaning',
        time: '10.00 AM - 11.00 AM',
        space: 9,
        price: 500
    },
    {
        id: 4,
        name: 'Cavity Protection',
        time: '11.00 AM - 12.00 PM',
        space: 5,
        price: 300
    },
    {
        id: 5,
        name: 'Pediatric Dental',
        time: '06.00 PM - 07.00 PM',
        space: 10,
        price: 1000
    },
    {
        id: 6,
        name: 'Oral Surgery',
        time: '07.00 PM - 08.00 PM',
        space: 10,
        price: 150
    }
]

const AvailableAppointments = ({ date }) => {
    const [bookingSuccess, setBookingSuccess] = useState(false);

    return (
        <Container sx={{mb:5}}>
            {/* {console.log(typeof(date), date)} */}
            <Typography sx={{ mt: 5, mb:3, fontSize: 25, fontWeight: 600, color: '#5CE7ED'}} variant='h4' gutterBottom component='div'>
                Available Appointments on: {date.toDateString()}
            </Typography>
            {bookingSuccess && <Alert severity="info">Appointment booked successfully — check it out!</Alert>}
            <br />
            <Box sx={{ flexGrow: 1 , mt:5}}>
                <Grid container spacing={2}>
                    {
                        bookings.map(booking => (
                            <Grid xs={6} sm={6} md={4} key={booking.id}>
                                <Booking 
                                    key = {booking.id}
                                    booking = {booking}
                                    date={date}
                                    setBookingSuccess={setBookingSuccess}
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