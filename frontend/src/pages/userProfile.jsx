import React, { useState } from "react";
import { axiosWithToken } from "../utils/axiosConfig";
import { toast } from "react-hot-toast";
import styles from '../styles/userProfile.module.css';

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
        axiosWithToken.get('/api/profile/')
        .then((response) => {
            setUsername(response.data.username);
            setEmail(response.data.email);
            setRole(response.data.role);
            setUserImage(response.data.profile_image);
        })
        .catch((error) => {
            toast.error(error.response.data.username[0]);
            console.log(error);
        });
    }
    return (
        <div className={styles.profileContainer}>
            <div className={styles.profileImg}>
                <img src={userImage} alt="profile image" />
            </div>
            <div className={styles.profileData}>
                <h2>Username: {username}</h2>
                <h2>Email: {email}</h2>
                <h2>First Name: </h2>
                <h2>Last Name: </h2>
            </div>

        </div>
    );
}

export default UserProfile;