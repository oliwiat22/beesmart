
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './loginPage.css';
import { login } from '../api/userApi';

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
    const user = {
      login : username,
      password : password
    }
    login(user).then((response) => {
      if (response.status === 200) {
        navigate('/activities');
      } else {
        alert('Niepoprawne dane logowania!')
      }
    }).catch(error => {
      console.log(error);
    })
  };


    return (
        <>
          <h1>Cześć!</h1>
          <form onSubmit = {handleLogin}>

            <label>Nazwa użytkownika: </label>
            <input type ="text" required value = {username} onChange={handleUsernameChange} />
            <label>Hasło: </label>
            <input type="password" required value = {password} onChange = {handlePasswordChange} /> 

            <button type ="submit"> Zaloguj się </button>
            <a href='/register' className='button' id='register-button'> Zarejestruj się </a>
  
          </form>
        </>
      );
}
