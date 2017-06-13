import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

// Layouts
import MainLayout from './components/layouts/mainLayout';
import SearchLayoutContainer from './components/containers/searchLayoutContainer';

// Pages
import Home from './components/home';
import ProductListContainer from './components/containers/productListContainer';
import ProductProfileContainer from './components/containers/productProfileContainer';


export default (
  <Router history={browserHistory}>
    <Route component={MainLayout}>
      <Route path="/" component={Home} />

        <Route path="products">
          <Route component={SearchLayoutContainer}>
            <IndexRoute component={ProductListContainer} />
          </Route>
          <Route path=":productID" component={ProductProfileContainer} />
        </Route>

    </Route>
  </Router>
);
