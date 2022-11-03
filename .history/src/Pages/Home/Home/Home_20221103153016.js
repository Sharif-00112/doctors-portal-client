import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Services from '../Services/Services';
import Story from '../Story/Story';

const Home = () => {
    return (
        <div>
            {/* <h2>This is Home</h2> */}
            <Navigation></Navigation>
            <Banner></Banner>
            <Services></Services>
            <Story></Story>
            <AppointmentBanner></AppointmentBanner>
            <Contact></Contact>
        </div>
    );
};

export default Home;