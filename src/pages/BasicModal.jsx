import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import {Calendar} from './Calendar';
import {BasicSelect} from './BasicSelect';
import {BasicTextFields} from './BasicTextFields';
import {BasicTextFieldsdes} from './BasicTextFieldsdes';
import {InputSlider} from './InputSlider';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

export const BasicModal =() => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}> Dodaj zajęcia </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <form>
            

            <Calendar/>
            <BasicSelect/>
            <label> Nazwa zajęć <input type ="text" /> </label>   
            <label> Opis zajęć <input type ="text" /> </label>   
            <InputSlider/>

        </form>
      </Modal>
    </div>
  );

  }
