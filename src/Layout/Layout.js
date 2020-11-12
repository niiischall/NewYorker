import React from 'react';
import classes from './Layout.css';

import SideDrawer from '../components/CommonComponents/SideDrawer/SideDrawer';

const Layout = (props) => {
    return(
        <div className = {classes.Layout}>
            <SideDrawer/>
            <main style = {{flex: 1}}>
                {props.children}
            </main> 
        </div>
    )
}

export default Layout;