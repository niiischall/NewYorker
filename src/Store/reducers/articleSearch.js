import * as actionTypes from '../actions/actionTypes';

const initialState = {
    articles: [],
    searchQuery: '',
    articleSearchLoader: false
}

const articlesReducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.ARTICLE_SEARCH_INPUT:
            return {
                ...state,
                searchQuery: action.query,
                articles: []
            }
        case actionTypes.ARTICLE_SEARCH_START:
            return{
                ...state,
                articleSearchLoader: true
            }
        case actionTypes.ARTICLE_SEARCH_SUCCESS:
            return {
                ...state,
                articles: action.articles,
                articleSearchLoader: false
            }
        case actionTypes.ARTICLE_SEARCH_FAILURE:
            return {
                ...state,
                articleSearchLoader: false
            }
        default:
            return state;
    }
}

export default articlesReducer;