import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';

import doctor from '../../../images/images/doctor.png'

const AppointmentBanner = () => {
    return (
        <div>
            <h2>Appointment Banner</h2>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid xs={12} md={6}>
                        <img
                           style={{width: 400, }} 
                        src={doctor} alt="" />
                    </Grid>

                    <Grid xs={12} md={6}>
                    xs=6 md=8
                    </Grid>
                </Grid>
            </Box>
        </div>
    );
};

export default AppointmentBanner;