import { Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import Alert from '@mui/material/Alert';
import useAuth from '../../../hooks/useAuth';


const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);
    const {token} = useAuth();

    const handleAdminSubmit = e =>{
        setSuccess(false);
        const user = { email };
        e.preventDefault();
        fetch('http://localhost:3005/users/admin', {
            method: 'PUT',
            headers: {
                'authorization': `Bearer ${token}`,
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => {
            // console.log(data);
            if(data.modifiedCount){
                // console.log(data);
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
            {success && <Alert severity="success">Made "{email}" admin successfully!</Alert>}
        </div>
    );
};

export default MakeAdmin; 