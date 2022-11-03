import { Box, Container } from '@mui/system';
import React from 'react';
import bg from '../../../images/images/appointment-bg.png'
import Typography from '@mui/material/Typography';
import {Button} from '@mui/material';
import TextField from '@mui/material/TextField';



const appointmentBanner = {
    background: `url(${bg})`,
    marginTop: 100,
    backgroundColor: 'rgba(45, 58, 74, 0.8)',
    backgroundBlendMode: 'darken, luminosity'
}

const Contact = () => {
    const handleContactSubmit = e =>{
        e.preventDefault();

        //collect form data 


        //send data to the server and database


        alert('Submitted Successfully!');
    }

    return (
        <div style={appointmentBanner}>
            {/* <h2>Contact us</h2> */}
            <Container sx={{py: 10}}>
                <Typography sx={{ pb: 3, fontWeight: 500 }} style={{color: '#5CE7ED'}} variant="h5" component="div">
                    CONTACT US
                </Typography>
                <Typography sx={{ pb: 5, fontWeight: 500 }} style={{color: 'white'}} variant="h4" component="div">
                    Always Connect With Us
                </Typography>

                <Container>
                    <form onSubmit={handleContactSubmit}>
                        <TextField
                            required
                            sx={{width: "80%", m:1 }}
                            id="outlined-size-small"
                            placeholder='Your Email*'
                            // defaultValue='Your Email'
                            size="small"
                            />
                        <TextField
                            required
                            sx={{width: "80%", m:1 }}
                            id="outlined-size-small"
                            placeholder='Subject*'
                            // defaultValue='Subject'
                            size="small"
                            />
                        <TextField
                            required
                            sx={{width: "80%", m:1 }}
                            id="filled-multiline-static"
                            // label="Multiline"
                            multiline
                            rows={4}
                            placeholder='Your message*'
                            // defaultValue="Your message"
                            variant="filled"
                            />
                            <br />
                        <Button type='submit' sx={{mt:3}} variant="contained" style={{backgroundColor: '#5CE7ED'}}>Submit</Button>
                    </form>
                </Container>

            </Container>
        </div>
    );
};

export default Contact;