import { Button, TextField } from '@mui/material';
import React, { useState } from 'react';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);

    const handleAdminSubmit = e =>{
        const user = { email };
        e.preventDefault();
        fetch('http://localhost:3005/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => {
            // console.log(data);
            if(data.modifiedCount){
                console.log(data);
                setSuccess(true);
            }
        })
    }
    const handleOnBlur = e =>{
        setEmail(e.target.value);
    }

    return (
        <div>
            <h2>Make an Admin</h2>

            <form onSubmit={handleAdminSubmit}>
                <TextField
                    sx={{width: "90%", m:1 }}
                    required
                    label="Enter email address to make ADMIN"
                    id="outlined-size-small"
                    // placeholder='Enter the Email you want to make admin:'
                    onBlur={handleOnBlur}
                    type='email'
                    size="small"
                />
                <Button type='submit' sx={{m:2}} variant="contained" style={{backgroundColor: '#5CE7ED'}}>Make Admin</Button>
            </form>
        </div>
    );
};

export default MakeAdmin; 