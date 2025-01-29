// https://blogs.sch.gr/5dimmuen/epikoinonia/

import React, { useState } from "react";
import styles from '../styles/home.module.css';
import LastThree from '../components/getLastThreePost';


function Home() {

    return (
        <div className={styles.homeContainer}>
            <LastThree />
        </div>
    );
}

export default Home;