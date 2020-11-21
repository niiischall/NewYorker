import React, { useEffect, useCallback } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import classes from './Analytics.css';
import * as actions from '../../../Store/actions/analytics';

import Spinner from '../../CommonComponents/Spinner/Spinner';

const Analytics = (props) => {

    const dispatch      = useDispatch();
    const searchedQuery = useSelector(store => store.articleSearch.searchQuery); 
    const analytics     = useSelector(store => store.analytics.analytics);
    const isLoading     = useSelector(store => store.analytics.detailedAnalyticsLoader);

    const source   = useSelector(store => store.analytics.analyticsSource);
    const material = useSelector(store => store.analytics.analyticsMaterial);
    const document = useSelector(store => store.analytics.analyticsDocument);

    const fetchAnalytics = useCallback(() => {
        if(searchedQuery && source.length === 0 && material.length === 0 && document.length === 0){
            dispatch(actions.analyticsDetail(searchedQuery, 'source'));
            dispatch(actions.analyticsDetail(searchedQuery, 'news_desk'));
            dispatch(actions.analyticsDetail(searchedQuery, 'document_type'));
        }
    }, [searchedQuery,actions.analyticsDetail])

    useEffect(() => {
        fetchAnalytics();
    }, [analytics]);


    let content = null;

    if(!searchedQuery)
    content = (
        <div 
            className = {classes.contentMain}
            style = {{alignItems: 'center'}}
        >
            <div className= {classes.contentMainHeadline}>
                <p className = {classes.contentMainHeadlineText}>
                    We can't seem to find any searches yet. Check out our <NavLink 
                    to = '/home' style = {{color: 'var( --color-item-selected-sidebar)'}}>'Dashboard.'
                    </NavLink>
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
    );

    if(searchedQuery)
        content = (
            <div style = {{
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-around',
                alignItems: 'center'
            }}>
                <div style = {{display: 'flex', width: '100%'}}>
                    <img 
                        className = {classes.drawerLogo}
                        src       = "assets/images/icons-menu.png" 
                        alt       = "Side Drawer" 
                        onClick   = {props.toggleSidebar}
                    />
                    <p className = {classes.contentHeadingText}>
                    Analytics on the topic of <span className = {classes.Bold}>"{searchedQuery}"</span>, brought to you by <span className = {classes.Bold}>NYTimes.com</span>...
                    </p>
                </div>
            </div>
        )

    let mainContent = null;
    
    if(source.length !== 0 && material.length !== 0 && document.length !== 0)
      mainContent = (
        <div>
            <div style = {{marginBottom: '3rem'}}>
                <div className = {classes.contentMainGraph}>
                    &nbsp;
                </div>
            </div>
            <div style = {{marginBottom: '3rem'}}>
                <div className = {classes.contentMainGraph}>
                    &nbsp;
                </div>
            </div>
            <div style = {{marginBottom: '3rem'}}>
                <div className = {classes.contentMainGraph}>
                    &nbsp;
                </div>               
            </div>
        </div>
    );

    return (
        <div className = {classes.layoutContent}>
            {content}
            {
                isLoading 
                ? <Spinner />
                : mainContent
            }
        </div>
    )
}

export default Analytics;