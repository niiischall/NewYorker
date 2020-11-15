import React, { useState, useEffect, useRef } from 'react';
import Carousel from "react-multi-carousel";
import Select from 'react-select';
import axios from 'axios';
import "react-multi-carousel/lib/styles.css";

import classes from './TopStories.css';
import apiUrls from '../../../Services/apiUrls';

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
    const [ currentSlide, setCurrentSlide ]         = useState(0);

    const carouselRef = useRef();
        
    const handleSelectedCategory = (event) => {
        setSelectedCategory(event);
    }

    const fetchStories = () => {
        setLoading(true);
        const apiURL = apiUrls.topStories + selectedCategory.value + '.json?' + process.env.REACT_APP_API_KEY;
        axios.get(apiURL)
            .then((response) => {
                setStories(response.data.results);
                setCurrentSlide(0);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setLoading(false); 
        })
    }

    useEffect(() => {
        if(selectedCategory)
            fetchStories();
    }, [selectedCategory]);
    
    const handleKeyDown = (arrowType) => {
        if(arrowType === "LEFT"){
            carouselRef.current.previous();
            setCurrentSlide(prevCount => prevCount-1);
        }
        else if(arrowType === "RIGHT"){
            carouselRef.current.next();
            setCurrentSlide(prevCount => prevCount+1);
        }
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
                        Search for top stories across different sections currently on <span style = {{color: 'var(--color-item-sidebar)'}}>NYTimes.com</span>
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
        content = (
        <div>
            <p className = {classes.contentHeadingText}>
                The top stories in <span className = {classes.LightBold}>"{selectedCategory.label}"</span> on <span className = {classes.Bold}>NYTimes.com</span> currently...
            </p>
            <div style = {{
                display: 'flex',
                justifyContent: 'space-around',
                alignItems: 'center'
            }}>
                <div 
                    className = {classes.IconContainer}
                    style = {
                        currentSlide !== 0
                        ? {backgroundColor: 'var(--color-item-selected-sidebar)'}
                        : {backgroundColor: 'var(--color-border-sidebar)'}
                    }
                >
                    <img 
                        src       = "assets/images/arrow_back.svg"
                        alt       = "PREV"
                        style     = {{
                            marginLeft: '12.5px',
                            width: '1.5rem',
                            height: '1.5rem'
                        }}
                        className = {classes.Icon}
                        onClick = {() => handleKeyDown('LEFT')}
                    />
                </div>
                <Carousel 
                    responsive = {
                    {
                        superLargeDesktop: {
                            breakpoint: { max: 4000, min: 3000 },
                            items: 1
                        },
                        desktop: {
                            breakpoint: { max: 3000, min: 1024 },
                            items: 1
                        },
                        tablet: {
                            breakpoint: { max: 1024, min: 464 },
                            items: 1
                        },
                        mobile: {
                            breakpoint: { max: 464, min: 0 },
                            items: 1
                        }
                    }}
                    arrows={false}
                    keyBoardControl={true}
                    containerClass= {classes.CarouselContainer}
                    dotListClass={classes.CarouselList}
                    itemClass= {classes.CarouselItem}
                    ref = {carouselRef}
                    >
                    {
                    stories.map((story) => {
                        let imageURL =  "assets/images/logo-placeholder.png";
                        if(story.multimedia && story.multimedia.length > 0 && story.multimedia[2].url)
                            imageURL = story.multimedia[2].url;
                    
                        return(
                        <div 
                            className = {classes.contentMainArticles}
                            key       = {story.title}
                        >
                            <div className = {classes.imageContainer}>
                                <img 
                                    src = {imageURL}
                                    alt = "STORY"
                                    className = {classes.image}
                                />
                            </div>
                            <div className = {classes.contentContainer}>
                                <span className = {classes.title}>
                                    {story.title}
                                </span>
                                <span className = {classes.ByLine}>
                                    {story.byline}
                                </span>
                                <span className = {classes.abstract}>
                                    {story.abstract}
                                </span>
                                <a 
                                    href = {story.url}
                                    className = {classes.link}
                                    target    = "_blank"
                                    rel       = "noopener"
                                >
                                    Read More     
                                </a>
                            </div>
                        </div>
                        )
                    })
                }
                </Carousel>
                <div 
                    className = {classes.IconContainer}
                    style = {
                        currentSlide < stories.length 
                        ? {backgroundColor: 'var(--color-item-selected-sidebar)'}
                        : {backgroundColor: 'var(--color-border-sidebar)'}
                    }
                >
                    <img 
                        src       = "assets/images/chevron-right.svg"
                        alt       = "NEXT"
                        className = {classes.Icon}
                        onClick   = {() => handleKeyDown('RIGHT')}
                    />
                </div>
            </div>
        </div>
    )}

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
            </div>
            {content}
        </div>
    )
});

export default TopStories;