import React from "react"
import {makeStyles} from '@material-ui/core/styles';

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


function createConfigTopHeadlines(props) {
    return {
        country: props.selectCountry,
        category: props.selectCategory,
        q: props.search
    };
}

function timeConvert(n) {
    let today = n ? new Date(n) : new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = today.getFullYear();
    return yyyy + '-' + mm + '-' + dd;
}

function checkTime(d) {
    let minDate = new Date().getTime() - 2419200000;
    if (new Date(d).getTime() < minDate) {
        return timeConvert()
    } else {
        return timeConvert(new Date(d).getTime())
    }
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
    const configTopHeadlines = createConfigTopHeadlines(props);
    const configEverything = createConfigEverything(props);

    function onChangeHotTopics(e) {
        props.setSelectedEndpoint(e.target.value)
    }

    function onChangeCountry(e) {
        props.setSelectCountry(e.target.value)
    }

    function onChangeCategory(e) {
        props.setSelectCategory(e.target.value)
    }

    function onChangeSelectLanguage(e) {
        props.setSelectLanguage(e.target.value)
    }

    function onChangeSelectSortBy(e) {
        props.setSelectSortBy(e.target.value)
    }

    function onChangeSearch(e) {
        props.setSearch(e.target.value)
    }

    function onChangeDateFrom(e) {
        props.setSelectDateFrom(checkTime(e.target.value))
    }

    function onChangeDateTo(e) {
        props.setSelectDateTo(checkTime(e.target.value))
    }

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
                value={props.selectedEndpoint}
                onChange={onChangeHotTopics}
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
                    onChange={onChangeSearch}
                    value={props.search}

                />

                {props.selectedEndpoint === "top-headlines" ?

                    <>


                        <TextField
                            label="Country"
                            select
                            value={props.selectCountry}
                            id="outlined-select-country"
                            onChange={onChangeCountry}
                            variant="outlined"
                        >
                            <MenuItem value="us">USA</MenuItem>
                            <MenuItem value="ru">Russia</MenuItem>
                            <MenuItem value="de">Germany</MenuItem>
                        </TextField>


                        <TextField
                            select
                            label="Category"
                            value={props.selectCategory}
                            onChange={onChangeCategory}
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
                            value={props.selectDateFrom}
                            onChange={onChangeDateFrom}
                            variant="outlined"
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />

                        <TextField
                            id="date-to"
                            label="Date To"
                            type="date"
                            value={props.selectDateTo}
                            onChange={onChangeDateTo}
                            variant="outlined"
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />


                        <TextField
                            label="Language"
                            select
                            value={props.selectLanguage}
                            variant="outlined"
                            onChange={onChangeSelectLanguage}
                        >
                            <MenuItem value="en">English</MenuItem>
                            <MenuItem value="ru">Russian</MenuItem>
                            <MenuItem value="de">German</MenuItem>

                        </TextField>


                        <TextField
                            select
                            label="Sort by"
                            value={props.selectSortBy}
                            variant="outlined"
                            onChange={onChangeSelectSortBy}
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


