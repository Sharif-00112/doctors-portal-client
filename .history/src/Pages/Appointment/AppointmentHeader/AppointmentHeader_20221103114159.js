import React from 'react';
import { Grid } from '@mui/material';
import { Container } from '@mui/system';
import Typography from '@mui/material/Typography';

import chair from '../../../images/images/chair.png';
import Calendar from '../../Shared/Calendar/Calendar';

const AppointmentHeader = ({ date, setDate }) => {
    // const [date, setDate] = React.useState(new Date());

    return (
        <div>
            <h2>Book an Appointment Now!</h2>
            <Typography sx={{ mt: 5, mb:3, fontSize: 25, fontWeight: 600, color: '#5CE7ED'}} variant='h4' gutterBottom component='div'>
                Available Appointments on: {date.toDateString()}
            </Typography>
            <Container>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <Calendar date={date} setDate={setDate}></Calendar>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <img style={{ width: '70%' }} src={chair} alt="" />
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default AppointmentHeader;