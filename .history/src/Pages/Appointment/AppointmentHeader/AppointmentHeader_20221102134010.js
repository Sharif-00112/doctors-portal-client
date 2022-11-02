import { Grid } from '@mui/material';
import { Container } from '@mui/system';
import React from 'react';

import chair from '../../../images/images/chair.png';
import Calendar from '../../Shared/Calendar/Calendar';

const AppointmentHeader = ({ date, setDate }) => {
    // const [date, setDate] = React.useState(new Date());

    return (
        <div>
            <h2>Appointment Header</h2>

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