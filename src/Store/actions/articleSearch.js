import axios from 'axios';

import * as actionType from './actionTypes';
import apiUrls from '../../Services/apiUrls';

export const inputArticleSearch = (searchQuery) => {
    return {
        type: actionType.ARTICLE_SEARCH_INPUT,
        query: searchQuery
    }
}

const fetchArticlesStart = () => {
    return {
        type: actionType.ARTICLE_SEARCH_START
    }
}

const fetchArticlesSuccess = (fetchedArticles) => {
    return {
        type: actionType.ARTICLE_SEARCH_SUCCESS,
        articles: fetchedArticles
    }
}

const fetchArticlesFailure = () => {
    return {
        type: actionType.ARTICLE_SEARCH_FAILURE
    }
}

export const fetchArticles = (inputQuery) => {
    let apiUrl = apiUrls.articleSearch + inputQuery + '&'+ process.env.REACT_APP_API_KEY;
    return dispatch => {
        dispatch(fetchArticlesStart());
        axios.get(apiUrl)
        .then(response => {
            dispatch(fetchArticlesSuccess(response.data.response.docs));
        })
        .catch(error =>{
            console.log(error);
            dispatch(fetchArticlesFailure());
        })
    }
} 

const pageChangeStart = () => {
    return {
        type: actionType.ARTICLE_CHANGE_PAGE_START
    }
}

const pageChangeSuccess = (selectedPage, articles) => {
    return {
        type: actionType.ARTICLE_CHANGE_PAGE_SUCCESS,
        articles: articles,
        selectedPage: selectedPage
    }
}

const pageChangeFailure = () => {
    return {
        type: actionType.ARTICLE_CHANGE_PAGE_FAILED
    }
}

export const fetchNewPage = (searchQuery, pageNumber) => {
    let apiUrl = apiUrls.articleSearch + searchQuery + '&page=' + pageNumber + '&'+ process.env.REACT_APP_API_KEY;
    
    return dispatch => {
        dispatch(pageChangeStart());
        axios.get(apiUrl)
        .then(response => {
            dispatch(pageChangeSuccess(pageNumber, response.data.response.docs));
        })
        .catch(error =>{
            console.log(error);
            dispatch(pageChangeFailure());
        })
    }
}