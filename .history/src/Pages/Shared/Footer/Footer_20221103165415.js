import { Container } from '@mui/system';
import React from 'react';
import bg from '../../../images/images/footer-bg.png'
import Typography from '@mui/material/Typography';


const appointmentBanner = {
    background: `url(${bg})`,
    padding: 25
}

const Footer = () => {
    return (
        <div style={appointmentBanner}>
            <h4>Footer area</h4>
            <Container>

            </Container>
            <Typography sx={{ my:3, fontSize: 14, fontWeight: 400 }} variant="" component="div">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            </Typography>
        </div>
    );
};

export default Footer;