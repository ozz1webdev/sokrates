import styles from '../styles/postdetail.module.css';
import { Link, useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { parseISO,format, set } from 'date-fns';
import DOMPurify from 'dompurify';
import { axiosWithToken } from '../utils/axiosConfig';
import backarrow from '../assets/images/arrow-left.webp';
import getRole from '../features/getRole';
import { toast } from 'react-hot-toast';

function PostDetail({props}) {

    const {id} = useParams();
    const [post, setPost] = useState({});
    const role = localStorage.getItem('role');
    const [comments, setComments] = useState([]);
    const [comment, setComment] = useState('');
    const [approved, setApproved] = useState(false);

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

    const fetchComments = async () => {
        try {
            const response = await axiosWithToken.get(`/post/comments/${id}/`);
            if (response.status === 200) {
                setComments(response.data);
            }
            else {
                toast.error(response.data.detail);
            }
        } catch (error) {
            console.log(error);
        }
    }
    const submitComment = async (e) => {
        e.preventDefault();
        try {
            const response = await axiosWithToken.post(`post/comments/create/${id}/`, {content: comment});
            if (response.status === 201) {
                toast.success("Comment submitted successfully");
                fetchComments();
                setComment('');
                window.location.reload(false);
            }
            else {
                toast.error(response.data.detail);
                console.log(response.data.detail);
            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchPost();
        fetchComments();
    }, []);

    const deletePost = async (postId) => {
        const role = localStorage.getItem('role');
        if (role === 'admin' || role === 'teacher') {
            try {
                await axiosWithToken.delete(`/post/delete/${postId}/`);
                toast.success("Post deleted successfully");
                window.location.href = '/posts';
            } catch (error) {
                console.error("Error deleting post:", error);
            }
        }
    };

    const approvePost = async (postId) => {
        const role = localStorage.getItem('role');
        if (role === 'admin' || role === 'teacher') {
            try {
                await axiosWithToken.put(`/post/approvepost/${postId}/`, {approved: true});
                toast.success("Post approved successfully");
                window.location.href = '/posts';
            } catch (error) {
                console.error("Error approving post:", error);
            }
        }
    };
    const rejectPost = async (postId) => {
        const role = localStorage.getItem('role');
        if (role === 'admin' || role === 'teacher') {
            try {
                await axiosWithToken.put(`/post/approvepost/${postId}/`, {approved: false});
                toast.success("Post rejected successfully");
                window.location.href = '/posts';
            } catch (error) {
                console.error("Error approving post:", error);
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
                    <button onClick={() => deletePost(post.id)} className={styles.deleteButton}>Delete Post</button>
                )}
                {role === 'admin' && (
                    <button onClick={() => approvePost(post.id)} className={styles.approveButton}>Approve Post</button>
                )}
                {role === 'admin' && (
                    <button onClick={() => rejectPost(post.id)} className={styles.rejectButton}>Reject Post</button>
                )}
            </div>
            <div className={styles.imgContainer}>
                <img className={styles.postImage} src={image} alt="post card" />
            </div>
            {role === 'admin' && ( <>
                {post.approved ? <p className={styles.approved}>Approved</p> : <p className={styles.rejected}>Rejected</p>}
            </>)
            }

            
            <h1 className={styles.title}>{post.title}</h1>
            <div className={styles.content}>
                <div dangerouslySetInnerHTML={{ __html: content }} />
            </div>
            <i>Created at {formatDate(post.created_at)} from {post.author}</i>
            <div className={styles.commentContainer}>
                <h2>Comments</h2>
                {comments.map((comment) => (
                    <div key={comment.id} className={styles.comment}>
                        <h3>{comment.author}</h3>
                        <div dangerouslySetInnerHTML={{ __html: comment.content }} />
                    </div>
                ))}
            </div>
            <div className={styles.commentForm}>
                <form onSubmit={submitComment}>
                    <textarea placeholder="Comment" value={comment} onChange={(e) => setComment(e.target.value)} />
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>                
    </>
);
}

export default PostDetail;
