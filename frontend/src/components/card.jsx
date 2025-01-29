import React from 'react';
import styles from '../styles/card.module.css';
import likeIcon from '../assets/images/thumbUp30px.webp';
import commentIcon from '../assets/images/comments30px.webp';
import DateConvert from './dateConvert';
import { useNavigate } from 'react-router-dom';

function Card (props) { 

    const navigate = useNavigate();

    return ( 
        <div className={styles.cardContainer}>
            <div className={styles.cardHeader}>
                <h3>{props.title}</h3>
                <i className="cardHeaderDate">Posted on <DateConvert dateString={props.date} /> from {props.username}</i>
            </div>
            <img src={props.image} alt="card image" /> 
            <div className={styles.cardBody}> 
                <p className={styles.cardContext}>{props.content}</p> 
            </div> 
            <hr />
            <div className={styles.cardFooter}>
                <i className={styles.cardLink} onClick={() => navigate(`/postdetail/${props.id}`)}>Read More</i> 
                <div className={styles.cardLike}>
                    <img src={commentIcon} alt="Comment" />
                    <i className={styles.commentsCount}>Comments: 10</i>
                    <img src={likeIcon} alt="Like" />
                    <i className={styles.likesCount}>Likes: 40</i>
                </div>
            </div>
        </div> 
    ); 
}

export default Card;