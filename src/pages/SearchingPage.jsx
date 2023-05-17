import { useState } from 'react';
import './searchingPage.css';

export const SearchingPage = () => {
  const [price, setPrice] = useState('');
  const [type, setType] = useState('');
  const [subject, setSubject] = useState('');
  const [searchText, setSearchText] = useState('');

  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };

  const handleTypeChange = (event) => {
    setType(event.target.value);
  };

  const handleSubjectChange = (event) => {
    setSubject(event.target.value);
  };

  const handleSearchTextChange = (event) => {
    setSearchText(event.target.value);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    // Wykonaj akcję wyszukiwania na podstawie wprowadzonych danych
    // Możesz np. wysłać zapytanie do API, przekazać dane do komponentu nadrzędnego itp.
    console.log('Cena:', price);
    console.log('Typ:', type);
    console.log('Przedmiot:', subject);
    console.log('Wyszukiwany tekst:', searchText);
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <label>
          Cena:
          <input type="range" min="0" max="100" value={price} onChange={handlePriceChange} />
        </label>
        <label>
          Typ zajęć:
          <select value={type} onChange={handleTypeChange}>
            <option value="">-- Wybierz --</option>
            <option value="online">Online</option>
            <option value="stacjonarne">Stacjonarne</option>
          </select>
        </label>
        <label>
          Przedmiot:
          <input type="text" value={subject} onChange={handleSubjectChange} />
        </label>
        <label>
          Wyszukaj:
          <input type="text" value={searchText} onChange={handleSearchTextChange} />
        </label>
        <button type="submit">Szukaj</button>
      </form>
    </div>
  );
}

