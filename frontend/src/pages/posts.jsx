import React from "react";
import styles from '../styles/posts.module.css';
import Card from '../components/card';
import 'animate.css';

function Posts() {
    return (
        <div className={styles.postsContainer}>
            <Card title="Post 1" date="2023-08-01" username="John Doe" />
        </div>
    );
}

export default Posts;