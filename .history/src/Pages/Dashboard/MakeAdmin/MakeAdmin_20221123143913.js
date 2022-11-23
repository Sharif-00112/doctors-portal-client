import { Button, TextField } from '@mui/material';
import React, { useState } from 'react';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');

    const handleAdminSubmit = e =>{
        e.preventDefault();

    }
    return (
        <div>
            <h2>Make an Admin</h2>

            <form onSubmit={handleAdminSubmit}>
                <TextField
                    sx={{width: "90%", m:1 }}
                    // required
                    label="Email Address"
                    id="outlined-size-small"
                    placeholder='Your Email'
                    name='email'
                    defaultValue={user.email}
                    onBlur={handleOnBlur}
                    size="small"
                />
                <Button>Make Admin</Button>
            </form>
        </div>
    );
};

export default MakeAdmin; 