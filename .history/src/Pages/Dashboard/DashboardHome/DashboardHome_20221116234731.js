import React from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import Calendar from '../../Shared/Calendar/Calendar';
import Appointments from '../Appointments/Appointments';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useState } from 'react';


const DashboardHome = () => {
  const [date, setDate] = useState(new Date());

    return (
        <div>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid xs={12} md={5}>
                    <Typography sx={{ fontWeight: 600, my:3 }} variant="h6" component="div">
                        Please select your booking date:
                    </Typography>
                    <Calendar
                        date={date}
                        setDate={setDate}
                    ></Calendar>
                    </Grid>
                    <Grid xs={12} md={7}>
                    <Appointments
                        date={date}
                    ></Appointments>
                    </Grid>
                </Grid>
            </Box>
        </div>
    );
};

export default DashboardHome;