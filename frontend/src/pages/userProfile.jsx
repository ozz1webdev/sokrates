import React, { useState } from "react";
import { axiosWithToken } from "../utils/axiosConfig";
import { toast } from "react-hot-toast";

function UserProfile() {
    const [role, setRole] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [userImage, setUserImage] = useState('');

    if (!localStorage.getItem('token')) {
        toast.error("You are not logged in");
        window.location.href = '/login';
    }
    else {
        axiosWithToken.get('api/profile/')
        .then((response) => {
            setUsername(response.data.username);
            setEmail(response.data.email);
            setRole(response.data.role);
            setUserImage(response.data.profile_image);
        })
        .catch((error) => {
            console.log(error);
        });
    }
    return (
        <div>
            <h2>Username: {username}</h2>
            <h2>Email: {email}</h2>
            <h2>Role: {role}</h2>
            <h2>User Image: </h2>
            <img src={`http://localhost:8000/${userImage}`} alt="profile" width="300" height="300"/>

        </div>
    );
}

export default UserProfile;