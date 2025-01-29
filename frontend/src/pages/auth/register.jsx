import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from '../../styles/register.module.css';
import {axiosMultipartNoToken } from '../../utils/axiosConfig';
import toast from 'react-hot-toast';

function Register () {
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');
    const [email, setEmail] = useState('');
    const [usercode, setUsercode] = useState('');
    const [userrole, setUserRole] = useState('');
    const [terms, setTerms] = useState(false);

    const navigate = useNavigate();

    const handleChange = (e) => {
        if (e.target.name === 'firstname') {
            setFirstname(e.target.value);
        }
        if (e.target.name === 'lastname') {
            setLastname(e.target.value);
        }
        if (e.target.name === 'username') {
                setUsername(e.target.value);
        }
        if (e.target.name === 'password') {
                setPassword(e.target.value);
        }
        if (e.target.name === 'password2') {
            setPassword2(e.target.value);
        }
        if (e.target.name === 'email') {
                setEmail(e.target.value);
        }
        if (e.target.name === 'usercode') {
            setUsercode(e.target.value);
        }
        if (e.target.name === 'terms') {
            setTerms(e.target.checked);
        }
    }

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
      };

    const handleRegister = (e) => {
        e.preventDefault();
        if (usercode === '1000') {
            setUserRole('teacher');
        }
        else if (usercode === '2000') {
            setUserRole('student');
        }
        else {
            setUserRole('guest');
        }
        if (password !== password2) {
            toast.error("Passwords do not match");
            return;
        }
        if (!validateEmail(email)) {
            toast.error("Please enter a valid email address");
            return;
        }
        if (password === password2 && terms) {
            axiosMultipartNoToken.post('api/register/', {
                first_name: firstname,
                last_name: lastname,
                username: username,
                password: password,
                email: email,
                role: userrole
            })
            .then((response) => {
                if (response.status === 400) {
                    toast.error(response.data.message);
                    return;
                }
                if(response.status === 201) {
                    toast.success("Registration successful");
                    navigate('/login');
                }
            })
            .catch((error) => {
               toast.error("Registration failed please try again");
               console.log(error);
            });
        }
    };

    return (
        <div className={styles.registerContainer}>
            <h3>Create an account</h3>
            <form onSubmit={handleRegister} className={styles.registerForm}>
                <label htmlFor="firstname">First Name</label>
                <input type="text" name="firstname" placeholder="First Name" value={firstname} onChange={handleChange} required/>
                <label htmlFor="lastname">Last Name</label>
                <input type="text" name="lastname" placeholder="Last Name" value={lastname} onChange={handleChange} required/>
                <label htmlFor="username">Username</label>
                <input type="text" name="username" placeholder="Username" value={username} onChange={handleChange} required/>
                <label htmlFor="password">Password</label>
                <input type="password" name="password" placeholder="Password" value={password} onChange={handleChange} required/>
                <label htmlFor="password2">Repeat Password</label>
                <input type="password" name="password2" placeholder="Repeat Password" value={password2} onChange={handleChange} required/>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" placeholder="Email" value={email} onChange={handleChange} required/>
                <label htmlFor="usercode">User Code</label>
                <input type="password" name="usercode" placeholder="User Code (if Available)" value={usercode} onChange={handleChange} required/>
                <label htmlFor="terms" onClick={() => {navigate('/terms'); }}>Agree to terms and conditions</label>
                <input type="checkbox" name="terms" onChange={handleChange} required />
                <button type="submit">Register</button>
            </form>
        </div>
    );
}

export default Register;