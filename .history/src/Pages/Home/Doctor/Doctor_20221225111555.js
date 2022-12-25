import React from 'react';
import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
// import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';

const Doctor = ({doctor}) => {
    const {name, email, image} = doctor
    return (
        <div>
            <Card sx={{ minWidth: 275, border: 0, boxShadow: 0, mt: 1.5 }}>
                <CardMedia
                    component="img"
                    style={{width: 'auto', height: '200px', margin: '4px auto'}}
                    image={`data:image/*;base64,${image}`}
                    alt={name}
                />
                <CardContent>
                    <Typography sx={{ mb: 1 }} variant="h5" component="div">
                        {name}
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} variant="body2" color="text.secondary">
                        {email}
                    </Typography>
                </CardContent>
                {/* <CardActions>
                    <Button size="small">Learn More</Button>
                </CardActions> */}
            </Card>
        </div>
    );
};

export default Doctor;