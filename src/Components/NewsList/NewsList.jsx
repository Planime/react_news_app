import PropTypes from 'prop-types';
import React, {useState, useEffect} from 'react'
import Article from './Article/Article'
import Pagination from '@material-ui/lab/Pagination';
import { makeStyles } from '@material-ui/core/styles';
import { MenuItem,  TextField} from '@material-ui/core/';

const useStyles = makeStyles(() => ({
    root: {
        display: 'flex',
        justifyContent: 'center'
    },
}));





function NewsList({newsList}) {


    const [page, setPage] = useState(1);
    const [newsPerPage, setNewsPerPage] = useState(2);

    useEffect(() => {
        setPage(1)
    }, [newsList]);



    function onChangePage(e, value) {
        setPage(value)
    }
    function onChangeNewsPerPage(e) {
        setNewsPerPage(e.target.value)
    }

    const classes = useStyles();


    return (
        <>
            <TextField
                className={"selector"}
                id="outlined-select-currency"
                select
                label="News Per Page"
                value={newsPerPage}
                onChange={onChangeNewsPerPage}
                variant="outlined"
            >
                <MenuItem value="2">2</MenuItem>
                <MenuItem value="4">4</MenuItem>
                <MenuItem value="6">6</MenuItem>
                <MenuItem value="8">8</MenuItem>
            </TextField>


            <ul className='newsListWrapper'>

                {newsList.length < 1 ?
                    <li className="not_found">Nothing found</li>
                    :
                    newsList.slice(page * newsPerPage - newsPerPage, page * newsPerPage).map((article) => {
                        return (
                            <Article key={Math.random()}
                                     article={article}/>
                        )
                    })
                }


            </ul>
            <div className={classes.root}>
                <Pagination
                    onChange={onChangePage}
                    count={Math.ceil(newsList.length / newsPerPage)}
                    page={page}/>
            </div>
        </>

    )
}

export default React.memo(NewsList)

NewsList.propTypes = {
    newsList: PropTypes.array.isRequired,
};


NewsList.defaultProps = {
    newsList: [],
};
