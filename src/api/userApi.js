import Axios from 'axios';

export const login = (user) => {
  const url = 'http://localhost:8080/user/login';

  return Axios.post(url, user);
}

export const register = (user) => {
    const url = 'http://localhost:8080/user/register';
  
    return Axios.post(url, user);
  }