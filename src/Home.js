import './Home.css';

import React from 'react'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Button, TextField } from '@mui/material';
  
const Home = () => {
    const [proxy, setProxy] = React.useState('');
    const [sourceRevision, setSourceRevision] = React.useState('');
    const [targetRevision, setTargetRevision] = React.useState('');

    const handleProxyChange = (event) => {
        setProxy(event.target.value);
    };

    const handleSourceRevisionChange = (event) => {
        setSourceRevision(event.target.value);
    }

    const handleTargetRevisionChange = (event) => {
        setTargetRevision(event.target.value);
    }

    const handleSubmit = () => {
        console.log('handle submit clicked')
        console.log('sourceRevisionVersion', sourceRevision)
        console.log('targetRevisionVersion', targetRevision)
        console.log('proxy', proxy)
    }

  return (
    <>

    <div className="home_form-container">
            <div className='home_form-container_body'>
                <Box sx={{ minWidth: 200 }} className='form-input'>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Proxy Name</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={proxy}
                            label="Proxy Name"
                            onChange={handleProxyChange}
                        >
                        <MenuItem value={"customers_v2"}>customers_v2</MenuItem>
                        <MenuItem value={"users_v1"}>users_v1</MenuItem>
                        <MenuItem value={"loyalty_v1"}>loyalty_v1</MenuItem>
                        <MenuItem value={"oauth_v2"}>oauth_v2</MenuItem>
                        </Select>
                    </FormControl>
                </Box>     
                <TextField
                    id="outlined-controlled"
                    label="Enter Source Revision Number"
                    value={sourceRevision}
                    onChange={handleSourceRevisionChange}
                    type='number'
                    className='form-input-text'
                />   
                <TextField
                    id="outlined-controlled"
                    label="Enter Target Revision Number"
                    value={targetRevision}
                    onChange={handleTargetRevisionChange}
                    type='number'
                    className='form-input-text'
                />
            </div>
            
            <Button variant="contained" onClick ={handleSubmit}>Get Difference</Button>
    </div>
    </>
    
  )
}

export default Home











