import React from 'react';
import Box from '@mui/material/Box';
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
                        <Typography sx={{ mb: 2, mt: 4, fontSize: 35, fontWeight: 600 }} variant="h4" component="div">
                            Exceptional Dental Care, on Your Term
                        </Typography>
                        <Typography sx={{ my:5, fontSize: 18, fontWeight: 400 }} variant="" component="div">
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