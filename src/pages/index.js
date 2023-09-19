// import Counter from "../app/components/TestingCounter";
import Data from '../app/components/data'; // imports the default element
import ArticleCard from '../app/components/ArticleCard';

export default function Home(){
    const projectName = "Exercise Two";

    return(
        <main>
            <h1>{projectName}</h1>
            <ArticleCard title="Cool Title" description="Cool Description"/>
            <ArticleCard title ="Another Title"/>
            <ArticleCard/>
            
        </main>
    )
}