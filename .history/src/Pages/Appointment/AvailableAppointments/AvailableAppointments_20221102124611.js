import React from 'react';

const AvailableAppointments = ({date}) => {
    return (
        <div>
            <h2>Available Appointments on {date.toDateString()}</h2>
            {console.log(date)}
        </div>
    );
};

export default AvailableAppointments;