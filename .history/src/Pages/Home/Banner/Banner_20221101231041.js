import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Box, Button, Container } from '@mui/material';

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
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid xs={4}>
                        <Grid container spacing={1}>
                            <Grid xs={4}>
                                <Typography sx={{ }} style={{color: 'white'}} variant="h4" component="div">
                                    Opening Hours
                                </Typography>
                                <Typography sx={{ fontSize: 14, fontWeight: 400 }} style={{color: 'white'}} variant="h6" component="div">
                                    Opening Hours
                                </Typography>
                            </Grid>
                            <Grid xs={8}>
                            8
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid xs={4}>
                        <Grid container spacing={1}>
                            <Grid xs={4}>
                            4
                            </Grid>
                            <Grid xs={8}>
                            8
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid xs={4}>
                        <Grid container spacing={1}>
                            <Grid xs={4}>
                            4
                            </Grid>
                            <Grid xs={8}>
                            8
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default Banner;