import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';

import exceptionalStory from '../../../images/images/treatment.png'
import { Container } from '@mui/system';

const Story = () => {
    return (
        <Container>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid xs={6} md={5}>
                        <img
                           style={{width: '90%' }} 
                            src={exceptionalStory} alt="" />
                    </Grid>
                    <Grid xs={6} md={7}>
                        details
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
};

export default Story;