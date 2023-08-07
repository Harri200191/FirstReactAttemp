import logo from './logo.svg';
import './App.css';
import React from 'react';

import Footer from './components/Footer';
import MyInfo from './components/MyInfo';
import Header from './components/Header';
import Greeting from './components/Greeting';
import ThreeComps from './components/ThreeComps';
import QAFile from './components/QAFile';
import ContactMe from './components/ContactMe';

function App() {

  return (
    <div className="App">
      <Header />
      <MyInfo />
      <Footer />
      <Greeting />
      <ThreeComps />
      <QAFile 
        question="Where do I study?"
        answer="NUST H-12 Islamabad"      
      />
      <QAFile 
        question="Do I know ML Well?"
        answer="Yes I do"      
      />
      <QAFile 
        question="Do I like bikes?"
        answer="Yes I do!"      
      />
      <br></br>
      <br></br>
      <ContactMe />
    </div>

  );
}

export default App;
