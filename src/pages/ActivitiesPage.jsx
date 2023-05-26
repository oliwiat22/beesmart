import { getActivities } from '../api/activitiesApi';
import './activitiesPage.css';
import {useEffect, useState} from 'react';
import {BasicModal} from './BasicModal';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useNavigate } from 'react-router-dom';


const Divider = ({ name, type, durationInMinutes, price, description, terms }) => {
  return (
    <div className="divider">
      <h3>{name}</h3>
      <p>Typ: {type === 'ONLINE' ? 'Online' : 'Stacjonarnie'}</p>
      <p>Dlugosc: {durationInMinutes}</p>
      <p>Cena: {price}</p>
      <p>Opis: {description}</p>
      {
        terms && terms.length > 0 &&
          <Terms terms={terms}/>
      }
    </div>
  );
};

const Terms = ({ terms }) => {

  const formatDate = (date) => {
    let newDate = new Date(date)
    return newDate.toLocaleString()
  }

  return (
    <TableContainer component={Paper} style={{marginTop: 5}}>
    Terminy, na które zapisali się studenci
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Nr zajęć</TableCell>
            <TableCell align="right">Początek:</TableCell>
            <TableCell align="right">Koniec:</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {terms.map((row, idx) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {idx + 1}
              </TableCell>
              <TableCell align="right">{formatDate(row.startAt)}</TableCell>
              <TableCell align="right">{formatDate(row.endAt)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}


export const ActivitiesPage = () => {
  const [activities, setActivities] = useState([]);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

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
              activities && activities.teacher &&
                <BasicModal handleModalOpen={handleModalOpen} open={open}/>
            }

            <div>
              {
                activities && 
                  <button onClick={() => navigate('/search')}>Wyszukiwarka</button>
              }
            </div>
            {/* {isLoggedIn ? (
              <button onClick={handleLogout}>Wyloguj się</button>
            ) : null} */}
          </div>
        </div>
        <div className="content">
          <h2>Moje zajęcia</h2>
          { activities && activities.activities &&
          <div className="divider-container">
            {activities.activities.map((activity, index) => (
              <Divider
                key={index}
                name={activity.activity.name}
                type={activity.activity.type}
                durationInMinutes={activity.activity.durationInMinutes}
                price={activity.activity.price}
                description={activity.activity.description}
                terms={activity.terms}
              />
            ))}
          </div>
          }
        </div>
      </div>
  );

}