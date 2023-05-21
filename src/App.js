import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import AddContact from './components/contacts/AddContact';
import Contacts from './components/contacts/Contacts';
import EditContact from './components/contacts/EditContact';
import Header from './components/layout/Header';
import About from './components/pages/About';
import NotFound from './components/pages/NotFound';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header brandName="Contact Manager" />
        <div className="container">
          <Routes>
            <Route path="/" element={<Contacts />} />
            <Route path="about" element={<About />} />
            <Route path="contact/add" element={<AddContact />} />
            <Route path="contact/edit/:id" element={<EditContact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
