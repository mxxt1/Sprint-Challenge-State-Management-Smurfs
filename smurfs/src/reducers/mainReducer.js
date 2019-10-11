//import actions here from ./actions






const initialState = {
    smurfs: [{
        name: 'Smurf Name',
        age: 1000,
        height: '5cm',
        id: -1
    }],
    isFetching: false,
    isPosting: false
}


export const mainReducer = (state=initialState, action) => {

    switch(action.type){
        default:
            return state;
    }
}


