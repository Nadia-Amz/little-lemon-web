import React, { useReducer } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Reservationpage from './pages/Reservationpage';
import Home from './pages/Home';
import Confirmedpage from './pages/Confirmedpage';
import Confirmationpage from './pages/Confirmationpage';

const updateTimes = (state, action) => {
  switch (action.type) {
    case 'SELECT_DATE':
      const updatedTimes = fetchAvailableTimes(action.newDate);
      return updatedTimes;
    case 'RESERVE_HOUR':
      reservations.map(line => {
        if (line.date === action.date) {
          line.times = line.times.filter((item) => item !== action.hour);
        }
        return true;
      });
      return fetchAvailableTimes(action.date);
    default:
      return state;
  }
};


const reservations = [

  { date: '2023-11-05', times: ['18:00 ', '19:00 ', '20:00 ', '21:00 ', '22:00 '] },
  { date: '2023-11-06', times: ['14:00 ', '15:00 ', '16:00 ', '17:00 ', '18:00 ', '19:00 ', '20:00 '] },
  { date: '2023-11-07', times: ['14:00 ', '15:00 ', '16:00 ', '17:00 ', '18:00 ', '19:00 ', '20:00 ', '21:00 ', '22:00 '] },
  { date: '2023-11-08', times: ['14:00 ', '15:00 ', '16:00 ', '17:00 ', '18:00 ', '21:00 ', '22:00 '] },
  { date: '2023-11-09', times: ['14:00 ', '15:00 ', '16:00 ', '17:00 ', '19:00 ', '20:00 ', '21:00 ', '22:00 '] },
  { date: '2023-11-10', times: ['14:00 ', '15:00 ', '16:00 ', '17:00 ', '18:00 ', '20:00 ', '21:00 ', '22:00 '] },
  { date: '2023-11-11', times: ['16:00 ', '17:00 ', '18:00 ', '19:00 ', '20:00 ', '21:00 ', '22:00 '] },
  { date: '2023-11-12', times: ['14:00 ', '15:00 ', '16:00 ', '19:00 ', '20:00 ', '21:00 ', '22:00 '] },

];

function fetchAvailableTimes(date) {

  const matchingReservation = reservations.find(reservation => reservation.date === date);

  if (matchingReservation) {

    return matchingReservation.times;
  } else {
    return [];
  }
}
const initializeTimes = () => {
  const today = new Date();
  const todayDate = today.toISOString().split('T')[0];
  return fetchAvailableTimes(todayDate);
}
// const availableTimesForToday = initializeTimes();

function App() {

  const [availableTimes, setAvailableTimes] = useReducer(updateTimes, null, initializeTimes);

  return (
    <Router>
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/reservationpage" element={<Reservationpage availableTimes={availableTimes} setAvailableTimes={setAvailableTimes} />} />
        <Route path="/confirmationpage" element={<Confirmationpage />}></Route>
        <Route path="/confirmedpage" element={<Confirmedpage />}></Route>
      </Routes>
    </Router>

  );
}

export { updateTimes, initializeTimes, App };
