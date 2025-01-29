import React, { useState, useEffect } from "react";
import styles from '../styles/posts.module.css';
import Card from '../components/card';
import { useNavigate } from "react-router-dom";
import { axiosWithToken, axiosNoToken } from "../utils/axiosConfig";
import 'animate.css';

function Posts() {
    const [posts, setPosts] = useState([]);

    const navigate = useNavigate();

    const fetchApprovedPosts = async () => {
        try {
            const response = await axiosNoToken.get('/post/approvedposts/');
            setPosts(response.data);
            console.log(response.data);
        } catch (error) {
            console.error("Error fetching posts:", error);
        }
    };

    const fetchPosts = async () => {
        try {
            const response = await axiosWithToken.get('/post/posts/');
            setPosts(response.data);
        } catch (error) {
            console.error("Error fetching posts:", error);
        }
    };

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            navigate('/login');
        } else {
            if (localStorage.getItem('role') === 'admin') {
                fetchPosts();
            }
            else {
                fetchApprovedPosts();
            }
        }
    }, []);

    return (
        <div className={styles.postsContainer}>

            {posts.map((post) => (
                <Card key={post.id} title={post.title} date={post.created_at} username={post.author} image={post.image} content={post.content} />
            ))}

        </div>
    );
}

export default Posts;