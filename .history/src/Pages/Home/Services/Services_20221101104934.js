import React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import Service from '../Service/Service';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const Services = () => {
    return (
        <div>
            <h2>Our Services</h2>
            
            <Box sx={{ flexGrow: 1 }}>
                <Container>
                    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                        {Array.from(Array(6)).map((_, index) => (
                        <Grid item xs={4} sm={4} md={4} key={index}>
                            <Service></Service>
                        </Grid>
                        ))}
                    </Grid>
                </Container>
            </Box>
        </div>
    );
};

export default Services;