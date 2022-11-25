import React from 'react';
// import dayjs from 'dayjs';
import Navigation from '../../Shared/Navigation/Navigation';
import ResponsiveNavigation from '../../Shared/Navigation/ResponsiveNavigation';
import AppointmentHeader from '../AppointmentHeader/AppointmentHeader';
import AvailableAppointments from '../AvailableAppointments/AvailableAppointments';

const Appointment = () => {
    const [date, setDate] = React.useState(new Date());
    // const [date, setDate] = React.useState(dayjs('2022-04-07'));


    return (
        <div>
            {/* <Navigation></Navigation> */}
            {/* <ResponsiveNavigation></ResponsiveNavigation> */}
            <AppointmentHeader date={date} setDate={setDate}></AppointmentHeader>
            <AvailableAppointments date={date}></AvailableAppointments>
        </div>
    );
};

export default Appointment;