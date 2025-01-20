import React from "react";
import styles from '../styles/navbar.module.css';

function Navbar() {

    return (
        <div className={styles.navbar}>
            <div className={styles.logo}>
                Logo
            </div>
            <div className={styles.menu}>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#contact">Contact</a></li>
                    <li><a href="#login">Login</a></li>
                    <li><a href="#register">Register</a></li>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;