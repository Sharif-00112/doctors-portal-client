import { Container } from '@mui/system';
import React from 'react';
import bg from '../../../images/images/appointment-bg.png'
import Typography from '@mui/material/Typography';


const appointmentBanner = {
    background: `url(${bg})`,
    marginTop: 100,
    backgroundColor: 'rgba(45, 58, 74, 0.8)',
    backgroundBlendMode: 'darken, luminosity'
}

const Contact = () => {
    return (
        <div style={appointmentBanner}>
            {/* <h2>Contact us</h2> */}
            <Container sx={{py: 5}}>
                <Typography sx={{ mb: 2, mt: 4, fontWeight: 500 }} style={{color: '#5CE7ED'}} variant="h5" component="div">
                    CONTACT US
                </Typography>
                <Typography sx={{ mb: 2, mt: 4, fontWeight: 500 }} style={{color: 'white'}} variant="h4" component="div">
                    Always Connect With Us
                </Typography>
            </Container>
        </div>
    );
};

export default Contact;