import {simpleInput} from "../../actions";
import {useContext} from "react";
import FilterContext from "../../../Context/FilterContext";
import { MenuItem,  TextField} from '@material-ui/core/';

function FieldsTopHeadLines() {
    const {dispatch, formData} = useContext(FilterContext);
    return(
        <>

            <TextField
                label="Country"
                select
                value={formData.country}
                id="outlined-select-country"
                onChange={(e) => (dispatch(simpleInput('country', e)))}
                variant="outlined"
            >
                <MenuItem value="us">USA</MenuItem>
                <MenuItem value="ru">Russia</MenuItem>
                <MenuItem value="de">Germany</MenuItem>
            </TextField>


            <TextField
                select
                label="Category"
                value={formData.category}
                onChange={(e) => (dispatch(simpleInput('category', e)))}
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
    )
}


export default FieldsTopHeadLines