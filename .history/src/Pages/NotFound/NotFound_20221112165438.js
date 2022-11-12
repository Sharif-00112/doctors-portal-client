import React from 'react';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import errorIMG from '../../images/images/dribbble_1.gif'

const NotFound = () => {
    return (
        <div>
            <Typography sx={{ mt:7, fontSize: 35, fontWeight: 600 }} style={{color: '#5CE7ED'}} variant="h4" component="div">
                404 Page Not Found!
            </Typography>
            <img src={errorIMG} alt="404 Page Not Found!" />
            <br />
        </div>
    );
};

export default NotFound;