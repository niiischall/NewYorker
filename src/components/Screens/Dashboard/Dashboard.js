import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Chart   from "react-apexcharts";
import classes from './Dashboard.css';

import * as actions          from '../../../Store/actions/articleSearch';
import * as analyticsActions from '../../../Store/actions/analytics';
import Spinner               from '../../CommonComponents/Spinner/Spinner';
import useDimensions         from '../../../Services/Dimensions';

const Dashboard = (props) => {
    const dispatch = useDispatch();
    const { width } = useDimensions();

    const searchQuery  = useSelector(store => store.articleSearch.searchQuery);

    const articles     = useSelector(store => store.articleSearch.articles);
    const pages        = useSelector(store => store.articleSearch.pages);
    const selectedPage = useSelector(store => store.articleSearch.selectedPage);
    const analytics    = useSelector(store => store.analytics.analytics);
    
    const isLoading       = useSelector(store => store.articleSearch.articleSearchLoader);
    const pageLoader      = useSelector(store => store.articleSearch.pageLoader);
    const analyticsLoader = useSelector(store => store.analytics.analyticsLoader);

    const paginationHandler = (page) => {
        dispatch(actions.fetchNewPage(searchQuery, page));
    }

    const handleSearchInput = (event) => {
        dispatch(actions.inputArticleSearch(event.target.value));
    }

    const submitSearch = (event) => {
        event.preventDefault();
        dispatch(actions.fetchArticles(searchQuery));
        dispatch(analyticsActions.analytics(searchQuery));
    }

    let content = null;

    if(isLoading && analyticsLoader)
        content = <Spinner />;

    if(!isLoading && !analyticsLoader && articles.length === 0 && analytics.length === 0){
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

    if(!isLoading && !analyticsLoader && articles.length !== 0 && analytics.length !== 0){
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
                    <div 
                        className = {classes.articlesColumnHeading} 
                    >
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
                    {   !pageLoader && !analyticsLoader 
                        ?articles.map((article, index) => {

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
                                            {article.headline.main.substring(0, 50)}...
                                        </p>
                                        <p className = {[
                                            classes.articlesColumns,
                                            classes.columnsSummary
                                        ].join(' ')}>
                                            {article.abstract.substring(0, 50)}...
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
                        : <Spinner/> 
                    }
                    </div>                        
                    <div className = {classes.contentToggle}>
                        <span className = {classes.contentToggleText}>
                            Check out the articles in detail in the <NavLink to = "/articles" 
                                style = {{color: 'var( --color-item-selected-sidebar)'}}
                            >
                            'Articles'</NavLink> section.
                        </span>
                        <ul className = {classes.contentToggleList}>
                            {
                                pages.map((page) => {
                                    let styles = [classes.contentToggleItem];
                                    if(selectedPage === page)
                                        styles.push(classes.selectedItem)

                                    return(
                                        <li 
                                            className = {styles.join(' ')}
                                            onClick   = {() => paginationHandler(page)}
                                            key       = {page}
                                        >
                                            {page}
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                    <div className = {classes.graphContainer}>
                        <div className = {classes.contentMainGraph}>
                            <div className = {classes.graphsHeading}>
                                <p className = {classes.graphsHeadingText}>
                                    NUMBER OF ARTICLES PUBLISHED FOR “{searchQuery}”
                                </p>
                            </div>
                                <Chart
                                    options = {{
                                        chart: {id: "basic-bar"},
                                        xaxis: {
                                            categories: analytics.map((year) => year.term)
                                        },
                                        dataLabels: {
                                            enabled: false
                                        },
                                        stroke: {
                                            curve: 'straight'
                                        },
                                        responsive: [{
                                            breakpoint: 500,
                                            options: {
                                                chart: {
                                                    width: 300,
                                                    height: 300
                                                }
                                            }
                                        }]
                                    }}
                                    series  = {[{
                                        name: "Number of articles published for " + searchQuery,
                                        data: analytics.map((year) => year.count)
                                    }]}
                                    type   = "area"
                                    width  = {width < 500 ? "360" : "1000"}
                                    height = {width < 500 ? "275" : "350"}
                              />
                            </div>
                        </div>
                        <span className = {classes.contentToggleText}>
                            Check out the analytics in detail in the <NavLink to = "/analytics" 
                                style = {{color: 'var( --color-item-selected-sidebar)'}}
                            >
                            'Analytics'</NavLink> section.
                        </span>
                    </div>   
            )
        }
    

    return(
    <div className = {classes.layoutContent}>
        <div style = {{
            display: 'flex',
            textAlign: 'center'
        }}>
            <img 
                className = {classes.drawerLogo}
                src       = "assets/images/icons-menu.png" 
                alt       = "Side drawer"
                onClick   = {props.toggleSidebar} 
            />
            <div className = {classes.contentSearch}>
                <img 
                    src       = "assets/images/magnifying-glass.svg" 
                    className = {classes.searchInputLogo}
                    alt       = "Search"
                />
                <form 
                    onSubmit  = {submitSearch}
                    className = {classes.formStyling} 
                >
                    <input 
                        placeholder = "What's on your mind?" 
                        type        = "text" 
                        className   = {classes.searchInput}
                        onChange    = {handleSearchInput} 
                        value       = {searchQuery}
                    />
                    <button 
                        className = {classes.searchButton}
                        style     = {
                            searchQuery 
                            ?
                            {
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
                </form>
            </div>
        </div>
        {content}
        </div>
    )
}

export default Dashboard;