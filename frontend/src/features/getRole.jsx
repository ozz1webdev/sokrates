import { useState, useEffect } from 'react'
import { axiosWithToken } from '../utils/axiosConfig';

const GetRole = async () => {
    try {
        const response = await axiosWithToken.get('/api/profile/');
            localStorage.setItem('role', response.data.role);
            return response.data.role;
        } catch (error) {
            console.error("Error fetching role:", error);
            return null;
        }
}

export default GetRole;