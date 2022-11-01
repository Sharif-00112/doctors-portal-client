import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import chair from '../../../images/images/chair.png'
import bg from '../../../images/images/bg.png'

const Banner = () => {
    return (
        <div>
            <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={5}>
                    <Typography sx={{ mb: 2, mt: 4 }} style={{color: 'white'}} variant="" component="div">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, omnis architecto ipsam commodi numquam.
                    </Typography>
                </Grid>
                <Grid item xs={12} md={7}>
                    <img src={chair} alt="" />
                </Grid>
            </Grid>
        </Box>
        </div>
    );
};

export default Banner;