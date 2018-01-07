import React, { Component } from 'react';
import { render } from 'react-dom';
import { Switch } from 'react-router';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Home from './components/Home';
import SearchContainer from './components/SearchContainer';
import CollectionContainer from './components/CollectionContainer';
import NotFound from './components/NotFound';

const routes = [{
  path: '/',
  exact: true,
  main: Home,
  name: 'Home'
},
{
  path: '/Search',
  exact: false,
  main: SearchContainer,
  name: 'Search'
},
{
  path: '/Collection',
  exact: false,
  main: CollectionContainer,
  name: 'Collection'
}];

class Root extends Component {
  render() {
    return (
        <Router>
          <div>
            <Switch>
              {routes.map((route, index) => (
                  <Route
                    key={index}
                    path={route.path}
                    exact={route.exact}
                    component={route.main}
                  />
                ))}
            </Switch>
            <ul>
              {routes.map((route, index) => (
                  <li key={index}><Link to={route.path}>{route.name}</Link></li>
              ))}
            </ul>
          </div>
        </Router>
    );
  }
}

render(<Root />, document.getElementById('app'))