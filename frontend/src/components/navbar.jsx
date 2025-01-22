import React, { useState, useEffect } from "react";
import styles from '../styles/navbar.module.css';

function Navbar() {

    const [navbarHeight, setNavbarHeight] = useState('150px');
    const [logoStyle, setLogoStyle] = useState({width: '90px', height: '90px', left:'45%', top: '10px'});

    const handleScroll = () => {
        if (window.scrollY > 0) {
            setNavbarHeight("50px");
            setLogoStyle({width: '50px', height: '50px', left: '20px', top: '5px'});
        } else {
            setNavbarHeight("150px");
            setLogoStyle({width: '90px', height: '90px', top: '10px', left: '45%'});
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className={styles.navbar}>
            <div className={styles.menu} style={{height: navbarHeight}}>
                <div className={styles.logo} style={logoStyle}>
                    Logo
                </div>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#posts">Posts</a></li>
                    <li><a href="#contact">Contact</a></li>
                    <li><a href="#login">Login</a></li>
                    <li><a href="#register">Register</a></li>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;