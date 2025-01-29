import styles from '../styles/postdetail.module.css';
import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { parseISO,format, set } from 'date-fns';
import DOMPurify from 'dompurify';
import { axiosNoToken, serverUrl } from '../utils/axiosConfig';
import backarrow from '../assets/images/arrow-left.webp';

function PostDetail({props}) {

    const {id} = useParams();
    const [post, setPost] = useState({});
    const [youtubeVideoid, setYoutubeVideoId] = useState(null);
    const [yUrl, setYUrl] = useState(null);

    const cover = serverUrl + post.image;
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
            const response = await axiosNoToken.get(`/post/${id}/`);
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

    useEffect(() => {
        const id = getVideoId();
        setYoutubeVideoId(id);
    }, [post.youtubeUrl,setYoutubeVideoId]);

    function getVideoId() {
        const url = post.youtubeUrl;
        try {
            const urlObj = new URL(url);
            return urlObj.searchParams.get('v');
        } catch (error) {
            console.error("Invalid URL", error);
            return null;
        }
    }


    return (
        <>
            <div className={styles.container}>
                <br />
                <br />
                    <Link to="/home"><img className={styles.backarrow} src={backarrow} alt="back" /></Link>
                <br />
                <br />
                <hr />
                <br />
                <div className={styles.cover}>
                    <img className={styles.coverImage} src={cover} alt="post card" />
                </div>
                <br />
                    <h1>{post.title}</h1>
                <br />
                    <div className={styles.youtubeVideo}>
                        <iframe
                        width="560"
                        height="315"
                        src={`https://www.youtube.com/embed/${youtubeVideoid ? youtubeVideoid : getVideoId}`}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        ></iframe>
                    </div>
                <br />
                <br/>
                <dic className={styles.content}>
                    <div dangerouslySetInnerHTML={{ __html: content }} />
                </dic>
                <br />
                <br />
                <i>Created at {formatDate(post.created_at)} from {post.author}</i>
                <br />
            </div>                
        </>
        
    );
}

export default PostDetail;
