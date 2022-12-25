import { Grid } from '@mui/material';
import { Container } from '@mui/system';
import React, { useEffect, useState } from 'react';
import Doctor from '../Doctor/Doctor';

const Doctors = () => {
    const [doctors, setDoctors] = useState([]);
    useEffect( ()=> {
        fetch('http://localhost:3005/doctors')
        .then(res => res.json())
        .then(data => setDoctors(data))
    }, [])

    return (
        <div>
            <h2>Our Doctors: {doctors.length}</h2>
            <Container>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        doctors.map(doctor => (
                            <Grid xs={2} sm={4} md={4} key={doctor._id}>
                                <Doctor
                                    key={doctor._id}
                                    doctor={doctor}
                                ></Doctor>
                            </Grid>
                        ))
                    }
                </Grid>
            </Container>
        </div>
    );
};

export default Doctors;