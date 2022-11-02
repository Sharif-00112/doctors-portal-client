import { Grid } from '@mui/material';
import { Container } from '@mui/system';
import React from 'react';

import chair from '../../../images/images/chair.png';

const AppointmentHeader = () => {
    return (
        <div>
            <h2>Appointment Header</h2>

            <Container>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>

                    </Grid>
                    <Grid item xs={12} md={6}>
                        <img src={chair} alt="" />
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default AppointmentHeader;