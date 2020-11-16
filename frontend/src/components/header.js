import React from 'react';
import { Link } from 'react-router-dom';

const Header = (props) => {
  return (
    <div className="header">
      <Link className="text-link" to={`/`}>
        <h1>Address Book</h1>
      </Link>
      <Link className="text-link" to={`/`}>
        <h4 className="text-link">ADD A FRIEND</h4>
      </Link>
      <h4
        className="text-link"
        name="fName"
        onClick={props.sort}
        style={
          props.sortBy === 'fName' ? { fontWeight: 700 } : { fontWeight: 300 }
        }
      >
        SORT BY FIRST NAME
      </h4>
      <h4
        className="text-link"
        name="lName"
        onClick={props.sort}
        style={
          props.sortBy === 'lName' ? { fontWeight: 700 } : { fontWeight: 300 }
        }
      >
        SORT BY LAST NAME
      </h4>
      <h4 className="text-link">SEARCH</h4>
      <input className="search-input" type="text" onChange={props.search} />
    </div>
  );
};

export default Header;
