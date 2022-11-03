import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import { Button } from '@mui/material';
import Typography from '@mui/material/Typography';


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
                        <Typography sx={{ mb: 2, mt: 4, fontWeight: 500 }} style={{color: 'white'}} variant="h4" component="div">
                                Make an Appointment Today
                        </Typography>
                        <Typography sx={{ mb: 2, mt: 4 }} style={{color: 'white'}} variant="" component="div">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur quaerat suscipit ab pariatur, quas delectus aliquam iure accusamus impedit odio! Esse iusto ipsum expedita, harum totam amet accusantium praesentium incidunt laboriosam ad velit distinctio nihil non excepturi corporis officia, minima mollitia aut explicabo. Optio eum nisi earum qui deserunt praesentium.
                        </Typography>
                        <Button variant="contained" style={{backgroundColor: '#5CE7ED'}}>Learn More</Button>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
};

export default Story;