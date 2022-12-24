import { Button, Input, TextField } from '@mui/material';
import React, { useState } from 'react';

const AddDoctor = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [image, setImage] = useState(null);

    const handleSubmit = e =>{
        e.preventDefault();
        if(!image){
            alert('Please add a Profile Image')
            return;
        }
    }

    return (
        <div>
            <h2>Add Doctors</h2>
            <form onSubmit={handleSubmit}>
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
                type="file" 
                onChange={e => setImage(e.target.files[0])}/>
                <br /><br />
                <Button variant="contained" type='submit'>
                    Add Doctor
                </Button>
            </form>
        </div>
    );
};

export default AddDoctor;