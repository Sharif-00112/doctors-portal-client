import React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import {Button} from '@mui/material';
import BookingModal from '../BookingModal/BookingModal';



const Booking = ({ booking, date }) => {
    const { name, time, space } = booking

    const [openBooking, setOpenBooking] = React.useState(false);
    const handleBookingOpen = () => setOpenBooking(true);
    const handleBookingClose = () => setOpenBooking(false);

    return (
        <div>
            <Paper elevation={3} sx={{py:5}}>
                <Typography sx={{fontSize: 20, fontWeight: 600, color: '#5CE7ED'}} variant='h5' gutterBottom component='div'>
                    {name}
                </Typography>
                <Typography sx={{fontSize: 18, fontWeight: 500, color: 'black'}} variant='h6' gutterBottom component='div'>
                    {time}
                </Typography>
                <Typography sx={{fontSize: 12, fontWeight: 500, color: 'gray'}} variant='caption' display='block' gutterBottom>
                    {space} slots available
                </Typography>
                <Button onClick={handleBookingOpen} sx={{mt:1}} variant="contained" style={{backgroundColor: '#5CE7ED'}}>Book Appointment</Button>
            </Paper>
            <BookingModal
                booking={booking}
                handleBookingClose={handleBookingClose}
                openBooking={openBooking}
                date={date}
            ></BookingModal>
        </div>
    );
};

export default Booking;