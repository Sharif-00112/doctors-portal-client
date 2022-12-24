import { Button, Input, TextField } from '@mui/material';
import React, { useState } from 'react';

const AddDoctor = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    
    return (
        <div>
            <h2>Add Doctors</h2>
            <form>
                <TextField 
                sx={{width: '50%'}}
                id="" 
                label="Name" 
                required
                onChange={e => setName(e.target.value)}
                variant="standard" />
                <br /> <br />
                <TextField 
                sx={{width: '50%'}}
                id="" 
                label="Email" 
                type='email'
                required
                onChange={e => setEmail(e.target.value)}
                variant="standard" />
                <br /><br />
                <Input 
                accept="image/*" 
                type="file" />
                <br /><br />
                <Button variant="contained" type='submit'>
                    Add Doctor
                </Button>
            </form>
        </div>
    );
};

export default AddDoctor;