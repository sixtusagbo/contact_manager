import React, { Component } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import AddContact from './components/contacts/AddContact';
import Contacts from './components/contacts/Contacts';
import EditContact from './components/contacts/EditContact';
import Header from './components/layout/Header';
import Misc from './components/misc/Misc';
import About from './components/pages/About';
import NotFound from './components/pages/NotFound';

import { Provider } from './context';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider>
        <Router basename={process.env.PUBLIC_URL}>
          <div className="App">
            <Header brandName="Contact Manager" />
            <div className="container">
              <Routes>
                <Route path="/" element={<Contacts />} />
                <Route path="about" element={<About />} />
                <Route path="contact/add" element={<AddContact />} />
                <Route path="contact/edit/:id" element={<EditContact />} />
                <Route path="misc" element={<Misc />} />
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
