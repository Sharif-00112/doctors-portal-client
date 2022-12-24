import { Button, Input, TextField } from '@mui/material';
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
                Upload Image:
                <br />
                <Input 
                accept="image/*" 
                multiple type="file" />
                <br /><br />
                <Button variant="contained" type='submit'>
                    Add Doctor
                </Button>
            </form>
        </div>
    );
};

export default AddDoctor;