import axios from 'axios';

const serverUrl = 'http://localhost:8000';

const axiosWithToken = axios.create({
    baseURL: `${serverUrl}/api`,  // Django backend URL
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json',
        Authorization: `Token ${localStorage.getItem('token')}`
    }
});

const axiosMultipartWithToken = axios.create({
    baseURL: `${serverUrl}/api`,  // Django backend URL
    timeout: 5000,
    headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: `Token ${localStorage.getItem('token')}`
    }
});

const axiosNoToken = axios.create({
    baseURL: `${serverUrl}/api`,  // Django backend URL
    timeout: 5000,
});


export { axiosWithToken, axiosMultipartWithToken, axiosNoToken, serverUrl };
