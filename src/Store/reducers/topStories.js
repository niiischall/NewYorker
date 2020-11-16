import * as actionTypes from '../actions/actionTypes';

const initialState = {
    searchCategories: [ 
        {label: "Arts", value: 'arts'},
        {label: "Automobiles", value: 'automobiles'},
        {label: 'Books', value: 'books'},
        {label: 'Business', value: 'business'},
        {label: 'Fashion', value: 'fashion'},
        {label: 'Health', value: 'health'},
        {label: 'Home', value: 'home'},
        {label: 'Insider', value: 'insider'},
        {label: 'Magazine', value: 'magazine'},
        {label: 'Movies', value: 'movies'},
        {label: 'New York Region', value: 'nyregion'},
        {label: 'Obituaries', value: 'obituraies'},
        {label: 'Opinion', value: 'opinion'},
        {label: 'Politics', value: 'politics'},
        {label: 'Real Estate', value: 'realestate'},
        {label: 'Science', value: 'science'},
        {label: 'Sports', value: 'sports'},
        {label: 'Sunday Review', value: 'sundayreview'},
        {label: 'Technology', value: 'technology'},
        {label: 'Theater', value: 'theater'},
        {label: 'T-Magazine', value: 't-magazine'},
        {label: 'Travel', value: 'travel'},
        {label: 'Up Shot', value: 'upshot'},
        {label: 'United States', value: 'us'},
        {label: 'World', value: 'world'}
    ],
    selectedCategory: null,
    topStories: [],
    currentStorySlide: 0,
    topStoriesLoader: false 
}

const storiesReducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.SELECT_TOP_STORIES:
            return {
                ...state,
                selectedCategory: {
                    ...state.selectedCategory,
                    label: action.selectedCategory.label,
                    value: action.selectedCategory.value
                }
            }
        case actionTypes.TOP_STORIES_START:
            return {
                ...state,
                topStoriesLoader: true
            }
        case actionTypes.TOP_STORIES_SUCCESS:
            return {
                ...state,
                topStories: action.topStories,
                topStoriesLoader: false
            }
        case actionTypes.TOP_STORIES_FAILURE:
            return {
                ...state,
                topStoriesLoader: false
            }
        default:
            console.log('Invalid Action Type.');
            return state;
    }
}

export default storiesReducer;