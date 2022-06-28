import React from 'react';
import './Form.css';


function Form() {
  return (
    <form className='main-inner-form'
      // onSubmit={onSubmitForm}
    >
      <div className='form-item'>
        <input type='text'
          name='fName'
          placeholder='First Name'
          // value={contact.fName}
          // onChange={onInputChange}
        />
        <span className='input-group'
          // onClick={toClearField}
        >X</span>
      </div>
      <div className='form-item'>
        <input type='text'
          name='lName'
          placeholder='Last Name'
          // value={contact.lName}
          // onChange={onInputChange}
        />
        <span className='input-group'
          // onClick={toClearField}
        >X</span>
      </div>
      <div className='form-item'>
        <input type='text'
          name='email'
          placeholder='Email'
          // value={contact.email}
          // onChange={onInputChange}
        />
        <span className='input-group'
          // onClick={toClearField}
        >X</span>
      </div>
      <div className='form-item'>
        <input type='text'
          name='phone'
          placeholder='Phone'
          // value={contact.phone}
          // onChange={onInputChange}
        />
        <span className='input-group'
          // onClick={toClearField}
        >X</span>
      </div>

      <button>Save</button>
      {/* {contact.id ? (<button onClick={toDeleteContact} >Delete</button>) : (<span></span>)} */}

    </form>
  )
}

export default Form;
