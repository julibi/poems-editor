import React from 'react';
import { render } from 'react-dom';
// import { Routes } from '../assets/Routes';
import Header from './Header';

const App = (props) => {
    return (
      <div className="App">
        <Header />
        <main>{props.children}</main>
      </div>
    );
};


export default App;
