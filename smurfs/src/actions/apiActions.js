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
    dispatch({type:START_GET});

    axios.get(`http://localhost:3333/smurfs`)
    .then(response => {
        console.log(response);
        dispatch({type:GET_SUCCESS, payload: response.data});
    })
    .catch(error => dispatch({type:GET_FAIL, payload: error}));
};



export const postSmurfs = () => dispatch => {
    console.log(dispatch);

};