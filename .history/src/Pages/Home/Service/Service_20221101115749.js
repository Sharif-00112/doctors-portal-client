import React from 'react';
import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
// import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';

const Service = (props) => {
    const {name, description, img} = props.service
    return (
        <div>
            <Card sx={{ minWidth: 275 }}>
                <CardMedia
                    component="img"
                    style={{width: 'auto', height: '80px', margin: '4px auto'}}
                    image={img}
                    alt={name}
                />
                <CardContent>
                    <Typography variant="h5" >
                        {name}
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} variant="body2" color="text.secondary">
                        {description}
                    </Typography>
                </CardContent>
                {/* <CardActions>
                    <Button size="small">Learn More</Button>
                </CardActions> */}
            </Card>
        </div>
    );
};

export default Service;