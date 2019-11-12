import React, { Component } from 'react';
import Bouton1 from '../bouton1/Bouton1';
import Bouton2 from '../bouton2/Bouton2';
import Bouton3 from '../bouton3/Bouton3';
import './navbar.css';

class Navbar extends Component {
    render() {
        return (
            <div className = "sarah_croche">
                <Bouton1/>
                <Bouton2/>
                <Bouton3/>
            </div>
        );
    }
}

export default Navbar;