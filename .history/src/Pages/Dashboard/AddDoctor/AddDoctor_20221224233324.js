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
        // sending data to database is a bit different here
        const formData = new FormData();
        formData.append('name', name);
        formData.append('email', email);
        formData.append('image', image);

        fetch('https://doctors-portal-372608.et.r.appspot.com/doctors', {
            method: 'POST',
            body: formData
        })
        .then((response) => response.json())
        .then((result) => {
            console.log('Success:', result);
        })  
        .catch((error) => {
            console.error('Error:', error);
        });
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