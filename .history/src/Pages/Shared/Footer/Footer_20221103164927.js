import React from 'react';
import bg from '../../../images/images/footer-bg.png'

const appointmentBanner = {
    background: `url(${bg})`,
    marginTop: 100,
}

const Footer = () => {
    return (
        <div style={appointmentBanner}>
            <h4>Footer area</h4>
        </div>
    );
};

export default Footer;