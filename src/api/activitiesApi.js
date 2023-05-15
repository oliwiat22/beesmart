import Axios from 'axios';

export const createNewActivity = (name, description, type, location, durationInMinutes) => {
  const url = 'http://127.0.0.1:5173/';
  let newActivity = {
    name:name,
    description:description,
    type:type,
    location:location,
    durationInMinutes:durationInMinutes
  };

  return Axios.post(url, newActivity);
}