import logo from './logo.svg';
import './App.css';
import React from 'react';

import Footer from './components/Footer';
import MyInfo from './components/MyInfo';
import Header from './components/Header';
import Greeting from './components/Greeting';

function App() {

  return (
    <div className="App">
      <Header />
      <Greeting />
      <MyInfo />
      <Footer />
    </div>
  );
}

export default App;
