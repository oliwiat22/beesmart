import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


export const BasicSelect = () => {
  const [type, setType] = React.useState('');

  const handleChange = (event) => {
    setType(event.target.value);
    console.log(type);
  };

  return (
    <Box sx={{ minWidth: 120}}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label"> Typ </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={type}
          label="Typ"
          onChange={handleChange}
        >
          <MenuItem value={'ONLINE'}>Online</MenuItem>
          <MenuItem value={'IN_PERSON'}>Stacjonarnie</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}