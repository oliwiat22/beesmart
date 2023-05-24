import Axios from 'axios';

export const createNewActivity = (newActivity) => {
  const url = 'http://localhost:8080/extracurricular/';

  return Axios.post(url, newActivity);
}

export const getActivities = () => {
  const url = 'http://localhost:8080/extracurricular/';

  return Axios.get(url);
}
