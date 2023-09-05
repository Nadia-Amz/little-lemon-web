import React from 'react';
import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <div className="header">
      <Header />
      <Nav />
      </div>
      <Main />
      <Footer />
    </div>
  );
}

export default App;
