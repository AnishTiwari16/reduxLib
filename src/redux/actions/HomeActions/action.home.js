import { INCREMENT, DECREMENT, RESET } from '../index.action';

export const incNumber = (num) => {
    const newNumber = num + 1;
    return {
        type: INCREMENT,
        payload: newNumber,
    };
};
export const decNumber = (num) => {
    const newNumber = num - 1;
    return {
        type: DECREMENT,
        payload: newNumber,
    };
};
export const resetNumber = () => {
    const newNumber = 0;
    return {
        type: RESET,
        payload: newNumber,
    };
};
