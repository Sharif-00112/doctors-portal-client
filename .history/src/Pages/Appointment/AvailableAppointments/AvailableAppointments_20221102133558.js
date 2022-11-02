import React from 'react';

const AvailableAppointments = ({ date }) => {
    return (
        <div>
            {console.log(typeof(date), date)}
            <h2>Available Appointments on {date.toDateString()}</h2>
        </div>
    );
};

export default AvailableAppointments;