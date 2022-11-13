import React, { useState } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import {Button} from '@mui/material';
import useAuth from '../../../hooks/useAuth';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const BookingModal = ({ openBooking, handleBookingClose, booking, date }) => {
    const { name, time } = booking
    const { user } = useAuth();
    const initialInfo = {
        patientName: user.displayName,
        email: user.email,
        phone: ''
    }
    const [bookingInfo, setBookingInfo] = useState(initialInfo);

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = {...bookingInfo};
        newInfo[field] = value;
        console.log(newInfo);
        setBookingInfo(newInfo);
    }

    const handleBookingSubmit = e =>{
        e.preventDefault();

        //collect form data  


        //send data to the server and database


        alert('Appointment Submitted');
        handleBookingClose()
    }

    return (
        <div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={openBooking}
                onClose={handleBookingClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                timeout: 500,
                }}
            >
                <Fade in={openBooking}>
                    <Box sx={style}>
                            <Typography style={{ textAlign: 'center'}} sx={{ mb:3, fontSize: 20, fontWeight: 600, color: '#5CE7ED'}} variant='h6' gutterBottom component='div'>
                                {name}
                            </Typography>
                        <form onSubmit={handleBookingSubmit}>
                        <TextField
                            disabled
                            label="Date"
                            sx={{width: "90%", m:1 }}
                            id="outlined-size-small"
                            defaultValue={date.toDateString()}
                            size="small"
                            />
                        <TextField
                            disabled
                            label="Time Slot"
                            sx={{width: "90%", m:1 }}
                            id="outlined-size-small"
                            defaultValue={time}
                            size="small"
                            />
                        <TextField
                            sx={{width: "90%", m:1 }}
                            required
                            label="Full Name"
                            id="outlined-size-small"
                            placeholder='Your Name'
                            name='patientName'
                            defaultValue={user.displayName}
                            onBlur={handleOnBlur}
                            size="small"
                            />
                        <TextField
                            sx={{width: "90%", m:1 }}
                            // required
                            label="Email Address"
                            id="outlined-size-small"
                            placeholder='Your Email'
                            name='email'
                            defaultValue={user.email}
                            onBlur={handleOnBlur}
                            size="small"
                            />
                        <TextField
                            sx={{width: "90%", m:1 }}
                            required
                            label="Phone"
                            id="outlined-size-small"
                            placeholder='Phone Number'
                            name='phone'
                            // defaultValue='+880'
                            onBlur={handleOnBlur}
                            size="small"
                            />
                        <Button type='submit' sx={{m:1}} variant="contained" style={{backgroundColor: '#5CE7ED'}}>Submit</Button>
                        <Button onClick={handleBookingClose} sx={{m:1}} variant="contained" style={{backgroundColor: 'gray'}}>Cancel</Button>
                        </form>
                    </Box>
                </Fade>
            </Modal>
        </div>
    );
};

export default BookingModal;