import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import axios from 'axios';
import './App.css';

import Header from './components/header';
import Form from './components/form';
import Contact from './components/contact';
import ContactList from './components/contactList';

let sortBy = 'fName';
let searching = false;

function App() {
  const [contacts, setContacts] = useState({ items: [] });
  const [searchItems, setSearchItems] = useState([]);
  const URL = 'https://joniverse-addressbook.herokuapp.com/';

  // GET DATA ATT INITIAL LOAD
  useEffect(() => {
    getData();
  }, []);

  // GET ALL DATA FROM *DATABASE*
  const getData = () => {
    axios
      .get(URL + sortBy)
      .then((result) => {
        setContacts({ items: result.data });
      })
      .catch((err) => console.log(err));
  };

  // GET SINGLE CONTACT FROM *STATE*
  const getContact = (id) => {
    const contact = contacts.items.find((contact) => contact._id === id);
    return contact;
  };

  // ADD NEW OR UPDATE SINGLE CONTACT TO *DATABASE*
  const updateContact = (input) => {
    if (!input._id) {
      axios
        .post(URL + 'add/', input)
        .then(() => {
          getData();
        })
        .catch((err) => console.log(err));
    } else {
      axios
        .post(`${URL}update/${input._id}`, input)
        .then(() => {
          getData();
        })
        .catch((err) => console.log(err));
    }
  };

  // DELETE CONTACT FROM *SERVER*
  const deleteContact = (event) => {
    event.preventDefault();
    axios
      .delete(URL + 'delete/' + event.target.id)
      .then(() => {
        getData();
      })
      .catch((err) => console.log(err));
  };

  // SORT CONTACTS
  const sort = (event) => {
    sortBy = event && event.target.getAttribute('name');
    getData();
  };

  // SEARCH
  const search = (event) => {
    searching = event.target.value ? true : false;
    const items = [...contacts.items];
    let str = event.target.value;

    let searchResults = items.filter(
      (contact) =>
        contact.fName.toUpperCase().startsWith(str.toUpperCase()) ||
        contact.lName.toUpperCase().startsWith(str.toUpperCase())
    );
    setSearchItems(searchResults);
  };

  return (
    <Router>
      <div className="App">
        <div className="bg">
          <Header sort={sort} search={search} sortBy={sortBy} />
          <div className="content">
            <div className="left">
              <Switch>
                <Route exact path="/">
                  <Form updateContact={updateContact} />
                </Route>
                <Route path="/edit/:id">
                  <Form getContact={getContact} updateContact={updateContact} />
                </Route>
                <Route path="/contact/:id">
                  <Contact getContact={getContact} />
                </Route>
              </Switch>
            </div>
            <div className="right">
              <ContactList
                contacts={searching ? searchItems : contacts.items}
                deleteContact={deleteContact}
              />
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
