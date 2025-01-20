import React, { useState } from 'react';
import styles from '../styles/burgermenu.module.css';

const BurgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={styles.burgerMenu}> {/* Apply styles using styles.variableName */}
            <div
                className={`${styles.burger} ${isOpen ? styles.open : ''}`}
                onClick={toggleMenu}
            >
                <div className={styles.bar}></div>
                <div className={styles.bar}></div>
                <div className={styles.bar}></div>
            </div>
            <nav className={`${styles.nav} ${isOpen ? styles.open : ''}`}>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#contact">Contact</a></li>
                    <li><a href="#login">Login</a></li>
                    <li><a href="#registr">Register</a></li>
                </ul>
            </nav>
        </div>
    );
};

export default BurgerMenu;