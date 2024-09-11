import './App.css';
import * as React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

function App() {
    return (
        <div className="input_cookie">
            <Box
                component="form"
                sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }}
                noValidate
                autoComplete="off"
            >
                <div>
                    <TextField
                        id="outlined-multiline-static"
                        label="Enter your access token"
                        multiline
                        rows={4}
                        defaultValue=""
                    />
                </div>
            </Box>
            <a href="/home">
                <Button variant="outlined">Continue</Button>
            </a>
        </div>
    );
}

export default App;
