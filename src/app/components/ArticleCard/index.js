"use client"; // loads on the client side rather than on the server
import styles from './articleCard.module.css';
import Link from 'next/link';

const ArticleCard = ({title, date, description, link, imgSrc, imgAlt, id}) => {
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
                    {/* <a>{link}</a> */}
                    <p><Link className={styles.articleLink} href={`article/${id}`}>Read More</Link></p>
                </div>
                
            </div>
        </div>
    )
}

export default ArticleCard;