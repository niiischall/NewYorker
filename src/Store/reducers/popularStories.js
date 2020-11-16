import * as actionTypes from '../actions/actionTypes';

const initialState = {
    mostViewed: [],
    mostViewedLoader: false
}

const storiesReducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.MOST_POPULAR_START:
            return {
                ...state,
                mostViewedLoader: true
            }
        case actionTypes.MOST_POPULAR_SUCCESS: 
            const updatedStories = action.mostViewed;
            return {
                ...state,
                mostViewed: state.mostViewed.concat(updatedStories),
                mostViewedLoader: false
            }
        case actionTypes.MOST_POPULAR_FAILURE:
            return{
                ...state,
                mostViewedLoader: false
            }
        default: 
            return state;
    }
}

export default storiesReducer;