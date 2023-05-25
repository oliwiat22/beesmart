import { getActivities } from '../api/activitiesApi';
import './activitiesPage.css';
import {useEffect, useState} from 'react';
import {BasicModal} from './BasicModal';

const Divider = ({ nazwa, typ, data, cena, opis }) => {
    return (
      <div className="divider">
        <h3>{nazwa}</h3>
        <p>Typ: {typ === 'ONLINE' ? 'Online' : 'Stacjonarnie'}</p>
        <p>Dlugosc: {data}</p>
        <p>Cena: {cena}</p>
        <p>Opis: {opis}</p>
      </div>
    );
  };


export const ActivitiesPage = () => {
  const [activities, setActivities] = useState([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    handleGet();
  }, [open]);

  const handleModalOpen = (value) => setOpen(value);

  const handleGet = () => {
    getActivities().then((response) => {
      if (response.status === 200) {
        setActivities(response.data)
      } else {
        alert('Blad!')
      }
    }).catch(error => {
      console.log(error);
    })
  };

    return (
        <div className="App">
          <div className="navbar">
            <div className="navbar-container">
              {
                activities && activities.length > 0 && activities[0].teacher &&
                  <BasicModal handleModalOpen={handleModalOpen} open={open}/>
              }

              <div>
                {
                  activities && activities.length > 0 && !activities[0].teacher &&
                    <button>Wyszukiwarka</button>
                }
              </div>
              {/* {isLoggedIn ? (
                <button onClick={handleLogout}>Wyloguj się</button>
              ) : null} */}
            </div>
          </div>
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

}