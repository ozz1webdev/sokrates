import React from "react";
import styles from '../styles/navbar.module.css';
import Burgermenu from './burgermenu.jsx';

function Navbar() {

    return (
        <div>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#contact">Contact</a></li>
                <li><a href="#login">Login</a></li>
                <li><a href="#register">Register</a></li>
            </ul>
            <Burgermenu />
        </div>
    );
}

export default Navbar;