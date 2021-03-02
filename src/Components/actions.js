import {checkTime} from './appLogic'


export const simpleInput = (payload, e) => {
    return {
        type: 'simpleInput',
        payload,
        value: e.target.value
    }
};

export const dateInput = (payload, e) => {
    return {
        type: 'dateInput',
        payload,
        value: checkTime(e.target.value)
    }
};

