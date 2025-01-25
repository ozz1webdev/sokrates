import React from "react";
import styles from '../styles/posts.module.css';
import Card from '../components/card';
import 'animate.css';

function Posts() {
    return (
        <div className={styles.postsContainer}>
            <Card title="Post 1" date="2023-08-01" username="John Doe" />
            <Card title="Post 2" date="2023-08-01" username="John Deer" />
            <Card title="Post 3" date="2023-08-01" username="John Deer" />
        </div>
    );
}

export default Posts;