import React, { Component } from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import Home from './Home';
import SearchContainer from './SearchContainer';
import CollectionContainer from './CollectionContainer';
import styles from '../styles/Root.css';

const routes = [{
  path: '/',
  exact: true,
  sidebar: 'Home',
  main: Home
},
{
  path: '/Search',
  sidebar: 'Search',
  main: SearchContainer
},
{
  path: '/Collection',
  sidebar: 'Collection',
  main: CollectionContainer
}];

const Root = () => {
  return(
      <Router>
        <div className={styles.wrapper}>
          <div className={styles.navigation}>
            <ul className={styles.list}>
              {routes.map((route, index) => (
                <li className={styles.listItem}><NavLink key={index} to={route.path}>{route.sidebar}</NavLink></li>
              ))}
            </ul>
          </div>
          <div className={styles.content}>
            {routes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                component={route.main}
              />
            ))}
          </div>
        </div>
      </Router>
  );
}

export default Root;
