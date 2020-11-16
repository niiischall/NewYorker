import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classes from './Dashboard.css';

import * as actions from '../../../Store/actions/articleSearch';
import Spinner from '../../CommonComponents/Spinner/Spinner';

const Dashboard = (props) => {
    const dispatch = useDispatch();

    const articles    = useSelector(store => store.articleSearch.articles);
    const searchQuery = useSelector(store => store.articleSearch.searchQuery);
    const isLoading   = useSelector(store => store.articleSearch.articleSearchLoader);

    const handleSearchInput = (event) => {
        dispatch(actions.inputArticleSearch(event.target.value));
    }

    const submitSearch = () => {
        dispatch(actions.fetchArticles(searchQuery));
    }

    let content = null;

    if(isLoading)
        content = <Spinner />;

    if(!isLoading && articles.length === 0){
        content = (
            <div 
                className = {classes.contentMain}
                style = {{alignItems: 'center'}}
            >
                <div className= {classes.contentMainHeadline}>
                    <p className = {classes.contentMainHeadlineText}>
                        Search for breaking news from across the world, across the times.
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

    if(!isLoading && articles.length !== 0){
        content = (
            <div className = {classes.contentMain}>
                <div>
                    <p className = {classes.contentHeadingText}>
                        Here are your search results for, “{searchQuery}.”
                    </p>
                </div>
                <div className = {classes.contentMainArticles}>
                    <div className = {classes.articlesHeading}>
                        <p className = {classes.articlesHeadingText}>
                            articles
                        </p>
                    </div>
                    <div className = {classes.articlesColumnHeading}>
                        <span className = {[
                                classes.articlesColumnHeadings,
                                classes.headingDate
                        ].join(' ')}>
                            Published Date
                        </span>
                        <span className = {[
                            classes.articlesColumnHeadings,
                            classes.headingHeadline
                        ].join(' ')}>
                            Headline
                        </span>
                        <span className = {[
                            classes.articlesColumnHeadings,
                            classes.headingSummary
                        ].join(' ')}>
                            Summary
                        </span>
                        <span className = {[
                            classes.articlesColumnHeadings,
                            classes.headingUrl
                        ].join(' ')}>
                            URL
                        </span>
                        <span className = {[
                            classes.articlesColumnHeadings, 
                            classes.headingSource
                        ].join(' ')}>
                            Source
                        </span>
                    </div>
                    {
                        articles.map((article, index) => {

                            let publishedDate = "";
                            let d     = new Date(article.pub_date);
                            let day   = d.getDate();
                            let month = d.getMonth() + 1;
                            let year  = d.getFullYear();
                            if (month.length < 2) 
                                month = '0' + month;
                            if (day.length < 2) 
                                day = '0' + day;
                            publishedDate = [day, month, year].join('-');

                            let classStyling = [classes.articlesColumn];

                            if(index % 2 === 0){
                                classStyling.push(classes.greyed);
                            }

                            let returnedArticle = null;

                            if(index < 5)
                                returnedArticle = (
                                    <div 
                                        className = {classStyling.join(' ')}
                                        key       = {article._id}
                                    >
                                        <p className = {[
                                            classes.articlesColumns,
                                            classes.columnsDate
                                            ].join(' ')}>
                                            {publishedDate}
                                        </p>
                                        <p className = {[
                                            classes.articlesColumns,
                                            classes.columnsHeadline
                                        ].join(' ')}>
                                            {article.headline.main}
                                        </p>
                                        <p className = {[
                                            classes.articlesColumns,
                                            classes.columnsSummary
                                        ].join(' ')}>
                                            {article.abstract.substring(0, 75)}...
                                        </p>
                                        <div className = {[
                                            classes.articlesColumns,
                                            classes.columnsUrl
                                        ].join(' ')}>
                                            <a 
                                                className = {classes.columnsUrlLink} 
                                                href      = {article.web_url}
                                                target    = "_blank"
                                                rel       = "noopener"
                                            >
                                                {article.web_url.substring(0, 45)}...
                                            </a>
                                        </div>                            
                                            <p className = {[
                                                classes.articlesColumns,
                                                classes.columnsSource
                                            ].join(' ')}>
                                                {article.source}
                                            </p>
                                    </div>
                                )
                            return returnedArticle;
                            })  
                        }
                    </div>                        
                    <div className = {classes.contentToggle}>
                        <ul className = {classes.contentToggleList}>
                            <li className = {[
                                classes.contentToggleItem, 
                                classes.selectedItem
                            ].join(' ')}>1</li>
                            <li className = {classes.contentToggleItem}>2</li>
                            <li className = {classes.contentToggleItem}>3</li>
                            <li className = {classes.contentToggleItem}>4</li>
                            <li className = {classes.contentToggleItem}>5</li>
                            <li className = {classes.contentToggleItem}>6</li>
                            <li className = {classes.contentToggleItem}>7</li>
                            <li className = {classes.contentToggleItem}>8</li>
                            <li className = {classes.contentToggleItem}>9</li>
                            <li 
                                className = {classes.contentToggleItem} 
                                style = {{ padding :"2px"}}
                            >10</li>
                        </ul>
                    </div>   
                    <div className = {classes.contentMainGraph}>
                        <div className = {classes.articlesHeading}>
                            <p className = {classes.articlesHeadingText}>
                                NUMBER OF ARTICLES PUBLISHED FOR “Elections”
                            </p>
                        </div>
                    </div>
                </div>
            )
        }
    

    return(
    <div className = {classes.layoutContent}>
            <div className = {classes.contentSearch}>
                <img 
                    src       = "assets/images/magnifying-glass.svg" 
                    className = {classes.searchInputLogo}
                    alt       = "Search"
                />
                <input 
                    placeholder = "What's on your mind?" 
                    type        = "text" 
                    className   = {classes.searchInput}
                    onChange    = {handleSearchInput} 
                    value       = {searchQuery}
                />
                <button 
                    className = {classes.searchButton}
                    onClick   = {submitSearch}
                    style     = {
                        searchQuery 
                        ? {
                            backgroundColor: 'var(--color-white)',
                            color: 'var(--color-item-selected-sidebar)',
                            border: '.2rem solid var(--color-border-sidebar)',
                            boxShadow: '0 0 .5rem 0.05rem var(--color-border-sidebar)'
                          }
                        : null
                    }
                >
                    Search
                </button>
            </div>
            {content}
        </div>
    )
}

export default Dashboard;