import React from 'react';
import styles from '../styles/card.module.css';
import image from '../assets/images/paper.webp';
import likeIcon from '../assets/images/thumbUp30px.webp';
import commentIcon from '../assets/images/comments30px.webp';

function Card (props) { 
    return ( 
        <div className={styles.cardContainer}>
            <div className={styles.cardHeader}>
                <h3>{props.title}</h3>
                <i className="cardHeaderDate">Posted on {props.date} from {props.username}</i>
            </div>
            <img src={image} alt="card image" /> 
            <div className={styles.cardBody}> 
                <p className={styles.cardContext}>Some quick example text to build on the card title and make up the bulk of the card's content.</p> 
            </div> 
            <hr />
            <div className={styles.cardFooter}>
                <i className={styles.cardLink}>Read More</i> 
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