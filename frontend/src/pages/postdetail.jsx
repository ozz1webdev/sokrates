import styles from '../styles/postdetail.module.css';
import { Link, useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { parseISO,format, set } from 'date-fns';
import DOMPurify from 'dompurify';
import { axiosWithToken } from '../utils/axiosConfig';
import backarrow from '../assets/images/arrow-left.webp';
import getRole from '../features/getRole';

function PostDetail({props}) {

    const {id} = useParams();
    const [post, setPost] = useState({});
    const role = localStorage.getItem('role');

    const image = post.image;
    const content = DOMPurify.sanitize(post.content);
    
    const formatDate = (dateString) => {
        if (!dateString) return 'No date provided';
    
        try {
          const date = parseISO(dateString);
          return format(date, 'dd MMM yyyy');
        } catch {
          return 'Invalid date';
        }
      };

    const fetchPost = async () => {
        try {
            const response = await axiosWithToken.get(`/post/posts/${id}/`);
            if (response.status === 200) {
                setPost(response.data);
            }
            else {
                alert(response.data.detail);
            }
        } catch (error) {
            alert(error);
        }
    }

    useEffect(() => {
        fetchPost();
    }, []);

    const deletePost = async (postId) => {
        const role = localStorage.getItem('role');
        if (role === 'admin' || role === 'teacher') {
            try {
                await axiosWithToken.delete(`$/post/delete/${postId}/`);
            } catch (error) {
                console.error("Error deleting post:", error);
            }
        }
    };

return (
    <>
        <div className={styles.postDetailContainer}>
            <Link to="/posts"><img className={styles.backarrow} src={backarrow} alt="back" /></Link>
            <div className={styles.postMenu}>
                {role === 'admin' && (
                    <Link to={`/editpost/${post.id}`}><button className={styles.editButton}>Edit Post</button></Link>
                )}
                {role === 'admin' && (
                    <button onClick={deletePost(post.id)} className={styles.deleteButton}>Delete Post</button>
                )}
            </div>
            <div className={styles.imgContainer}>
                <img className={styles.postImage} src={image} alt="post card" />
            </div>
            <h1 className={styles.title}>{post.title}</h1>
            <div className={styles.content}>
                <div dangerouslySetInnerHTML={{ __html: content }} />
            </div>
            <i>Created at {formatDate(post.created_at)} from {post.author}</i>
        </div>                
    </>
);
}

export default PostDetail;
