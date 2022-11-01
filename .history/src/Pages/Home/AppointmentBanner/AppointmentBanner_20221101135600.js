import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import doctor from '../../../images/images/doctor.png'
import bg from '../../../images/images/appointment-bg.png'

const appointmentBanner = {
    background: `url(${bg})`,
    marginTop: 100,
    backgroundColor: 'rgba(45, 58, 74, 0.8)',
    backgroundBlendMode: 'darken, luminosity'
}

const AppointmentBanner = () => {
    return (
        <div>
            {/* <h2>Appointment Banner</h2> */}
            <Box style={appointmentBanner} sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid xs={12} md={6}>
                        <img
                           style={{width: 400, marginTop: '-105px' }} 
                        src={doctor} alt="" />
                    </Grid>

                    <Grid xs={12} md={6}>
                        <Typography sx={{ mb: 2, mt: 4, fontWeight: 500, color: 'light.main' }} variant="h6" component="div">
                            Appointment
                        </Typography>
                        <Typography sx={{ mb: 2, mt: 4, fontWeight: 500, color: 'success.main' }} variant="h4" component="div">
                            Make an Appointment Now
                        </Typography>
                    </Grid>
                </Grid>
            </Box>
        </div>
    );
};

export default AppointmentBanner;