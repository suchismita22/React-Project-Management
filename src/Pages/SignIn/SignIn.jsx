import React, { useState } from "react";
import {Box, TextField} from '@mui/material';

const SignIn = () => {
  const [userName,setUserName]=useState('');
  const [password,setPassword]=useState('');
  return (
    <div>
      <Box
        component="form"
        sx={{ "& .MuiTextField-root": { m: 1, width: "25ch" } }}
        noValidate
        autoComplete="off"
      >
        <div>
          <TextField
            required
            id="outlined-required"
            label="Username"
            value={userName}
            onChange={(e)=> setUserName(e.target.value)}
          />
           <TextField
            required
            id="outlined-required"
            label="Password"
            value={password}
            onChange={(e)=> setPassword(e.target.value)}
          />
        </div>
      </Box>
    </div>
  );
};

export default SignIn;
