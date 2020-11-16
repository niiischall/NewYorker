import * as actionTypes from '../actions/actionTypes';

const initialState = {
    mostViewed: [],
    mostViewedLoader: false
}

const storiesReducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.MOST_POPULAR: 
            const updatedStories = action.mostViewed;
            return {
                ...state,
                mostViewed: state.mostViewed.concat(updatedStories)
            }
        case actionTypes.MOST_POPULAR_START:
            return {
                ...state,
                mostViewedLoader: true
            }
        case actionTypes.MOST_POPULAR_END:
            return{
                ...state,
                mostViewedLoader: false
            }
        default: 
            return state;
    }
}

export default storiesReducer;