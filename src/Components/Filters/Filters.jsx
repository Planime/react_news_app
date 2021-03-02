import React from "react"
import {makeStyles} from '@material-ui/core/styles';
import {simpleInput, dateInput} from '../actions'

import {InputLabel, Select, MenuItem, FormControl, TextField, Button} from '@material-ui/core/';

const useStyles = makeStyles({
    input: {
        margin: '20px auto',
        width: '30%',
    },
    btn: {
        gridColumn: '2/4',
        gridRow: '4/5'
    }
});



const apiKey = "apiKey=0ec2062ccddc4214aac99c27c8ee6d0a";


function createConfigTopHeadlines({country, category, q}) {

    return {
        country,
        category,
        q
    };
}


function createConfigEverything(props) {
    return {
        q: props.search,
        "from": props.selectDateFrom,
        "to": props.selectDateTo,
        language: props.selectLanguage,
        sortBy: props.selectSortBy
    }
}

function createConfigUrl(config) {
    return Object.entries(config)
        .filter(obj => obj[1].length >= 1)
        .map(obj => obj.join("="))
        .join("&")
}


function Filters(props) {
    const classes = useStyles();
    const configTopHeadlines = createConfigTopHeadlines(props.formData);
    const configEverything = createConfigEverything(props.formData);



    // function onChangeCategory(e) {
    //     props.setSelectCategory(e.target.value)
    // }
    //
    //
    // function onChangeSelectSortBy(e) {
    //     props.setSelectSortBy(e.target.value)
    // }


    function onSubmitHandler(e) {
        e.preventDefault();

        if (props.selectedEndpoint === "everything") {


            fetch(`https://newsapi.org/v2/everything?${createConfigUrl(configEverything)}&${apiKey}`)
                .then(res => res.json())
                .then(res => props.setNewsList(res.articles))

        }
        else {

            let urlTopHeadlines = `https://newsapi.org/v2/top-headlines?${createConfigUrl(configTopHeadlines)}&${apiKey}`;

            fetch(urlTopHeadlines)
                .then(res => res.json())
                .then(res => props.setNewsList(res.articles))
        }
    }

    return (
        <FormControl>

            <TextField
                className={classes.input}
                id="outlined-select-currency"
                select
                label="Hot topics"
                value={props.formData.selectedEndpoint}
                onChange={(e) => props.dispatch(simpleInput('selectedEndpoint', e))}
                variant="outlined"
            >
                <MenuItem value="top-headlines">Top Headlines</MenuItem>
                <MenuItem value="everything">Everything</MenuItem>
            </TextField>


            <div className="filters_wrapper">

                <TextField
                    required={props.selectedEndpoint === "everything"}
                    id="search-field"
                    className="search_input"
                    type="text"
                    variant="outlined"
                    label="Search"
                    onChange={(e) => props.dispatch(simpleInput('q', e))}
                    value={props.formData.q}

                />

                {props.formData.selectedEndpoint === "top-headlines" ?

                    <>


                        <TextField
                            label="Country"
                            select
                            value={props.formData.country}
                            id="outlined-select-country"
                            onChange={(e) => (props.dispatch(simpleInput('country', e)))}
                            variant="outlined"
                        >
                            <MenuItem value="us">USA</MenuItem>
                            <MenuItem value="ru">Russia</MenuItem>
                            <MenuItem value="de">Germany</MenuItem>
                        </TextField>


                        <TextField
                            select
                            label="Category"
                            value={props.formData.category}
                            onChange={(e) => (props.dispatch(simpleInput('category', e)))}
                            id="outlined-select-category"
                            variant="outlined"
                        >
                            <MenuItem value="business">Business</MenuItem>
                            <MenuItem value="entertainment">Entertainment</MenuItem>
                            <MenuItem value="general">General</MenuItem>
                            <MenuItem value="health">Health</MenuItem>
                            <MenuItem value="science">Science</MenuItem>
                            <MenuItem value="sports">Sports</MenuItem>
                            <MenuItem value="technology">Technology</MenuItem>
                        </TextField>


                    </>


                    :

                    <>


                        <TextField
                            id="date-from"
                            label="Date From"
                            type="date"
                            value={props.formData.from}
                            onChange={(e) => props.dispatch(dateInput('from', e))}
                            variant="outlined"
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />

                        <TextField
                            id="date-to"
                            label="Date To"
                            type="date"
                            value={props.formData.selectDateTo}
                            onChange={(e) =>  props.dispatch(dateInput('to', e))}
                            variant="outlined"
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />


                        <TextField
                            label="Language"
                            select
                            value={props.formData.language}
                            variant="outlined"
                            onChange={(e) => props.dispatch(simpleInput('language', e)) }
                        >
                            <MenuItem value="en">English</MenuItem>
                            <MenuItem value="ru">Russian</MenuItem>
                            <MenuItem value="de">German</MenuItem>

                        </TextField>


                        <TextField
                            select
                            label="Sort by"
                            value={props.formData.sortBy}
                            variant="outlined"
                            onChange={(e) => props.dispatch(simpleInput('sortBy', e))}
                        >
                            <MenuItem value="relevancy">Relevancy</MenuItem>
                            <MenuItem value="popularity">Popularity</MenuItem>
                            <MenuItem value="publishedAt">PublishedAt</MenuItem>

                        </TextField>


                    </>
                }

                <Button
                    variant="contained"
                    onClick={onSubmitHandler}
                    color="secondary">
                    Search
                </Button>


            </div>
        </FormControl>
    )
}

export default Filters


