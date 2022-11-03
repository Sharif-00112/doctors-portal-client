import React from 'react';
import bg from '../../../images/images/appointment-bg.png'

const appointmentBanner = {
    background: `url(${bg})`,
    marginTop: 100,
    backgroundColor: 'rgba(45, 58, 74, 0.8)',
    backgroundBlendMode: 'darken, luminosity'
}

const Contact = () => {
    return (
        <div style={appointmentBanner}>
            <h2>Contact us</h2>
        </div>
    );
};

export default Contact;