import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const empty = {};
const Form = (props) => {
  let { id } = useParams();

  const [input, setInput] = useState({});

  const contact = id ? props.getContact(id) : empty;

  useEffect(() => {
    setInput(contact);
  }, [contact]);

  const handleChange = (event) => {
    let value = event.target.value;
    let name = event.target.name;

    setInput((prev) => {
      return { ...prev, [name]: value };
    });
  };

  if (!input) {
    return <div />;
  } else {
    return (
      <div className="form-wrapper">
        <h2 className="headline">{id ? 'Make a change' : 'Add a friend'}</h2>
        <form className="input-form">
          <div className="input-item">
            <label>First name</label>
            <br />
            <input
              type="text"
              value={input.fName || ''}
              name="fName"
              onChange={handleChange}
              autoComplete="off"
            />
          </div>
          <div className="input-item">
            <label>Last name</label>
            <br />
            <input
              type="text"
              value={input.lName || ''}
              name="lName"
              onChange={handleChange}
              autoComplete="off"
            />
          </div>
          <div className="input-item">
            <label>Phone</label>
            <br />
            <input
              type="text"
              value={input.phone || ''}
              name="phone"
              onChange={handleChange}
              autoComplete="off"
            />
          </div>
          <div className="input-item">
            <label>Email</label>
            <br />
            <input
              type="text"
              value={input.email || ''}
              name="email"
              onChange={handleChange}
              autoComplete="off"
            />
          </div>
          <div className="input-item">
            <label>Address</label>
            <br />
            <input
              type="text"
              value={input.address1 || ''}
              name="address1"
              onChange={handleChange}
              autoComplete="off"
            />
            <br />
            <input
              type="text"
              value={input.address2 || ''}
              name="address2"
              onChange={handleChange}
              autoComplete="off"
            />
            <br />
            <input
              type="text"
              value={input.address3 || ''}
              name="address3"
              onChange={handleChange}
              autoComplete="off"
            />
            <br />
          </div>

          <Link
            to="/"
            className="btn"
            onClick={() => {
              setInput({});
              props.updateContact(input);
            }}
          >
            SAVE
          </Link>
        </form>
      </div>
    );
  }
};

export default Form;
