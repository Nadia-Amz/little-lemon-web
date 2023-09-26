import React from 'react';
import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import Main from './components/Main';
import Footer from './components/Footer';
import Reservation from './components/Reservation';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
    <div>
      <div className="header">
      <Header />
      <Nav />
      </div>
      <Main />
      <Footer />
      <Routes>
        <Route path="/reservation" element={<Reservation/>}/>
      </Routes>
    </div>
    </Router>

  );
}

export default App;
