import React from 'react';
import dayjs from 'dayjs';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';


const isWeekend = (date) => {
    const day = date.day();
  
    return day === 5 || day === 6;
};

const Calendar = () => {
    const [value, setValue] = React.useState(new Date());

    return (
        <div>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <StaticDatePicker
                    orientation="landscape"
                    openTo="day"
                    value={value}
                    shouldDisableDate={isWeekend}
                    onChange={(newValue) => {
                    setValue(newValue);
                    }}
                    // renderInput={(params) => <TextField {...params} />}
                />
            </LocalizationProvider>
        </div>
    );
};

export default Calendar;