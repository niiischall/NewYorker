import React from 'react';
import {NavLink} from 'react-router-dom';

import classes from './SideDrawer.css';

const SideDrawer = (props) => {

    let attachedClasses = [classes.layoutSidebar];

    if(props.showState){   
        attachedClasses = [classes.layoutSidebar, classes.Open];
    }    
    else{
        attachedClasses = [classes.layoutSidebar, classes.Close];
    }

    return(
        <div className = {attachedClasses.join(' ')}>
            <div className = {classes.sidebarLogo}>
                <img 
                    src = "assets/images/log-transparent-2x.png" 
                    className = {classes.sidebarLogoImg} 
                    alt = "Logo-transparent"
                />
            </div>
            <div className = {classes.sidebarContent}>
                <ul>
                    <li className = {classes.sidebarItem} onClick = {props.toggleSidebar}>
                        <NavLink 
                            to = "/home"
                            className = {classes.sidebarLink} 
                            activeClassName = {classes.sidebarLinkActive}
                            exact
                        >
                            <img 
                                src = "assets/images/home.svg" 
                                alt = "HOME"
                                className = {classes.Icon}
                            />
                            Dashboard
                        </NavLink>
                    </li>
                    <li className = {classes.sidebarItem} onClick = {props.toggleSidebar}>
                        <NavLink 
                            to = "/articles"
                            className = {classes.sidebarLink} 
                            activeClassName = {classes.sidebarLinkActive}
                        >
                            <img 
                                src = "assets/images/map.svg" 
                                alt = "ARTICLES"
                                className = {classes.Icon}
                            />
                            Articles
                        </NavLink>
                    </li>
                    <li className = {classes.sidebarItem}>
                        <NavLink 
                            to = "/analytics" 
                            className = {classes.sidebarLink}
                            activeClassName = {classes.sidebarLinkActive}
                        >
                            <img 
                                src = "assets/images/key.svg" 
                                alt = "ANALYTICS"
                                className = {classes.Icon}
                            />
                            Analytics
                        </NavLink>
                    </li>
                    <li className = {classes.sidebarItem} onClick = {props.toggleSidebar}>
                        <NavLink 
                            to = "/topstories"
                            className = {classes.sidebarLink} 
                            activeClassName = {classes.sidebarLinkActive}
                        >
                            <img 
                                src = "assets/images/chat.svg" 
                                alt = "TOP STORIES"
                                className = {classes.Icon}
                            />
                                Top Stories
                        </NavLink>
                    </li>
                    <li className = {classes.sidebarItem} onClick = {props.toggleSidebar}>
                        <NavLink 
                            to = "/mostpopular" 
                            className = {classes.sidebarLink}
                            activeClassName = {classes.sidebarLinkActive}
                        >
                            <img 
                                src = "assets/images/star.svg" 
                                alt = "TOP STORIES"
                                className = {classes.Icon}
                            />
                                Most Popular
                        </NavLink>
                    </li>
                </ul>
            </div>
            <footer className = {classes.footer}>
                <p className = {classes.footerText}>
                    &copy; Elevate Labs, 2020.
                </p>
            </footer>
        </div>
    )
}

export default SideDrawer;