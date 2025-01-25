import React from 'react';
import styles from '../styles/card.module.css';
import image from '../assets/images/paper.webp';

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
                <a href="#" className={styles.cardLink}>Read More</a> 
            </div> 
        </div> 
    ); 
}

export default Card;