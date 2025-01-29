import { axiosNoToken } from "../utils/axiosConfig";
import { useEffect, useState } from "react";
import styles from '../styles/getLastThreePosts.module.css';

function GetLastThreePosts() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axiosNoToken.get('post/lastthree/')
        .then((response) => {
            setPosts(response.data);
        })
        .catch((error) => {
            console.log(error);
        });
    }, []);

    return (
        <div className={styles.lastThreeContainer}>
            {posts.map((post) => (
                <div key={post.id} className={styles.lastThreeCards}>
                    <h3>{post.title}</h3>
                    <img src={post.image} alt={post.title} />
                    <i>Read More</i>
                </div>
            ))}
        </div>
    );
}

export default GetLastThreePosts