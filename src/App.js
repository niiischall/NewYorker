import React, { Suspense, useState, useEffect }from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Layout        from './Layout/Layout';
import Spinner       from './components/CommonComponents/Spinner/Spinner';
import useDimensions from './Services/Dimensions';

import Articles    from './components/Screens/Articles/Articles';
import Dashboard   from './components/Screens/Dashboard/Dashboard';
import Analytics   from './components/Screens/Analytics/Analytics';
import TopStories  from './components/Screens/TopStories/TopStories';
import MostPopular from './components/Screens/MostPopular/MostPopular';

const App = (props) => {

  const [ showDrawer, setShowDrawer ] = useState(true);
  const { width } = useDimensions();

  const toggleSidebar = () => {
    if(width < 1200)
      setShowDrawer(prevState => !prevState);
  }

  useEffect(() => {
    if(width < 1200)
      setShowDrawer(false);
    else  
      setShowDrawer(true);
  }, [width])

  return (
    <Layout showDrawer = {showDrawer} toggleSidebar = {toggleSidebar}>
      <Suspense fallback = {<Spinner/>}/>
      <Switch>
        <Route 
          path      = "/mostpopular" 
          render    = {(props) => (
            <MostPopular {...props} toggleSidebar = {toggleSidebar} />
          )}
        />
        <Route 
          path = "/topstories" 
          render    = {(props) => (
            <TopStories {...props} toggleSidebar = {toggleSidebar} />
          )}
        />
        <Route 
          path = "/analytics" 
          render = {(props) => (
            <Analytics {...props} toggleSidebar = {toggleSidebar} />
          )}
        />
        <Route 
          path    = "/articles" 
          render  = {(props) => (
            <Articles {...props} toggleSidebar = {toggleSidebar} />
          )}   
        />
        <Route 
          path = "/home" 
          render  = {(props) => (
            <Dashboard {...props} toggleSidebar = {toggleSidebar} />
          )} 
        />
        <Route path = "/" exact>
          <Redirect to = "/home" />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
