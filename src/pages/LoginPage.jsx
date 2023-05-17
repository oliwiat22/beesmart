
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './loginPage.css';

export const LoginPage = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = (event) => {
    event.preventDefault();
    
    // Tutaj dodaj warunek na poprawne dane logowania
    if (username === 'user' && password === '1234') {
      // Przeniesienie do strony SearchingPage
      console.log('sd')
      navigate('/search');
    } else {
      alert('Niepoprawne dane logowania!');
    }
  };


    return (
        <>
          <h1>Cześć!</h1>
          <form onSubmit = {handleLogin}>

            <label>Nazwa użytkownika: <input type ="text" value = {username} onChange={handleUsernameChange} /> </label>
            <label> Hasło: <input type="password" value = {password} onChange = {handlePasswordChange} /> </label>

            <button type ="submit"> Zaloguj się </button>
            <a href='/register' className='button' id='register-button'> Zarejestruj się </a>
  
          </form>
        </>
      );
}
