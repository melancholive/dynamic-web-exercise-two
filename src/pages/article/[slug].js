import { useRouter } from "next/router";
import Data from '../../app/components/data';
import styles from '../page.module.css';

export default function Article(){
    const router = useRouter();
    const slug = router.query.slug;

    const articleData = Data.find((val) => val.id === slug);
    if(!articleData) return null; // early return -- stops the page from crashing
    return(
        <main className={styles.page}>
            <div>
                <p className={styles.header}></p>
                <p>{articleData.title}</p>
                <p>{new Date(articleData.publishedDate).toDateString()}</p>
                <p>{articleData.blurb}</p>
            </div>
            <div className={styles.articleParagraphText}>
                {Data.map((articleTextChunk) => <p>{articleTextChunk.data}</p>)}
            </div>
        </main>
    )
}