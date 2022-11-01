import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';

const AppointmentBanner = () => {
    return (
        <div>
            <h2>Appointment Banner</h2>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid xs={6} md={4}>
                    xs=6 md=4
                    </Grid>
                    <Grid xs={6} md={8}>
                    xs=6 md=8
                    </Grid>
                </Grid>
            </Box>
        </div>
    );
};

export default AppointmentBanner;