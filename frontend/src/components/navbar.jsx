import React, { useState, useEffect } from "react";
import styles from '../styles/navbar.module.css';
import { useNavigate } from "react-router-dom";
import LogoImg from '../assets/images/sokrateslogo512.webp';
import { axiosWithToken } from "../utils/axiosConfig";
import "animate.css";

function Navbar() {

    const [navbarHeight, setNavbarHeight] = useState('250px');
    const [logoStyle, setLogoStyle] = useState({width: '200px', height: '230px', left:'43%', top: '10px'});
    const [token,setToken] = useState(localStorage.getItem('token'));
    const [username, setUsername] = useState('');
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [role, setRole] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        if (isAuthenticated) {
            axiosWithToken.get('/api/profile/')
            .then(response => {
                localStorage.setItem('username', response.data.username);
                localStorage.setItem('role', response.data.role);
                setRole(response.data.role);
                localStorage.setItem('profile_image', `http://localhost:8000${response.data.profile_image}`);
                localStorage.setItem('email', response.data.email);
                setUsername(response.data.username);
            })
            .catch(error => {
                console.log(error);
            })
        }
    }, [isAuthenticated]);

    useEffect(() => {
        const token = localStorage.getItem('token');

        if (token) {
            setIsAuthenticated(true);
        }
    }, []);
    
    const handleScroll = () => {
        if (window.scrollY > 0) {
            setNavbarHeight("50px");
            setLogoStyle({width: '70px', height: '80px', left: '20px', top: '5px'});
        } else {
            setNavbarHeight("250px");
            setLogoStyle({width: '200px', height: '230px', top: '10px', left: '43%'});
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
                <div className={`${styles.navbarlogo} animate__animated animate__fadeIn`} style={logoStyle}>
                    <img src={LogoImg} alt="Logo" />
                </div>
                <ul>
                    <li><i onClick={() => navigate('/')}>Home</i></li>
                    <li><i onClick={() => navigate('/posts')}>Posts</i></li>
                    <li><i onClick={() => navigate('/contact')}>Contact</i></li>
                    {token? ( <>
                        {role === 'teacher' && (
							<li><i onClick={() => navigate('/teacherpage')}>TeacherPage</i></li>)}
						{role === 'admin' && (
							<li><i className={styles.adminMenuItem} onClick={() => navigate('/adminpage')}>AdminPage</i></li>)}
						{role === 'student' && (
							<li><i onClick={() => navigate('/studentpage')}>StudentPage</i></li>)}
                        <li><i onClick={() => navigate('/userprofile')}>My Profile</i></li>
                        <li><i onClick={() => navigate('/logout')}>Logout - {username}</i></li>                
                    </>
                    ):( <>
                        <li><i onClick={() => navigate('/login')}>Login</i></li>
                        <li><i onClick={() => navigate('/register')}>Register</i></li>
                    </>
                    )}

                </ul>
            </div>
            <div id="menu" className={styles.adminSubMenu}>
                <ul>
                    <li><i onClick={() => navigate('/createpost')}>Create Post</i></li>
                </ul>
            </div>
        </div>

    );
}

export default Navbar;