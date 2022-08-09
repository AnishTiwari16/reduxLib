import {DECREMENT} from '../index.action';

export const decNumber = (num) => {
    const newNumber = num-1;
    return {
        type: DECREMENT,
        payload: newNumber
    }
}