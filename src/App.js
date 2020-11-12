import React, { Suspense }from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Layout    from './Layout/Layout';
import Spinner   from './components/CommonComponents/Spinner/Spinner';

import Articles    from './components/Screens/Articles/Articles';
import Dashboard   from './components/Screens/Dashboard/Dashboard';
import Analytics   from './components/Screens/Analytics/Analytics';
import TopStories  from './components/Screens/TopStories/TopStories';
import MostPopular from './components/Screens/MostPopular/MostPopular';

const App = () => {
  return (
    <Layout>
      <Suspense fallback = {<Spinner/>}/>
      <Switch>
        <Route path = "/mostpopular" component = {MostPopular} />
        <Route path = "/topstories" component = {TopStories} />
        <Route path = "/analytics" component = {Analytics} />
        <Route path = "/articles" component = {Articles} />
        <Route path = "/home" component = {Dashboard} />
        <Route path = "/" exact>
          <Redirect to = "/home" />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
