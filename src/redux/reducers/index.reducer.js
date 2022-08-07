// how to do it
//it takes two args => curr state and action and then it will return the new state

const initialState = 0;

const changeNumber = (state = initialState, action) => {
    switch(action.type){
        case "INCREMENT" : return state+1;
        case "DECREMENT" : return state-1;
        default : return state;
    }
}
export default changeNumber;

