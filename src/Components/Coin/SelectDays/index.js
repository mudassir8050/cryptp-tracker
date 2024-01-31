import React, { useState } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import './style.css';

export default function SelectDays({days,handleDaysChange,noPTag}) {
  

  return (
    <div className='select-days'>
        {!noPTag&&<p>Price Change In</p>}
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={days}
          label="Days"
          onChange={handleDaysChange}
          sx={{
            height: "2.5rem",
            color: "var(--black)",
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: "var(--black)",
            },
            "& .MuiSvgIcon-root": {
              color: "var(--black)",
            },
            "&:hover": {
              "&& fieldset": {
                borderColor: "#3a80e9",
              },
            },
          }}
        >
          <MenuItem value={7}>7 Days</MenuItem>
          <MenuItem value={30}>30 Days</MenuItem>
          <MenuItem value={60}>60 Days</MenuItem>
          <MenuItem value={90}>90 Days</MenuItem>
          <MenuItem value={120}>120 Days</MenuItem>
          <MenuItem value={365}>365 Days</MenuItem>
        </Select>
    </div>
  );
}
