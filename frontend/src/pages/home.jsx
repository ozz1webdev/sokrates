// https://blogs.sch.gr/5dimmuen/epikoinonia/

import React, { useState, useEffect } from "react";
import styles from '../styles/home.module.css';

function Home() {

    useEffect(() => {
        refreshPage();
    }, []);

    function refreshPage() {
        window.location.reload(false);
        window.scrollTo(0, 0);
    }

    return (
        <div className={styles.homeContainer}>
            <h1>Homepage</h1>
        </div>
    );
}

export default Home;