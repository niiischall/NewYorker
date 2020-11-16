import axios from 'axios';

import apiUrl from '../../Services/apiUrls';
import * as actionTypes from './actionTypes';


const mostPopularStart = () => {
    return {
        type: actionTypes.MOST_POPULAR_START
    }
}

const mostPopularSuccess = (mostViewed) => {
    return {
        type: actionTypes.MOST_POPULAR,
        mostViewed: mostViewed
    }
}

const mostPopularEnd = () => {
    return {
        type: actionTypes.MOST_POPULAR_END
    }
}

export const mostPopular = () => {
    return dispatch => {
        dispatch(mostPopularStart());
        axios.get(apiUrl.mostViewed)
        .then(response => {
            dispatch(mostPopularSuccess(response.data.results));
            dispatch(mostPopularEnd());
        })
        .catch(error =>{
            console.log(error);
            dispatch(mostPopularEnd());
        })
    }
}
