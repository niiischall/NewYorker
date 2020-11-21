import * as actionTypes from '../actions/actionTypes';

const initialState = {
    analytics: [],
    analyticsLoader: false
}

const analyticsReducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.ANALYTICS_START:
            return {
                ...state,
                analyticsLoader: true
            }
        case actionTypes.ANALYTICS_SUCCESS:
            return {
                ...state,
                analytics: action.analytics.sort((a,b) => new Date(a.term) - new Date(b.term)),
                analyticsLoader: false
            }
        case actionTypes.ANALYTICS_FAILED:
            return {
                ...state,
                analyticsLoader: false
            }
        default:
            return state;
    }
}

export default analyticsReducer;