import * as actionTypes from './actionTypes';
import axios from 'axios';
import apiUrls from '../../Services/apiUrls';

const analyticsStart = () => {
    return {
        type: actionTypes.ANALYTICS_START
    }
}

const analyticsSuccess = (fetchedAnalytics) => {
    return {
        type: actionTypes.ANALYTICS_SUCCESS,
        analytics: fetchedAnalytics
    }
}

const analyticsFailure = () => {
    return {
        type: actionTypes.ANALYTICS_FAILED
    }
}

export const analytics = (inputQuery) => {
    let apiUrl = apiUrls.articleSearch + inputQuery + '&facet_fields=pub_year&facet=true&begin_date=2010101&end_date=20201231&sort=newest&' + process.env.REACT_APP_API_KEY;

    return dispatch => {
        dispatch(analyticsStart());
        axios.get(apiUrl)
        .then(response => {
            dispatch(analyticsSuccess(response.data.response.facets.pub_year.terms));
        })
        .catch(error =>{
            dispatch(analyticsFailure(error));
        })
    }

}