import React, { Component } from 'react';
import { render } from 'react-dom';
import Root from './components/Root';

class App extends Component {
  render() {
    return (
      <div>
        <Root />
      </div>
    );
  }
}

render(<App />, document.getElementById('app'))