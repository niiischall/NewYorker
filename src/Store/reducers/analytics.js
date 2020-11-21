import * as actionTypes from '../actions/actionTypes';

const initialState = {
    analytics: [],
    analyticsSource: [],
    analyticsMaterial: [],
    analyticsDocument: [],
    analyticsLoader: false,
    detailedAnalyticsLoader: false
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
        case actionTypes.ANALYTICS_DETAILS_START:
            return {
                ...state,
                detailedAnalyticsLoader: true
            }
        case actionTypes.ANALYTICS_DETAILS_SUCCESS:
            if(action.field === 'source')
                return {
                    ...state,
                    analyticsSource: action.detailAnalytics,
                    detailedAnalyticsLoader: false
                }
            else if(action.field === 'news_desk')
                return {
                    ...state,
                    analyticsMaterial: action.detailAnalytics,
                    detailedAnalyticsLoader: false
                }
            else if(action.field === 'document_type')
                return {
                    ...state,
                    analyticsDocument: action.detailAnalytics,
                    detailedAnalyticsLoader: false
                }
            break;
        case actionTypes.ANALYTICS_DETAILS_FAILURE:
            return {
                ...state,
                detailedAnalyticsLoader: false
            }
        default:
            return state;
    }
}

export default analyticsReducer;