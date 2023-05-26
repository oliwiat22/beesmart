import Axios from 'axios';

export const createNewActivity = (newActivity) => {
  const url = 'http://localhost:8080/extracurricular/';

  return Axios.post(url, newActivity);
}

export const getActivities = () => {
  const url = 'http://localhost:8080/extracurricular/';

  return Axios.get(url);
}

export const joinActivity = (activityDateTime, activityId) => {
  const url = 'http://localhost:8080/extracurricular/join/';
  const join = {
    startActivityAt : activityDateTime,
    activityConfigurationId : activityId
  }

  return Axios.put(url, join);
}

export const search = (name, priceFrom, priceTo, type) => {
  const url = 'http://localhost:8080/extracurricular/search/';
  const join = {
    name : name,
    priceFrom : priceFrom,
    priceTo : priceTo,
    type : type
  }

  return Axios.post(url, join);
}
