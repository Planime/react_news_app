import PropTypes from 'prop-types';
import React from 'react'
import Article from './Article/Article'

function NewsList(props) {


    return (
        <ul className='newsListWrapper'>

            {props.newsList.length < 1 ?
                <li className="not_found">Nothing found</li>
                :
                props.newsList.map((article) => {
                    return (
                        <Article key={Math.random()}
                                 article={article}/>
                    )
                })
            }


        </ul>

    )
}

export default React.memo(NewsList)

NewsList.propTypes = {
    newsList: PropTypes.array,
};


NewsList.defaultProps = {
    newsList: [],
};
