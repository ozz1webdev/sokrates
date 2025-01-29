import React, { useState, useEffect } from "react";
import styles from '../styles/posts.module.css';
import Card from '../components/card';
import { useNavigate } from "react-router-dom";
import { axiosWithToken, axiosNoToken } from "../utils/axiosConfig";
import getRole from "../features/getRole";
import 'animate.css';

function Posts() {
    const [posts, setPosts] = useState([]);
    const role = localStorage.getItem('role');
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

    const countComments = (id) => {
        try {
            const response = axiosWithToken.get(`/post/comments/count/${id}/`);
            return response.data;
            alert(response.data);
        } catch (error) {
            console.error("Error fetching comments count:", error);
        }
    };

    const likePost = async (id) => {
        try {
            const response = await axiosWithToken.post(`/post/like/${id}/`);
            console.log(response.data);
        } catch (error) {
            console.error("Error liking post:", error);
        }
    };



    useEffect(() => {
        const token = localStorage.getItem('token');
        const role = getRole();
        
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
            {role === 'admin' &&
                <button className={styles.createPostButton} onClick={() => navigate('/createpost')}>Create Post</button>
            }
            {role === 'teacher' &&
                <button className={styles.createPostButton} onClick={() => navigate('/createpost')}>Create Post</button>
            }

            {posts.map((post) => (
                <Card key={post.id} 
                    id={post.id} 
                    title={post.title} 
                    date={post.created_at} 
                    username={post.author} 
                    image={post.image} 
                    content={post.content}
                    approved={post.approved}
                />
            ))}

        </div>
    );
}

export default Posts;