import { useRouter } from "next/router";
import Data from '../../app/components/data';
import '../../app/globals.css'; // fixes the margin error
import styles from '../page.module.css';

export default function Article(){
    const router = useRouter();
    const slug = router.query.slug;

    const articleData = Data.find((val) => val.id === slug);
    if(!articleData) return null; // early return -- stops the page from crashing
    return(
        <main className={styles.articlePage}>
            <div className={styles.articleHeader} style={ {backgroundImage: `url('${articleData.image.url}')`}}>
                <div className={styles.articleWrapper}>
                    <p className={styles.header}></p>
                    <h1>{articleData.title}</h1>
                    <p>{new Date(articleData.publishedDate).toDateString()}</p>
                    <h2>{articleData.blurb}</h2>
                </div>
            </div>

            <div className={styles.articleWrapper}>
                {articleData.articleText.map((textChunk) => 
                    {
                        switch(textChunk.type){
                            case 'p':
                                return <p>{textChunk.data}</p>
                            case 'h2':
                                return <h2>{textChunk.data}</h2>
                            case 'h3':
                                return <h3>{textChunk.data}</h3>
                            default:
                                return <p>{textChunk.data}</p>
                        }
                    }
                )}
            </div>
        </main>
    );
}