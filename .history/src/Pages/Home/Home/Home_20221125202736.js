import React from 'react';
import { useTitle } from '../../../hooks/useTitle';
import Footer from '../../Shared/Footer/Footer';
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Services from '../Services/Services';
import Story from '../Story/Story';

const Home = () => {
    useTitle("Home");

    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Story></Story>
            <AppointmentBanner></AppointmentBanner>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;