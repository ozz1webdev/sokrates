import styles from '../styles/editpost.module.css';
import { useParams } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { axiosMultipartWithToken, axiosWithToken } from '../utils/axiosConfig';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function EditPost ({props}) {

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [image, setImage] = useState(null);
    const [newImage, setNewImage] = useState(null);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const navigate = useNavigate();

    const {id} = useParams();
  
    const handleImageChange = (e) => {
        setNewImage(e.target.files[0]);
    };

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const response = await axiosWithToken.get(`/post/posts/${id}/`);
                setTitle(response.data.title);
                setContent(response.data.content);
                setImage(response.data.image);
            } catch (error) {
                console.error(error);
            }
        };
        fetchPost();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        const formData = new FormData();
        formData.append('title', title);
        formData.append('content', content);
        if (newImage) {
            formData.append('image', newImage);
        }
        try {
            await axiosMultipartWithToken.put(`/post/update/${id}/`, formData);
            //alert('Post updated successfully!');
            toast.success('Post updated successfully!', {
                position: 'top-left',
                autoClose: 3000,
                theme: 'dark',
                pauseOnHover: true,
            });
            //window.location.reload(false);
            setImage(null);
            navigate('/postdetails/' + id);
        } catch (error) {
            toast.success('Post updated failed!', {
                position: 'top-left',
                autoClose: 3000,
                theme: 'dark',
                pauseOnHover: true,
        });

        setIsSubmitting(false);
        };
    }



      return (
        <div className={styles.container}>
            <h1>Update Post</h1>
            
            <form onSubmit={handleSubmit}>
                <br />
                <br />
                <label>Title</label>
                <br />
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                    style={{ width: '100%', height: '40px' }}
                />
                <br />
                <br />
                <label>Content</label>
                <textarea
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    placeholder="Write something amazing..."
                    required
                    style={{ width: '100%' }}
                />
                <br />
                <label>Select Image :</label>
                <br />
                <br />
                <input type="file" 
                onChange={handleImageChange}
                accept="image/*" 
                />
                <br />
                <button type="submit" disabled={isSubmitting} style={{ width: '100px', height: '40px' }}>
                    {isSubmitting ? 'Posting...' : 'Update Post'}
                </button>
            </form>
        </div>
    );
}

export default EditPost;
