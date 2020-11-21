import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import classes from './Analytics.css';
import * as actions from '../../../Store/actions/analytics';

const Analytics = (props) => {

    const dispatch      = useDispatch();
    const searchedQuery = useSelector(store => store.articleSearch.searchQuery); 

    useEffect(() => {
        if(searchedQuery){
            dispatch(actions.analytics(searchedQuery));
        }
    }, [searchedQuery]);

    let content = (
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
                justifyContent: 'flex-start',
                alignItems: 'center'
            }}>
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
        )

    return (
        <div className = {classes.layoutContent}>
            {content}
        </div>
    )
}

export default Analytics;