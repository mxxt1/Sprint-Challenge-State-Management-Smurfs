import axios from 'axios';


//needed actions: 
// get and post
// `http://localhost:3333/smurfs`

//action types
//export const ACTION_NAME = 'ACTION_NAME';

export const START_GET = 'START_GET';
export const GET_SUCCESS = 'GET_SUCCESS';
export const GET_FAIL = 'GET_FAIL';

export const START_POST = 'START_POST';
export const POST_SUCCESS = 'POST_SUCCESS';
export const POST_FAIL = 'POST_FAIL';




//action creators

export const getSmurfs = () => dispatch => {
    console.log(dispatch);

};



export const postSmurfs = () => dispatch => {
    console.log(dispatch);

};