import React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';


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

const BookingModal = ({ openBooking, handleBookingClose, booking }) => {
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
                        <form>
                        <TextField
                            disabled
                            sx={{width: "90%"}}
                            id="outlined-size-small"
                            defaultValue={time}
                            size="small"
                            />
                        </form>
                        <TextField
                            sx={{width: "90%"}}
                            id="outlined-size-small"
                            defaultValue='Your name'
                            size="small"
                            />
                        </form>
                    </Box>
                </Fade>
            </Modal>
        </div>
    );
};

export default BookingModal;