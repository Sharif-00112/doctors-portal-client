import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Box, Button, Container } from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

import chair from '../../../images/images/chair.png';
import bnBg from '../../../images/images/bg.png';

const bannerBg = {
    background: `url(${bnBg})`
}

const verticalCenter = {
    display: 'flex',
    alignItems: 'center',
    height: 450
}

const Banner = () => {
    return (
        <div>
            <Container style={bannerBg} sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item style={{ ...verticalCenter, textAlign: 'left'}} xs={12} md={6}>
                        <Box>
                            <Typography sx={{ }} style={{color: 'black'}} variant="h3" component="div">
                                Your New Smile <br />
                                Starts Here
                            </Typography>
                            <Typography sx={{ my: 3, pr: 15, fontSize: 14, fontWeight: 400, color: 'gray'}} variant="h6" component="div">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita iusto earum laudantium beatae eos repellendus iste debitis esse nemo sed.
                            </Typography>
                            <Button variant="contained" style={{backgroundColor: '#5CE7ED'}}>Get Appointment</Button>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6} style={verticalCenter}>
                        <img style={{ width: '400px'}} src={chair} alt="" />
                    </Grid>
                </Grid>
            </Container>

            <Container sx={{ flexGrow: 1 }}>
                <Grid container rowSpacing={5} columnSpacing={{ xs: 3, sm: 3, md: 3 }}>
                    <Grid xs={4}>
                        <Grid sx={{ p:1, my:1, mx:2 }} container spacing={1} style={{ backgroundColor: '#5CE7ED'}}>
                            <Grid xs={4}>
                                Icon
                            </Grid>
                            <Grid xs={8}>
                                <Typography sx={{ fontSize: 20, fontWeight: 600  }} style={{color: 'white'}} variant="h5" component="div">
                                    Opening Hours
                                </Typography>
                                <Typography sx={{ fontSize: 14, fontWeight: 400 }} style={{color: 'white'}} variant="h6" component="div">
                                    Lorem ipsum dolor sit amet consectetur adipisicing.
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid xs={4}>
                        <Grid sx={{ p:1, my:1, mx:2 }} container spacing={1} style={{ backgroundColor: 'gray'}}>
                            <Grid xs={4}>
                                Icon
                            </Grid>
                            <Grid xs={8}>
                                <Typography sx={{ fontSize: 20, fontWeight: 600  }} style={{color: 'white'}} variant="h5" component="div">
                                    Visit our location
                                </Typography>
                                <Typography sx={{ fontSize: 14, fontWeight: 400 }} style={{color: 'white'}} variant="h6" component="div">
                                    Lorem ipsum dolor sit amet consectetur adipisicing.
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid xs={4}>
                        <Grid sx={{ p:1, my:1, mx:2 }} container spacing={1} style={{ backgroundColor: '#5CE7ED'}}>
                            <Grid xs={4}>
                                Icon
                            </Grid>
                            <Grid xs={8}>
                                <Typography sx={{ fontSize: 20, fontWeight: 600  }} style={{color: 'white'}} variant="h5" component="div">
                                    Contact us now
                                </Typography>
                                <Typography sx={{ fontSize: 14, fontWeight: 400 }} style={{color: 'white'}} variant="h6" component="div">
                                    Lorem ipsum dolor sit amet consectetur adipisicing.
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default Banner;