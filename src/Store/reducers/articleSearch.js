import * as actionTypes from '../actions/actionTypes';

const initialState = {
    articles: [],
    searchQuery: '',
    pages: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    selectedPage: 1,
    pageLoader: false,
    articleSearchLoader: false
}

const articlesReducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.ARTICLE_SEARCH_INPUT:
            return {
                ...state,
                searchQuery: action.query,
                articles: [],
                selectedPage: 1
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
        case actionTypes.ARTICLE_CHANGE_PAGE_START:
            return {
                ...state,
                pageLoader: true
            }
        case actionTypes.ARTICLE_CHANGE_PAGE_FAILED:
            return {
                ...state,
                pageLoader: false
            }
        case actionTypes.ARTICLE_CHANGE_PAGE_SUCCESS:
            return {
                ...state,
                articles: action.articles,
                selectedPage: action.selectedPage,
                pageLoader: false
            }
        default:
            return state;
    }
}

export default articlesReducer;