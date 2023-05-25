import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export const BasicTextFieldsdes = () => {
  return (
    <Box
        autoComplete="off"
    >
      <TextField id="outlined-basic" label="Opis zajęć" variant="outlined" />
    </Box>
  );
}