import React from "react"
import PropTypes from 'prop-types';


function Article ({
    article: {
        urlToImage,
        title,
        content,
        url,
        author,
        publishedAt

    }
                  }) {
    return(


        <li>
            <img className="article_img"
                 src={urlToImage}
                 alt=""/>
            <h2 className="article_title">{title}</h2>
            <div className="article_content">{content}</div>
            <a href={url}
               target="_blank"
               rel='noopener noreferrer'>View full article</a>
            <p className="article_author">Author: {author}</p>
            <p className="article_published_date">Published date: {publishedAt}</p>
        </li>
    )
}

export default Article

Article.propTypes = {
    article: PropTypes.object
};

Article.defaultProps = {
    article: {}
};
