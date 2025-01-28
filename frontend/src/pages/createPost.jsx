import styles from '../styles/createPost.module.css';
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { axiosWithToken } from "../utils/axiosConfig";
import { toast } from "react-hot-toast";

function CreatePost() {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axiosWithToken.post('/posts', { title, content });
            if (response.status === 201) {
                toast.success('Post created successfully');
                navigate('/posts');
            } else {
                toast.error('Failed to create post');
            }
        } catch (error) {
            toast.error('Failed to create post');
        }
    };

    return (
        <div className={styles.createPostContainer}>
            <h1>Create Post</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="title">Title:</label>
                <input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)} />
                <label htmlFor="content">Content:</label>
                <textarea id="content" value={content} onChange={(e) => setContent(e.target.value)} />
                <button type="submit">Create Post</button>
            </form>
        </div>
    );
}

export default CreatePost;