import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from '../../styles/register.module.css';

function Register () {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');
    const [email, setEmail] = useState('');

    const handleChange = (e) => {
        if (e.target.name === 'username') {
                setUsername(e.target.value);
        }
        if (e.target.name === 'password') {
                setPassword(e.target.value);
        }
        if (e.target.name === 'password2') {
            setPassword(e.target.value);
    }
    if (e.target.name === 'email') {
                setEmail(e.target.value);
        }
    }

    const handleRegister = () => {
        // Perform registration logic here
    };

    return (
        <div className={styles.registerContainer}>
            <h1>Register Page</h1>
            <form onSubmit={handleRegister} className={styles.registerForm}>
                <label htmlFor="username">Username</label>
                <input type="text" name="username" placeholder="Username" value={username} onChange={handleChange} />
                <label htmlFor="password">Password</label>
                <input type="password" name="password" placeholder="Password" value={password} onChange={handleChange} />
                <label htmlFor="password2">Repeat Password</label>
                <input type="password" name="password2" placeholder="Repeat Password" value={password2} onChange={handleChange} />
                <label htmlFor="email">Email</label>
                <input type="email" name="email" placeholder="Email" value={email} onChange={handleChange} />
                <button type="submit">Register</button>
            </form>
        </div>
    );
}

export default Register;