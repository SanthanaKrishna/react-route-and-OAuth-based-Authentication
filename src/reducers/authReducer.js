import { SIGN_IN, SIGN_OUT } from '../actions/types';



const intialState = {
    isSignedIn: null,
    userIs:null
}

export default (state = intialState, action) => {
    switch (action.type) {
        case SIGN_IN:
            return {
                ...state, 
                isSignedIn: true,
                userId:action.payload
            };
        case SIGN_OUT:
            return {
                ...state,
                isSignedIn: false,
                userId:null
            };
        default:
            return state;
    }
}