import { Alert, Button, Input, TextField } from '@mui/material';
import React, { useState } from 'react';

const AddDoctor = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);
    const [image, setImage] = useState(null);

    const handleSubmit = e =>{
        e.preventDefault();
        setSuccess(false);
        if(!image){
            alert('Please add a Profile Image')
            return;
        }
        // sending data to database is a bit different here
        const formData = new FormData();
        formData.append('name', name);
        formData.append('email', email);
        formData.append('image', image);

        fetch('http://localhost:3005/doctors', {
            method: 'POST',
            body: formData
        })
        .then((response) => response.json())
        .then((result) => {
            if(result.insertedId){
                setSuccess(true);
                // alert('Doctor added successfully!');
            }
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
            <br />
            {success && <Alert severity="success">Doctor added successfully!</Alert>}
        </div>
    );
};

export default AddDoctor;