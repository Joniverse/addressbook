import React from 'react';
import { Link } from 'react-router-dom';

const ContactList = (props) => {
  return (
    <ul className="contact-list">
      {props.contacts.map((contact) => {
        return (
          <li key={contact._id} id={contact._id} className="list-item">
            <Link to={`/contact/${contact._id}`}>
              <i className="fa fa-user"></i>
            </Link>
            <h2>
              {contact.fName} {contact.lName}
            </h2>
            <Link to={`/edit/${contact._id}`}>
              <i className="fa fa-edit"></i>
            </Link>
            <i
              className="fa fa-trash"
              id={contact._id}
              onClick={props.deleteContact}
            ></i>
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;
