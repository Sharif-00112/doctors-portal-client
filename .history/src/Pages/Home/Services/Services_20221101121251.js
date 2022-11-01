import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/material';
import Service from '../Service/Service';

import fluoride from '../../../images/images/fluoride.png';
import cavity from '../../../images/images/cavity.png'
import whitening from '../../../images/images/whitening.png'

const services = [
    {
        name: 'Fluoride Treatment',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, omnis architecto ipsam commodi numquam.',
        img: fluoride
    },
    {
        name: 'Cavity Filling',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, omnis architecto ipsam commodi numquam.',
        img: cavity
    },
    {
        name: 'Teeth Whitening',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, omnis architecto ipsam commodi numquam.',
        img: whitening
    }
]

const Services = () => {
    return (
        <div>
            <Box sx={{ flexGrow: 1 }}>
                <Container>
                    <Typography sx={{ mb: 1, mt: 2, fontWeight: 500 }} variant="h6" component="div">
                        Our Services
                    </Typography>
                    <Typography sx={{ mb: 1 }} variant="h4" component="div">
                        Services We Provide
                    </Typography>

                    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                        {
                            services.map(service => (
                                <Grid xs={2} sm={4} md={4} key={service.name}>
                                <Service 
                                    key = {service.name}
                                    service = {service}
                                ></Service>
                            </Grid>
                            ))
                        }
                    </Grid>
                </Container>
            </Box>
        </div>
    );
};

export default Services;