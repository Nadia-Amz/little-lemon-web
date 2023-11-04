import React, { useReducer }  from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Reservationpage from './pages/Reservationpage';
import Home from './pages/Home';
import Confirmedpage from './pages/Confirmedpage';
import Confirmationpage from './pages/Confirmationpage';

  const updateTimes = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
}
  const initializeTimes = () => {
   return ['14:00','15:00','16:00','17:00','18:00','19:00','20:00','21:00','21:00','22:00'];
}


function App() {
  const [availableTimes, setAvailableTimes] = useReducer(updateTimes, null, initializeTimes);
  // useEffect(() => {
  //   fetch('https://raw.githubusercontent.com/Meta-Front-End-Developer-PC/capstone/master/api.js')
  //      .then((response) => response.json())
  //      .then((fetchData) => setAvailableTimes(fetchData))
  //      .catch(error => console.error('Error fetching', error));
  //    }, []);
  

  return (
    <Router>
      <Routes>
      <Route path="*" element={<Home/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/reservationpage" element={<Reservationpage availableTimes={availableTimes} setAvailableTimes={setAvailableTimes}/>}/>
      <Route path="/confirmationpage" element={<Confirmationpage/>}></Route>
      <Route path="/confirmedpage" element={<Confirmedpage/>}></Route>
      </Routes>
    </Router>

  );
}

export { updateTimes, initializeTimes, App };
