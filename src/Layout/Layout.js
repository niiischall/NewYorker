import React from 'react';
import classes from './Layout.css';

import SideDrawer from '../components/CommonComponents/SideDrawer/SideDrawer';

const Layout = (props) => {
    return(
        <div className = {classes.Layout}>
            <SideDrawer showState = {props.showDrawer} toggleSidebar = {props.toggleSidebar} />
            <main 
                style = {{
                    flex: 1, 
                    display: 'flex', 
                    flexDirection: 'column'
                }}
            >
                {props.children}
            </main> 
        </div>
    )
}

export default Layout;