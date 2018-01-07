import React, { Component } from 'react';
import { render } from 'react-dom';
import { Switch } from 'react-router';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from './components/App';
import Home from './components/Home';
import SearchContainer from './components/SearchContainer';
import CollectionContainer from './components/CollectionContainer';
import NotFound from './components/NotFound';

const routes = [{
  path: '/',
  exact: true,
  main: Home
},
{
  path: '/search',
  exact: false,
  main: SearchContainer
},
{
  path: '/collection',
  exact: false,
  main: CollectionContainer
}];

class Root extends Component {
  render() {
    return (
      <App>
        <Router>
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
        </Router>
      </App>
    );
  }
}

render(<Root />, document.getElementById('app'))