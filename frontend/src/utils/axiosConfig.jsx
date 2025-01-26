import axios from 'axios';

const serverUrl = 'http://localhost:8000';

const axiosWithToken = axios.create({
    baseURL: `${serverUrl}`,
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json',
        Authorization: `Token ${localStorage.getItem('token')}`
    }
});

const axiosMultipartWithToken = axios.create({
    baseURL: `${serverUrl}`,
    timeout: 5000,
    headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: `Token ${localStorage.getItem('token')}`
    }
});
const axiosMultipartNoToken = axios.create({
    baseURL: `${serverUrl}`,
    timeout: 5000,
    headers: {
        'Content-Type': 'multipart/form-data'
    }
});

const axiosNoToken = axios.create({
    baseURL: `${serverUrl}`,
    timeout: 5000,
});


export { axiosWithToken, axiosMultipartWithToken, axiosMultipartNoToken, axiosNoToken, serverUrl };
