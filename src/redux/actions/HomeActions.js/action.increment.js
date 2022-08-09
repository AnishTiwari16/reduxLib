import {INCREMENT} from '../index.action';

export const incNumber = (num) => {
    const newNumber = num+1;
    return {
        type: INCREMENT,
        payload: newNumber
    }
}