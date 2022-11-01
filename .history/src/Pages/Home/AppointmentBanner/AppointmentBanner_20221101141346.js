import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import doctor from '../../../images/images/doctor.png'
import bg from '../../../images/images/appointment-bg.png'
import { Button } from '@mui/material';

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

                    <Grid xs={12} md={6} sx={{ 
                        display: 'flex', 
                        justifyContent: 'flex-start', 
                        textAlign: 'left', 
                        alignItems: 'center' 
                        }}>
                        <Box>
                            <Typography sx={{ mb: 2, mt: 4, fontWeight: 500 }} style={{color: '#5CE7ED'}} variant="h5" component="div">
                                Appointment
                            </Typography>
                            <Typography sx={{ mb: 2, mt: 4, fontWeight: 500 }} style={{color: 'white'}} variant="h4" component="div">
                                Make an Appointment Now
                            </Typography>
                            <Typography sx={{ mb: 2, mt: 4 }} style={{color: 'white'}} variant="" component="div">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, omnis architecto ipsam commodi numquam.
                            </Typography>
                            <Button variant="contained">Learn More</Button>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </div>
    );
};

export default AppointmentBanner;