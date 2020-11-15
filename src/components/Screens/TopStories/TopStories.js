import React, { useState, useEffect } from 'react';
import Carousel from "react-multi-carousel";
import Select from 'react-select';
import axios from 'axios';

import "react-multi-carousel/lib/styles.css";
import classes from './TopStories.css';

import Spinner from '../../CommonComponents/Spinner/Spinner';

const TopStories = React.memo((props) => {
    const categories = [
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
    ]

    const colourStyles = {
        control: styles => ({...styles, padding: '.85rem'}),
        placeholder: styles => ({ 
            ...styles, 
            fontSize: '2rem',
            color: 'var(--color-border-sidebar)',
            letterSpacing: '0.05rem'
        }),
        option:  styles => ({...styles, color: 'var(--color-item-selected-sidebar)'})
    }

    const [ selectedCategory, setSelectedCategory ] = useState(null);
    const [ stories, setStories ]                   = useState([]);
    const [ isLoading, setLoading ]                 = useState(false);

    const handleSelectedCategory = (event) => {
        setSelectedCategory(event);
    }

    const fetchStories = () => {
        setLoading(true);
    }

    let content = null;

    if(isLoading){
        content = <Spinner />
    }

    if(stories.length === 0 && !isLoading){
        content = (
            <div 
                className = {classes.contentMain}
                style = {{alignItems: 'center'}}
            >
                <div className= {classes.contentMainHeadline}>
                    <p className = {classes.contentMainHeadlineText}>
                        Search for top stories across different sections on <span style = {{color: 'var(--color-item-sidebar)'}}>NYTimes.com</span>...
                    </p>
                </div>
                <div className = {classes.contentMainPlaceholder}>
                    <img 
                        src       = "assets/images/undraw-treasure.svg" 
                        className = {classes.contentPlaceholderImg}
                        alt       = "Placeholder Logo"
                    />
                </div>
            </div>
        )
    }

    if(stories.length > 0 && !isLoading){
        content = null;
    }

    return (
        <div className = {classes.layoutContent}>
            <div className = {classes.contentSearch}>
                <Select
                    onChange     = {handleSelectedCategory}
                    value        = {selectedCategory}
                    isSearchable = {true}
                    placeholder  = {"Select a Category"}
                    name         = {'category'}
                    options      = {categories}
                    className    = {classes.searchInput} 
                    styles       = {colourStyles}
                />
                <button 
                    className = {classes.searchButton}
                    onClick   = {fetchStories}
                >
                    Search
                </button>
            </div>
            {content}
        </div>
    )
});

export default TopStories;