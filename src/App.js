import React, { Component } from 'react';
import Header from './components/Header';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Contacts from './components/Contacts';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header brandName="Contact Manager" />
        <div className="container">
          <Contacts />
        </div>
      </div>
    );
  }
}

export default App;
