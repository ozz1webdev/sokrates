import React, { useState } from "react";
import { axiosWithToken } from "../utils/axiosConfig";

function GetUserData() {
    const [token, setToken] = useState(localStorage.getItem('token'));

    axiosWithToken.get('/api/profile/')
    .then((response) => {
        console.log(response.data);
    })
    .catch((error) => {
        console.log(error);
    });

    return (
        <div>
            <h1>GetUserData</h1>
        </div>
    );
}

export default GetUserData;
