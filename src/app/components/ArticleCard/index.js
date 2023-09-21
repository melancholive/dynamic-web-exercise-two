"use client"; // loads on the client side rather than on the server
import styles from "./articleCard.module.css";

const ArticleCard = ({title, date, description, link, imgSrc, imgAlt}) => {
    return(
        <div className={styles.articleCard}>
            <div className={styles.articleCardContent}>
                <div className={styles.articleCardImage}>
                    <img src={imgSrc} alt={imgAlt}></img>
                </div>
                <div>
                    <h2>{title}</h2>
                    <p>{date}</p>
                    <p>{description}</p>
                    <a>{link}</a>
                </div>
                
            </div>
        </div>
    )
}

export default ArticleCard;