import * as React from 'react';
import dayjs from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';

export const Calendar = ({handleDateChange}) => {
  const [value, setValue] = React.useState();

  const handleValueChange = (newValue) => {
    setValue(newValue);
    handleDateChange(newValue);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DateTimePicker', 'DateTimePicker']}>
        <DateTimePicker
          label="Data i godzina rozpoczęcia zajęć"
          value={value}
          onChange={(newValue) => handleValueChange(newValue)}
        />
      </DemoContainer>
    </LocalizationProvider>
  );
}