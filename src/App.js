import React, { useReducer }  from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Reservationpage from './pages/Reservationpage';
import Home from './pages/Home';
import Confirmedpage from './pages/Confirmedpage';
import Confirmationpage from './pages/Confirmationpage';
import Reservation from './components/Reservation';

function updateTimes(state, action) {
  switch (action.type) {
    default:
      return state;
  }
}
function initializeTimes() {
  return '14:00'; 
}

function App() {
  const [availableTimes, setAvailableTimes] = useReducer(updateTimes, null, initializeTimes);
  
  
  return (
    <Router>
      <Routes>
      <Route path="*" element={<Home/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/reservationpage" element={<Reservationpage/>}/>
      <Route path="/confirmationpage" element={<Confirmationpage/>}></Route>
      <Route path="/confirmedpage" element={<Confirmedpage/>}></Route>
      <Route path='/reservation' element={<Reservation availableTimes={availableTimes} setAvailableTimes={setAvailableTimes}/>}></Route>
      </Routes>
    </Router>

  );
}

export default App;
