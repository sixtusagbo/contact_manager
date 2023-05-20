import React, { Component } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import AddContact from './components/contacts/AddContact';
import Contacts from './components/contacts/Contacts';
import Header from './components/layout/Header';
import About from './components/pages/About';

import { Provider } from './context';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NotFound from './components/pages/NotFound';

class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
          <div className="App">
            <Header brandName="Contact Manager" />
            <div className="container">
              <Routes>
                <Route path="/" element={<Contacts />} />
                <Route path="about" element={<About />} />
                <Route path="contact/add" element={<AddContact />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
