import React, { useState } from 'react';
import styles from '../styles/burgermenu.module.css';
import 'animate.css';
import Logo from './logo.jsx';

const BurgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={styles.burgermenu}> 
            <div
                className={`${styles.burger} ${isOpen ? styles.open: ''}`}
                onClick={toggleMenu}>
                <div className={styles.bar}></div>
                <div className={styles.bar}></div>
                <div className={styles.bar}></div>
            </div>
            <nav className={`${styles.nav} ${isOpen ? styles.open : ''}`}>
                <div className="{styles.logo} animate__animated animate__fadeIn">
                    <Logo />
                </div>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#posts">Posts</a></li>
                    <li><a href="#contact">Contact</a></li>
                    <li><a href="#login">Login</a></li>
                    <li><a href="#registr">Register</a></li>
                </ul>
            </nav>
            {isOpen && <div className={styles.backdrop} onClick={toggleMenu}></div>}
        </div>
    );
};

export default BurgerMenu;