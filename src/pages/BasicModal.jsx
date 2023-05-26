import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import {Calendar} from './Calendar';
import {BasicSelect} from './BasicSelect';
import {BasicTextFields} from './BasicTextFields';
import {BasicTextFieldsdes} from './BasicTextFieldsdes';
import {InputSlider} from './InputSlider';
import { createNewActivity } from '../api/activitiesApi';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  borderRadius: 5
};

export const BasicModal =({handleModalOpen, open}) => {
  const [price, setPrice] = useState('');
  const [type, setType] = useState('');
  const [subject, setSubject] = useState('');
  const [description, setDescription] = useState('');
  const [dateTime, setDateTime] = useState('');
  const [durationInMinutes, setDuartionInMinutes] = useState('');


  const handlePriceChange = (value) => {
    setPrice(value);
  };

  const handleTypeChange = (value) => {
    setType(value);
  };

  const handleSubjectChange = (event) => {
    setSubject(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleDateChange = (value) => {
    setDateTime(value.$d)
  };

  const handleDurationInMinutesChange = (value) => {
    console.log(value.target.value);
    setDuartionInMinutes(value.target.value)
  };

  const handleOpen = () => handleModalOpen(true);
  const handleClose = () => handleModalOpen(false);

  const addActivity = (e) => {
    handleClose();
    e.preventDefault()
    let newActivity = {
      name: subject,
      description: description,
      type: type,
      location: '',
      price: price,
      durationInMinutes: durationInMinutes,
      availableTerms: [dateTime]
    };
    console.log('activity: ', newActivity)
    createNewActivity(newActivity)
      .then((response) => {
        console.log(response.data);
      }).catch(error => {
        console.log(error)
      })
  }

  return (
    <div>
      <Button onClick={handleOpen}> Dodaj zajęcia </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
            
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Dodaj nowe zajęcia
          </Typography>
          <div style={{marginBottom: 15}}/>
          <Calendar handleDateChange={handleDateChange}/>
          <div style={{marginBottom: 15}}/>
          <BasicSelect handleTypeChange={handleTypeChange}/>
          <div style={{marginBottom: 15}}/>
          <label> Nazwa zajęć <input type ="text" onChange={handleSubjectChange}/> </label>   
          <label> Opis zajęć <input type ="text" onChange={handleDescriptionChange}/> </label> 
          <label> Długość zajęć <input type ="text" onChange={handleDurationInMinutesChange}/> </label>   
  
          <div style={{marginBottom: 25, display: 'flex', justifyContent: 'center'}}>
            <InputSlider handlePriceChange={handlePriceChange}/>
          </div>
          <div style={{display: 'flex', justifyContent: 'center'}}>
            <button type ="submit" onClick={addActivity}> Potwierdź </button>
          </div>

        </Box>
      </Modal>
    </div>
  );

  }