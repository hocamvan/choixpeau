import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Result from './Containers/Result'

import { Provider } from 'react-redux'
import { createStore } from 'redux'
//import reducers from './reducers'

const houses = [
  'Serpentard',
  'Griffondor',
  'Serdaigle',
  'Pouffsoufle',
];


const reducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_CHOICE_WITH_MY_INDEX':
      return {
        houses,
        selectedHouse: houses[action.indexSelected]
      };
    default:
      return {
        houses,
        selectedHouse: houses[Math.floor(Math.random() * 4)]
      };
  }
};

const store = createStore(reducer);
class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
          </a>
        </header>
        <Provider store={store}>
          <Result />
        </Provider>
      </div>
    );
  }
}

export default App;
