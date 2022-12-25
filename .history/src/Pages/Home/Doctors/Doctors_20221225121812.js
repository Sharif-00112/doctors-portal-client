import { Grid, Typography } from '@mui/material';
import { Container } from '@mui/system';
import React, { useEffect, useState } from 'react';
import Doctor from '../Doctor/Doctor';

const Doctors = () => {
    const [doctors, setDoctors] = useState([]);
    useEffect( ()=> {
        fetch('https://doctors-portal-372608.et.r.appspot.com/doctors')
        .then(res => res.json())
        .then(data => setDoctors(data))
    }, [])

    return (
        <div>
            <Typography sx={{ mb: 5, mt: 5, fontWeight: 500 }} variant="h4" component="div">
                Available Doctors: {doctors.length}
            </Typography>
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