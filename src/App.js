import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './composants/navbar/Navbar';
import { Button } from 'reactstrap';
import Profil from './composants/profil/profil';
import Profil_post from './composants/profil/profil_post';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Profil/>
     <Profil_post/>
    </div>
  );
}

export default App;
