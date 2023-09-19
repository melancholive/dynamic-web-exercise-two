"use client"; // loads on the client side rather than on the server

const ArticleCard = ({title, description}) =>{
    return(
        <div>
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    )
}

export default ArticleCard;