import React, { useState } from "react";
import { axiosWithToken } from "../utils/axiosConfig";

const GetUserData = async () => {

    try {
        const response = await axiosWithToken.get('/api/profile/');
        alert(response.data);
        
    } catch (error) {
        console.error('Error fetching profile:', error);
        alert('Failed to load profile. Please try again.');
    }
};

export default GetUserData;