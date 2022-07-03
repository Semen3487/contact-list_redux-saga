import React from 'react';
import './NumberNames.css';

function NumberNames({number}) {
  return (
    <div className='header'>
      <p>
        <span className='header-name'>
          Contact list
        </span>
          contains
        <span className='contains-list'>
          {number}
        </span>   
          names
      </p>
    </div>
  )
}

export default NumberNames;
