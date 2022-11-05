import { Container } from '@mui/system';
import React from 'react';
import bg from '../../../images/images/footer-bg.png'
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const facebookIcon = <FontAwesomeIcon icon="fa-brands fa-facebook" />

const appointmentBanner = {
    background: `url(${bg})`,
    padding: 25,
    width: '100%'
}

const Footer = () => {
    return (
        <div style={appointmentBanner}>
            <Container sx={{ py: 5 }}>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2}>
                        <Grid item style={{ textAlign: 'left'}} xs={6} md={3}>
                            <Typography sx={{ my:2, fontSize: 18, fontWeight: 600 }} style={{color: '#5CE7ED'}} variant="h6" component="div">
                                ...
                            </Typography>
                            <Link to = '/emergencyDentalCare'>
                                Emergency Dental Care
                            </Link>
                            <br />
                            <Link to = '/checkUp'>
                                Check Up
                            </Link>
                            <br />
                            <Link to = '/treatmentOfPersonalDisease'>
                                Treatment of Personal Disease
                            </Link>
                            <br />
                            <Link to = '/toothExtraction'>
                                Tooth Extraction 
                            </Link>
                            <br />
                            <Link to = '/checkUp'>
                                Check Up
                            </Link>
                        </Grid>
                        <Grid item style={{ textAlign: 'left'}} xs={6} md={3}>
                            <Typography sx={{ my:2, fontSize: 18, fontWeight: 600 }} style={{color: '#5CE7ED'}} variant="h6" component="div">
                                Services
                            </Typography>
                            <Link to = '/emergencyDentalCare'>
                                Emergency Dental Care
                            </Link>
                            <br />
                            <Link to = '/checkUp'>
                                Check Up
                            </Link>
                            <br />
                            <Link to = '/treatmentOfPersonalDisease'>
                                Treatment of Personal Disease
                            </Link>
                            <br />
                            <Link to = '/toothExtraction'>
                                Tooth Extraction 
                            </Link>
                            <br />
                            <Link to = '/checkUp'>
                                Check Up
                            </Link>
                            <br />
                            <Link to = '/checkUp'>
                                Check Up
                            </Link>
                            <br />
                            <Link to = '/checkUp'>
                                Check Up
                            </Link>
                        </Grid>
                        <Grid item style={{ textAlign: 'left'}} xs={6} md={3}>
                            <Typography sx={{ my:2, fontSize: 18, fontWeight: 600 }} style={{color: '#5CE7ED'}} variant="h6" component="div">
                                Oral Health
                            </Typography>
                            <Link to = '/emergencyDentalCare'>
                                Emergency Dental Care
                            </Link>
                            <br />
                            <Link to = '/checkUp'>
                                Check Up
                            </Link>
                            <br />
                            <Link to = '/treatmentOfPersonalDisease'>
                                Treatment of Personal Disease
                            </Link>
                            <br />
                            <Link to = '/toothExtraction'>
                                Tooth Extraction 
                            </Link>
                            <br />
                            <Link to = '/checkUp'>
                                Check Up
                            </Link>
                            <br />
                            <Link to = '/checkUp'>
                                Check Up
                            </Link>
                            <br />
                            <Link to = '/checkUp'>
                                Check Up
                            </Link>
                        </Grid>
                        <Grid item style={{ textAlign: 'left'}} xs={6} md={3}>
                            <Typography sx={{ my:2, fontSize: 18, fontWeight: 600 }} style={{color: '#5CE7ED'}} variant="h6" component="div">
                                Our Address
                            </Typography>
                            <Typography sx={{ fontSize: 16, fontWeight: 400 }} variant="" component="div">
                                    Bashundhara Baridhara <br />
                                    Dhaka-1000 
                            </Typography>
                            <Link to = '/checkUp'>
                                {facebookIcon}
                            </Link>

                            
                        </Grid>
                    </Grid>
                </Box>
            </Container>
            <Typography sx={{ my:1, mt:7, fontSize: 14, fontWeight: 400 }} variant="" component="div">
                Copyright 2022 All Rights Reserved 
            </Typography>
        </div>
    );
};

export default Footer;