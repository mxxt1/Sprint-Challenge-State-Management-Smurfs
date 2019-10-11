//import actions here from ./actions
import {
    START_GET,
    GET_SUCCESS,
    GET_FAIL,
    START_POST,
    POST_FAIL,
    POST_SUCCESS
 } from '../actions';





const initialState = {
    smurfs: [{
        name: 'Smurf Name',
        age: 1000,
        height: '5cm',
        id: -1
    }],
    isFetching: false,
    isPosting: false,
    getError: '',
    postError:''
}


export const mainReducer = (state=initialState, action) => {

    switch(action.type){
        case START_GET:
            return {
                ...state,
                isFetching: true
            };
        case GET_SUCCESS:
            return {
                ...state,
                isFetching: false,
                smurfs: [...state.smurfs, ...action.payload]
            };
        case GET_FAIL:
            return{
                ...state,
                isFetching: false,
                getError: action.payload
            };
        case START_POST:
            return{
                ...state,
                isPosting: true
            };
        case POST_SUCCESS:
            return{
                ...state,
                isPosting:false
            };
         case POST_FAIL:
             return {
                 ...state,
                 isPosting: false,
                 postError: action.payload
             }   
        default:
            return state;
    }
}


