import React from 'react';
import './App.css';
// import Header from './components/Header';
// import Nav from './components/Nav';
// import Main from './components/Main';
// import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Reservationpage from './pages/Reservationpage';
import Home from './pages/Home';


function App() {
  return (
    <Router>
      <Routes>
      <Route path="*" element={<Home/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/reservationpage" element={<Reservationpage/>}/>
      </Routes>
    </Router>

  );
}

export default App;
