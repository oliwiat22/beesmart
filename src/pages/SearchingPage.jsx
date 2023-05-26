import { useState } from 'react';
import './searchingPage.css';
import { BasicModal } from './BasicModal';
import {useEffect} from 'react';
import { search } from '../api/activitiesApi';
import { BasicSelect } from './BasicSelect';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import { JoinActivityModal } from '../components/JoinActivityModal';

const Divider = ({ id, name, type, durationInMinutes, price, description, terms }) => {
  const [open, setOpen] = useState(false);

  const handleModalOpen = (value) => setOpen(value);

  const formatTerms = (terms) => {
    return terms.map((row, idx) => 
      new Date(row).toLocaleDateString()
    ).join(", ")
    
  }

  return (
    <div className="divider">
      <JoinActivityModal handleModalOpen={handleModalOpen} open={open} activityId={id} terms={terms} />
      <h3>{name}</h3>
      <p>Typ: {type === 'ONLINE' ? 'Online' : 'Stacjonarnie'}</p>
      <p>Dlugosc: {durationInMinutes}</p>
      <p>Cena: {price}</p>
      <p>Opis: {description}</p>
      {  terms && terms.length > 0 && 
        <div>
            <p>Dostępne terminy: {formatTerms(terms)}</p>    
            <button onClick={() => handleModalOpen(true)}>Zapisz się na zajęcia</button>
        </div>
      }
      {
        (!terms || terms.length <= 0) &&
        <p>Brak wolnych terminów</p> 
      }
    </div>
  );
};

export const SearchingPage = () => {
  const [searchText, setSearchText] = useState('');
  const [activities, setActivities] = useState([]);
  const [type, setType] = useState('');


  const handleGet = () => {
    search(searchText, 0, 100, type).then((response) => {
      console.log('sea', response.data)
      if (response.status === 200) {
        setActivities(response.data)
      } else {
        alert('Blad!')
      }
    }).catch(error => {
      console.log(error);
    })
  };



  const handleTypeChange = (event) => {
    setType(event);
  };

  const handleSearchTextChange = (event) => {
    setSearchText(event.target.value);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    console.log('Typ:', type);
    console.log('Wyszukiwany tekst:', searchText);
    handleGet(event);
  };

  return (
    <div className="App">

      <div className="navbar">
        <div className="navbar-container">
          <div>
            <button>Wyszukiwarka</button>
          </div>
        </div>
      </div>

        <form onSubmit={handleSearch}>
        <h1>Jakich zajęć szukasz?</h1>
          <input type="text" value={searchText} onChange={handleSearchTextChange} />
          <BasicSelect handleTypeChange={handleTypeChange}/> 
          <button type="submit">Szukaj</button>
        </form> 
      
        <div className="divider-container">
              {activities.map((activity, index) => (
                <Divider
                  key={index}
                  id={activity.id}
                  name={activity.name}
                  type={activity.type}
                  durationInMinutes={activity.durationInMinutes}
                  price={activity.price}
                  description={activity.description}
                  terms={activity.availableTerms}
                />
              ))}
            </div>
          
        
    
    </div>
  );
};