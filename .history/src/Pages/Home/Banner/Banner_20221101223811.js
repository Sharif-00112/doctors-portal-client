import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Box, Button, Container } from '@mui/material';

import chair from '../../../images/images/chair.png'
import bnBg from '../../../images/images/bg.png'

const bannerBg = {
    background: `url(${bnBg})`
}

const verticalCenter = {
    display: 'flex',
    alignItems: 'center',
    border: '1px solid red',
    height: 400
}

const Banner = () => {
    return (
        <div>
            <Container style={bannerBg} sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item style={{ ...verticalCenter, textAlign: 'left'}} xs={12} md={5}>
                        <Box>
                            <Typography sx={{ }} style={{color: 'black'}} variant="h3" component="div">
                                Your New Smile <br />
                                Starts Here
                            </Typography>
                            <Typography sx={{ fontSize: 14, fontWeight: 400, color: 'gray'}} variant="h6" component="div">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita iusto earum laudantium beatae eos repellendus iste debitis esse nemo sed.
                            </Typography>
                            <Button variant="contained" style={{backgroundColor: '#5CE7ED'}}>Get Appointment</Button>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={7} style={verticalCenter}>
                        <img style={{ width: '300px'}} src={chair} alt="" />
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default Banner;