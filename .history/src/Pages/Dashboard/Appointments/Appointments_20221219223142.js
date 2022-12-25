import { Button, Typography } from '@mui/material';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';

const Appointments = ({date}) => {
    const { user, token } = useAuth();
    const [appointments, setAppointments] = useState([]);

    useEffect( () =>{
        const url = `https://doctors-portal-372608.et.r.appspot.com/appointments?email=${user.email}&date=${date.toLocaleDateString()}`
        fetch(url, {
            headers: {
                'authorization': `Bearer ${token}`
            }
        })
        .then(res => res.json())
        .then(data => setAppointments(data))
    },[user.email, date, token])

    return (
        <div>
            <Typography sx={{ fontWeight: 600, my:3 }} variant="h6" component="div">
                Appointments on - {date.toDateString()}: {appointments.length}
            </Typography>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 550 }} aria-label="Appointments table">
                    <TableHead>
                    <TableRow>
                        <TableCell>Patient Name</TableCell>
                        <TableCell align="center">Service</TableCell>
                        <TableCell align="center">Date</TableCell>
                        <TableCell align="center">Time</TableCell>
                        {/* <TableCell align="center">Payment Status</TableCell> */}
                        <TableCell align="right">Action</TableCell>
                        {/* <TableCell align="right">Protein&nbsp;(g)</TableCell> */}
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {appointments.map((row) => (
                        <TableRow
                        key={row._id}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                        <TableCell component="th" scope="row">
                            {row.patientName}
                        </TableCell>
                        <TableCell align="center">{row.serviceName}</TableCell>
                        <TableCell align="center">{row.date}</TableCell>
                        <TableCell align="center">{row.time}</TableCell>
                        {/* <TableCell align="right">Unpaid</TableCell> */}
                        <TableCell align="right">{row.payment ? 
                            'Paid' :
                            <Link to={`payment:${row._id}`}><Button>Pay</Button></Link>
                        }</TableCell>
                        {/* <TableCell align="right">{row.protein}</TableCell> */}
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default Appointments;