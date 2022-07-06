import React from 'react';
import { useSelector } from 'react-redux';
import './NumberNames.css';


function NumberNames() {

  const contacts = useSelector(state => state.contacts);

  return (
    <div className='header'>
      <p>
        <span className='header-name'>
          Contact list
        </span>
          contains
        <span className='contains-list'>
          {contacts.length}
        </span>   
          names
      </p>
    </div>
  )
}

export default NumberNames;
