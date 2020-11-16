import axios           from "axios";

import * as actionTypes from './actionTypes';
import apiUrls from '../../Services/apiUrls';

export const selectCategory = (selectedCategory) => {
    return {
        type: actionTypes.SELECT_TOP_STORIES,
        selectedCategory: selectedCategory
    }
}

const fetchStoriesStart = () => {
    return {
        type: actionTypes.TOP_STORIES_START
    }
}

const fetchStoriesSuccess = (topStories) => {
    return {
        type: actionTypes.TOP_STORIES_SUCCESS,
        topStories: topStories
    }
}

const fetchStoriesFailure = () => {
    return {
        type: actionTypes.TOP_STORIES_FAILURE
    }
}

export const fetchStories = (selectedCategory) => {
    const apiURL = apiUrls.topStories + selectedCategory.value + '.json?' + process.env.REACT_APP_API_KEY;
    
    return dispatch => {
        dispatch(fetchStoriesStart());
        axios.get(apiURL)
        .then((response) => {
            dispatch(fetchStoriesSuccess(response.data.results));
        })
        .catch((error) => {
            console.log(error);
            dispatch(fetchStoriesFailure());
        })
    }
}