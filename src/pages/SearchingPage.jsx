import { useState } from 'react';
import './searchingPage.css';
import { BasicModal } from './BasicModal';

export const SearchingPage = () => {
  const [searchText, setSearchText] = useState('');


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
            <button>Mój kalendarz</button>
          </div>
        </div>
        </div>

        <form onSubmit={handleSearch}>
        <h1>Jakich zajęć szukasz?</h1>
          <input type="text" value={searchText} onChange={handleSearchTextChange} />
          <button type="submit">Szukaj</button>
        </form>
        
        <div className="content">
            <h2>Moje zajęcia</h2>
            { activities && 
            <div className="divider-container">
              {activities.map((zajecie, index) => (
                <Divider
                  key={index}
                  nazwa={zajecie.activity.name}
                  typ={zajecie.activity.type}
                  data={zajecie.activity.durationInMinutes}
                  cena={zajecie.activity.price}
                  opis={zajecie.activity.description}
                />
              ))}
            </div>
            }
          </div>
    
    </div>
  );
};