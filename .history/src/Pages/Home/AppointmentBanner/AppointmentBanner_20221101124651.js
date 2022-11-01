import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';

const AppointmentBanner = () => {
    return (
        <div>
            <h2>Appointment Banner</h2>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid xs={6} md={4}>
                    <Item>xs=6 md=4</Item>
                    </Grid>
                    <Grid xs={6} md={8}>
                    <Item>xs=6 md=8</Item>
                    </Grid>
                </Grid>
            </Box>
        </div>
    );
};

export default AppointmentBanner;