import React from "react"


function Article (props) {
    return(


        <li>
            <img className="article_img"
                 src={props.article.urlToImage}
                 alt=""/>
            <h2 className="article_title">{props.article.title}</h2>
            <div className="article_content">{props.article.content}</div>
            <a href={props.article.url}
               target="_blank"
               rel='noopener noreferrer'>View full article</a>
            <p className="article_author">Author: {props.article.author}</p>
            <p className="article_published_date">Published date: {props.article.publishedAt}</p>
        </li>
    )
}

export default Article