import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import AppointmentHeader from '../AppointmentHeader/AppointmentHeader';
import AvailableAppointments from '../AvailableAppointments/AvailableAppointments';

const Appointment = () => {
    return (
        <div>
            <Navigation></Navigation>
            <h2>Appointment</h2>
            <AppointmentHeader></AppointmentHeader>
            <AvailableAppointments></AvailableAppointments>
        </div>
    );
};

export default Appointment;