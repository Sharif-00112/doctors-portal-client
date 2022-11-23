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
                    id="outlined-size-small"
                    placeholder='Enter the Email you want to make admin'
                    name='email'
                    size="small"
                />
                <Button>Make Admin</Button>
            </form>
        </div>
    );
};

export default MakeAdmin; 