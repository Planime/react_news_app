import React, {useContext} from "react"
import {makeStyles} from '@material-ui/core/styles';
import {simpleInput, dateInput} from '../actions';
import useSubmit from "./useSubmit/useSubmit";
import FieldsEverything from "./FieldsEverything/FieldsEverything"
import FieldsTopHeadLines from "./FieldsTopHeadLines/FieldsTopHeadLines"
import PropTypes from 'prop-types';
import FilterContext from '../../Context/FilterContext';

import { MenuItem,  TextField} from '@material-ui/core/';

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


function Filters() {
    const classes = useStyles();
    const {formData, setNewsList, dispatch} = useContext(FilterContext) ;

    const onSubmitHandler = useSubmit(formData, setNewsList);

    return (
        <form
            onSubmit={onSubmitHandler}
        >

            <TextField
                className={classes.input}
                id="outlined-select-currency"
                select
                label="Hot topics"
                value={formData.selectedEndpoint}
                onChange={(e) => dispatch(simpleInput('selectedEndpoint', e))}
                variant="outlined"
            >
                <MenuItem value="top-headlines">Top Headlines</MenuItem>
                <MenuItem value="everything">Everything</MenuItem>
            </TextField>


            <div className="filters_wrapper">

                <TextField
                    required={formData.selectedEndpoint === "everything"}
                    id="search-field"
                    className="search_input"
                    type="text"
                    variant="outlined"
                    label="Search"
                    onChange={(e) => dispatch(simpleInput('q', e))}
                    value={formData.q}

                />

                {formData.selectedEndpoint === "top-headlines" ?

                    <FieldsTopHeadLines />


                    :

                    <FieldsEverything />
                }

                <button
                    className="btn_submit"
                    >
                    Search
                </button>
            </div>
        </form>
    )
}

export default Filters


Filters.propTypes = {
    formData: PropTypes.object.isRequired,
    setNewsList: PropTypes.func,
    dispatch: PropTypes.func

};

Filters.defaultProps = {
    formData: {
        selectedEndpoint: 'top-headlines',
        q: '',
        from: '',
        to: '',
        language: 'en',
        country: "us",
        category: "health",
        sortBy: "relevancy"
    },
};
