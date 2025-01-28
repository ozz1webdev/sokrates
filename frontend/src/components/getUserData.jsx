import React, { useState } from "react";
import { axiosWithToken } from "../utils/axiosConfig";
import { toast } from "react-hot-toast";

function GetUserData() {
    const [role, setRole] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [userImage, setUserImage] = useState('');

    axiosWithToken.get('/api/profile/')
    .then((response) => {
        setUsername(response.data.username);
        setEmail(response.data.email);
        setRole(response.data.role);
        setUserImage(response.data.profile_image);
        alert(response.data.profile_image);
    })
    .catch((error) => {
        toast.error(error.response.data.username[0]);
        console.log(error);
    });

    return (
        <div>
            <h2>Username: {username}</h2>
            <h2>Email: {email}</h2>
            <h2>Role: {role}</h2>
            <h2>User Image: </h2>
            <img src={userImage} alt="profile" width="300" height="300"/>

        </div>
    );
}

export default GetUserData;
