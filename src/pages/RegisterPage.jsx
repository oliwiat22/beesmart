import './registerPage.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login, register } from '../api/userApi';

export const RegisterPage = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [role, setRole] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleRoleChange = (event) => {
    setRole(event.target.value);
  };

  const handleRegister = (event) => {
    event.preventDefault();
    const user = {
      login : username,
      password : password,
      role: role
    }
    register(user).then((response) => {
      if (response.status === 200) {
        navigate('/');
      } else {
        alert('Niepoprawne dane!')
      }
    }).catch(error => {
      console.log(error);
    })
  };

  return (
    <>
      <h1>Dołącz do naszej społeczności!</h1>
      <form onSubmit = {handleRegister}>

        <label htmlFor="username">Nazwa użytkownika:</label>
        <input type="text" required onChange={handleUsernameChange} />

        <label htmlFor="role">Typ konta (rola):</label>
        <input type="text" required onChange={handleRoleChange} />

        <label htmlFor="password">Hasło:</label>
        <input type="password" required onChange={handlePasswordChange} />

        <button type ="submit"> Zarejestruj się </button>

        <a href="/" className='button'>
          Anuluj
        </a>
      </form>
    </>
  );
};
