import React, { useState } from 'react';
import styles from '../styles/burgermenu.module.css';
import 'animate.css';
import Logo from './logo.jsx';
import { useNavigate } from "react-router-dom";

const BurgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [token,setToken] = useState(localStorage.getItem('token'));
    const navigate = useNavigate();

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
                <div className={`${styles.logo} animate__animated animate__fadeIn`}>
                    <Logo />
                </div>
                <ul>
                <li><i onClick={() => navigate('/')}>Home</i></li>
                    <li><i onClick={() => navigate('/posts')}>Posts</i></li>
                    <li><i onClick={() => navigate('/contact')}>Contact</i></li>
                    {token? ( <>
                        <li><i onClick={() => navigate('/userprofile')}>My Profile</i></li>
                        <li><i onClick={() => navigate('/logout')}>Logout</i></li>                
                    </>
                    ):( <>
                        <li><i onClick={() => navigate('/login')}>Login</i></li>
                        <li><i onClick={() => navigate('/register')}>Register</i></li>
                    </>
                    )}
                </ul>
            </nav>
            {isOpen && <div className={styles.backdrop} onClick={toggleMenu}></div>}
        </div>
    );
};

export default BurgerMenu;