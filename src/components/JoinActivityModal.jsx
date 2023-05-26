import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { joinActivity } from '../api/activitiesApi';
import {useState} from 'react';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  borderRadius: 5
};

const formatDate = (date) => {
  let newDate = new Date(date)
  return newDate.toLocaleString()
}

export const JoinActivityModal = ({handleModalOpen, open, activityId, terms}) => {

  const [term, setTerm] = useState(false);

  const handleClose = () => handleModalOpen(false);

  const handleTermChange = (value) => { 
    console.log('ter', value.target.outerText)
    setTerm(value.target.outerText);
  }

  const formatted = terms.map((term) => formatDate(term))

  const join = () => {
    joinActivity(term, activityId).then((response) => {
      if (response.status === 200) {
        handleClose();
      } else {
        alert('Blad!')
      }
    }).catch(error => {
      console.log(error);
    })
  };


  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
            
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Wybierz termin
          </Typography>
          <div style={{marginBottom: 35}}/>
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={terms}
            sx={{ width: 500 }}
            renderInput={(values) => <TextField {...values} label="Wybrany termin" />}
            onChange={handleTermChange}
          />
          <div style={{marginBottom: 20}}/>
          <button onClick={join}>Zapisuję się!</button>

        </Box>
      </Modal>
    </div>
  )
}