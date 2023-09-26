// import Counter from "../app/components/TestingCounter";
import Data from '../app/components/data'; // imports the default element
import ArticleCard from '../app/components/ArticleCard';
import styles from './page.module.css';

export default function Home(){
    const projectName = "Exercise Two: Articles";

    return(
        <main className={styles.page}>
            <h1 >{projectName}</h1>
            {Data.map((article) =>
                <ArticleCard 
                    key = {article.id}
                    imgSrc = {article.image.url}
                    imgAlt = {article.image.alt}
                    title = {article.title}
                    date = {new Date(article.publishedDate).toDateString()}
                    description = {article.blurb}
                    // link = "http://localhost:3000"
                    id = {article.id}
                />
            )}
                        
        </main>
    )
}