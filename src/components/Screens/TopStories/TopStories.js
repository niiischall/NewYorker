import React, { useState, useEffect } from 'react';
import Carousel from "react-multi-carousel";
import Select from 'react-select';
import "react-multi-carousel/lib/styles.css";

import classes from './TopStories.css';

const TopStories = (props) => {
    const categories = [,
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

    const [ selectedCategory, setSelectedCategory ] = useState(null);

    const handleSelectedCategory = (event) => {
        setSelectedCategory(event);
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
                    className   = {classes.searchInput} 
                />
                <button className = {classes.searchButton}>
                    Search
                </button>
            </div>
        </div>
    )
}

export default TopStories;