

function reducer(state, action) {
    switch (action.type) {
        case 'simpleInput':
            return {
                ...state,
                [action.payload]: action.value
            };
        case 'dateInput':
            return {
                ...state,
                [action.payload]: action.value
            }
    }

}


export default reducer