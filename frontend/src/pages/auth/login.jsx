import React, { useState } from "react";

function Login () {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleChange = (e) => {
        if (e.target.name === 'username') {
                setUsername(e.target.value);
        }
        if (e.target.name === 'password') {
                setPassword(e.target.value);
        }
}
        

    const handleLogin = () => {
        // Perform login logic here
    };


    return (
        <div>
            <h1>Login</h1>
        </div>
    );
}

export default Login;