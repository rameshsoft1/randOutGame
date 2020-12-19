import * as actionTypes from '../actions/actionTypes';

const initialState = {
   
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GOT_ALL_ARTICLES:
            return {
                ...state,
               
            };
        case actionTypes.GOT_MY_ARTICLES: {
            return {
                ...state,
             
            }
        }
        case actionTypes.GOT_SINGLE_ARTICLE:
            return {
                ...state,
                
            };
        default:
            return state;
    }
};

export default reducer;
