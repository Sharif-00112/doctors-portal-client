import React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import {Button} from '@mui/material';


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
    const { id, name, time, space } = booking

    // const [openBooking, setOpenBooking] = React.useState(false);
    // const handleBookingOpen = () => setOpenBooking(true);
    // const handleBookingClose = () => setOpenBooking(false);

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
                        <Typography id="transition-modal-title" variant="h6" component="h2">
                            {name}
                        </Typography>
                            <Typography sx={{ m:3, fontSize: 20, fontWeight: 600, color: '#5CE7ED'}} variant='h6' gutterBottom component='div'>
                                {name}
                            </Typography>
                        <form>
                        <TextField
                            disabled
                            sx={{width: "90%", m:1 }}
                            id="outlined-size-small"
                            defaultValue={date.toDateString()}
                            size="small"
                            />
                        <TextField
                            disabled
                            sx={{width: "90%", m:1 }}
                            id="outlined-size-small"
                            defaultValue={time}
                            size="small"
                            />
                        <TextField
                            sx={{width: "90%", m:1 }}
                            id="outlined-size-small"
                            defaultValue='Your Name'
                            size="small"
                            />
                        <TextField
                            sx={{width: "90%", m:1 }}
                            id="outlined-size-small"
                            defaultValue='Your Email'
                            size="small"
                            />
                        <TextField
                            sx={{width: "90%", m:1 }}
                            id="outlined-size-small"
                            defaultValue='Phone Number'
                            size="small"
                            />
                        <Button sx={{m:1}} variant="contained" style={{backgroundColor: '#5CE7ED'}}>Submit</Button>
                        <Button onClick={handleBookingClose} sx={{m:1}} variant="contained" style={{backgroundColor: 'gray'}}>Cancel</Button>
                        </form>
                    </Box>
                </Fade>
            </Modal>
        </div>
    );
};

export default BookingModal;