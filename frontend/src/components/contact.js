import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Contact = (props) => {
  const { id } = useParams();
  const [contact, setContact] = useState([]);

  useEffect(() => {
    setContact(props.getContact(id));
  }, [props, id]);

  if (!contact) {
    return null;
  } else {
    return (
      <div className="contact-card--wrapper">
        <h2 className="headline">
          {contact.fName} {contact.lName}
        </h2>
        <div className="contact-card">
          <div className="contact-card--labels">
            <p>Phone:</p>
            <p>Email:</p>
            <p>Address:</p>
          </div>
          <div className="contact-card--info">
            <p>{contact.phone || '-'}</p>
            <p>{contact.email || '-'}</p>
            <p>{contact.address1 || '-'}</p>
            <p>{contact.address2}</p>
            <p>{contact.address3}</p>
          </div>
        </div>
      </div>
    );
  }
};

export default Contact;
