import { Button, TextField } from '@mui/material';
import React from 'react';

const AddDoctor = () => {
    return (
        <div>
            <h2>Add Doctors</h2>
            <form>
                <TextField 
                sx={{width: '50%'}}
                id="" 
                label="Name" 
                required
                variant="standard" />
                <br /> <br />
                <TextField 
                sx={{width: '50%'}}
                id="" 
                label="Email" 
                type='email'
                required
                variant="standard" />
                <br /><br />
                <Button variant="contained" component="label">
                    Upload
                    <input hidden accept="image/*" multiple type="file" />
                </Button>
            </form>
        </div>
    );
};

export default AddDoctor;