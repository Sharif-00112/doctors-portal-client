import { Container } from '@mui/system';
import React from 'react';
import bg from '../../../images/images/footer-bg.png'
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';


const appointmentBanner = {
    background: `url(${bg})`,
    padding: 25
}

const Footer = () => {
    return (
        <div style={appointmentBanner}>
            <h4>Footer area</h4>
            <Container>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2}>
                        <Grid xs={6} md={3}>
                            xs=6 md=8
                        </Grid>
                        <Grid xs={6} md={3}>
                            xs=6 md=8
                        </Grid>
                        <Grid xs={6} md={3}>
                            xs=6 md=8
                        </Grid>
                        <Grid xs={6} md={3}>
                            xs=6 md=8
                        </Grid>
                    </Grid>
                </Box>
            </Container>
            <Typography sx={{ my:2, fontSize: 14, fontWeight: 400 }} variant="" component="div">
                Copyright 2022 All Rights Reserved 
            </Typography>
        </div>
    );
};

export default Footer;