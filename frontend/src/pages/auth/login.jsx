import React, { useState } from "react";
import style from '../../styles/login.module.css';
import { useNavigate } from "react-router-dom";
import LoginImg from '../../assets/images/lock.webp';
import {axiosMultipartNoToken} from '../../utils/axiosConfig';
import toast from 'react-hot-toast';

function Login () {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const handleChange = (e) => {
        if (e.target.name === 'username') {
                setUsername(e.target.value);
        }
        if (e.target.name === 'password') {
                setPassword(e.target.value);
        }
    }

    const handleLogin = (e) => {
        e.preventDefault();

        axiosMultipartNoToken.post('/api/token-auth/', {
            username: username,
            password: password
        })
        .then((response) => {
            toast.success("Login successful");
            localStorage.clear();
            localStorage.setItem('token', response.data.token);
            navigate('/');
        })
        .catch((error) => {
            toast.error("Username or password is incorrect");
            console.log(error);
        });
    };


    return (
        <div className={style.loginContainer}>
            <h1>Login Page</h1>
            <div className={style.loginContainerInner}>
                <div className={style.loginImg}>
                    <img src={LoginImg} alt="Logo" />
                </div>
                <form className={style.loginForm} onSubmit={handleLogin}>
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        name="username"
                        value={username}
                        placeholder="Username"
                        onChange={handleChange}
                        required
                    />
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={password}
                        onChange={handleChange}
                        required
                    />
                    <button type="submit">Login</button>
                </form>
            </div>
        </div>
    );
}

export default Login;