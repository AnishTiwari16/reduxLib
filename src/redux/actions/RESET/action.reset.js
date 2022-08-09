import {RESET} from '../index.action';

export const resetNumber = () => {
    const newNumber = 0;
    return{
        type: RESET,
        payload : newNumber
    }
}