import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';

import chair from '../../../images/images/chair.png'
import bg from '../../../images/images/bg.png'

const Banner = () => {
    return (
        <div>
            <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item style={{textAlign: 'left', padding: '0 4'}} xs={12} md={5}>
                    <Typography sx={{ }} style={{color: 'black'}} variant="h3" component="div">
                        Your New Smile <br />
                        Starts Here
                    </Typography>
                    <Typography sx={{ fontSize: 14, fontWeight: 400, color: 'gray'}} variant="h6" component="div">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita iusto earum laudantium beatae eos repellendus iste debitis esse nemo sed.
                    </Typography>
                    <Button variant="contained" style={{backgroundColor: '#5CE7ED'}}>Get Appointment</Button>
                </Grid>
                <Grid item xs={12} md={7}>
                    <img style={{ width: '300px'}} src={chair} alt="" />
                </Grid>
            </Grid>
        </Box>
        </div>
    );
};

export default Banner;