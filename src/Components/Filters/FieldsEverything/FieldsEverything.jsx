import {dateInput, simpleInput} from "../../actions";
import { MenuItem,  TextField} from '@material-ui/core/';
import FilterContext from "../../../Context/FilterContext";
import {useContext} from "react";




function FieldsEverything() {
    const {formData, dispatch} = useContext(FilterContext);
    return(
        <>

            <TextField
                id="date-from"
                label="Date From"
                type="date"
                value={formData.from}
                onChange={(e) => dispatch(dateInput('from', e))}
                variant="outlined"
                InputLabelProps={{
                    shrink: true,
                }}
            />

            <TextField
                id="date-to"
                label="Date To"
                type="date"
                value={formData.selectDateTo}
                onChange={(e) =>  dispatch(dateInput('to', e))}
                variant="outlined"
                InputLabelProps={{
                    shrink: true,
                }}
            />


            <TextField
                label="Language"
                select
                value={formData.language}
                variant="outlined"
                onChange={(e) => dispatch(simpleInput('language', e)) }
            >
                <MenuItem value="en">English</MenuItem>
                <MenuItem value="ru">Russian</MenuItem>
                <MenuItem value="de">German</MenuItem>

            </TextField>


            <TextField
                select
                label="Sort by"
                value={formData.sortBy}
                variant="outlined"
                onChange={(e) => dispatch(simpleInput('sortBy', e))}
            >
                <MenuItem value="relevancy">Relevancy</MenuItem>
                <MenuItem value="popularity">Popularity</MenuItem>
                <MenuItem value="publishedAt">PublishedAt</MenuItem>

            </TextField>


        </>
    )
}

export default FieldsEverything