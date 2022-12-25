import React from 'react';

const Doctor = ({doctor}) => {
    const {name} = doctor
    return (
        <div>
            <h3>{name}</h3>
        </div>
    );
};

export default Doctor;