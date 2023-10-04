import React, { useState }  from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Reservationpage from './pages/Reservationpage';
import Home from './pages/Home';
import Confirmedpage from './pages/Confirmedpage';
import Confirmationpage from './pages/Confirmationpage';
import Reservation from './components/Reservation';


function App() {
  const [selectedHour, setSelectedHour] = useState('14:00');

  return (
    <Router>
      <Routes>
      <Route path="*" element={<Home/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/reservationpage" element={<Reservationpage/>}/>
      <Route path="/confirmationpage" element={<Confirmationpage/>}></Route>
      <Route path="/confirmedpage" element={<Confirmedpage/>}></Route>
      </Routes>
      <Reservation selectedHour={selectedHour} setSelectedHour={setSelectedHour}/>

    </Router>

  );
}

export default App;
