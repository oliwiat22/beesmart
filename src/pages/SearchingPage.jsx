import { useState } from 'react';
import './searchingPage.css';
import { BasicModal } from './BasicModal';
import {useEffect} from 'react';
import { search } from '../api/activitiesApi';
import { BasicSelect } from './BasicSelect';

const Divider = ({ nazwa, typ, data, cena, opis, dlugosc }) => {
  return (
    <div className="divider">
      <h3>{nazwa}</h3>
      <p>Typ: {typ === 'ONLINE' ? 'Online' : 'Stacjonarnie'}</p>
      <p>Dlugosc: {dlugosc}</p>
      <p>Cena: {cena}</p>
      <p>Opis: {opis}</p>
      <p>Data: {data} </p>
      <button>Zapisz się na zajęcia</button>
    </div>
  );
};

const kolekcjaObiektow = [
  {
    nazwa: "Telewizor",
    typ: "Elektronika",
    dlugosc: "5 min",
    data: "2023-05-25",
    cena: 2499.99,
    opis: "Duży telewizor o rozdzielczości 4K."
  },
  {
    nazwa: "Smartfon",
    typ: "Elektronika",
    data: "2023-05-24",
    cena: 1299.99,
    opis: "Nowoczesny smartfon z podwójnym aparatem."
  },
  {
    nazwa: "Buty sportowe",
    typ: "Odzież",
    data: "2023-05-23",
    cena: 199.99,
    opis: "Wygodne buty sportowe idealne do biegania."
  },
  {
    nazwa: "Książka",
    typ: "Artykuł biurowy",
    data: "2023-05-22",
    cena: 29.99,
    opis: "Bestsellerowa powieść autora X."
  },
  {
    nazwa: "Kamera",
    typ: "Elektronika",
    data: "2023-05-21",
    cena: 899.99,
    opis: "Profesjonalna kamera do nagrywania wideo."
  }
];



export const SearchingPage = () => {
  const [searchText, setSearchText] = useState('');
  const [activities, setActivities] = useState([]);
  const [type, setType] = useState('');

  
  useEffect(() => {
    handleGet();
  },[searchText]);

  const handleGet = () => {
    search(searchText, 0, 100, type).then((response) => {
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
    setType(event.target.value);
  };

  const handleSearchTextChange = (event) => {
    setSearchText(event.target.value);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    console.log('Typ:', type);
    console.log('Wyszukiwany tekst:', searchText);
  };

  return (
    <div className="App">

      <div className="navbar">
        <div className="navbar-container">
          <BasicModal/>
          <div>
            <button>Wyszukiarka</button>
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
              {kolekcjaObiektow.map((zajecie, index) => (
                <Divider
                  key={index}
                  nazwa={zajecie.nazwa}
                  typ={zajecie.type}
                  data={zajecie.data}
                  cena={zajecie.cena}
                  opis={zajecie.opis}
                  dlugosc = {zajecie.dlugosc}
                />
              ))}
            </div>
          
        
    
    </div>
  );
};