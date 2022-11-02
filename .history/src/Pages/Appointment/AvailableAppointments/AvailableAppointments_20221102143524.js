import React from 'react';
import { Container } from '@mui/system';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';

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

            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid xs={6} md={4}>
                        *
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
};

export default AvailableAppointments;