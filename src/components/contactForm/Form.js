import React, { useState } from 'react';
import './Form.css';
import { connect } from 'react-redux';
import {
  addContactName,
  deleteContactName,
  updateContactName
} from '../../store/actions/toListAction';


function Form({
    initFormState,
    addContactName,
    deleteContactName,
    updateContactName
  }) {

  const [contact, setContact] = useState(initFormState);
  // console.log(initFormState)

  function onInputChange(event) {
    setContact({
      ...contact,
      [event.target.name]: event.target.value,
    });
  };
  
  const onSubmitForm = (event) => {
    event.preventDefault();
    if(!contact.id){
        const newContact = {
        id: Date.now(),
        ...contact
      }
      addContactName(newContact);
      setContact(initFormState);
    }else{
      updateContactName({...contact});
    }
    
    
  }

  function toClearField(event) {
    const sibling = event.target.parentNode.firstChild;
    setContact({
      ...contact,
      [sibling.name]: '',
    });
  };

  function toDeleteContact(event) {
    event.preventDefault();
    deleteContactName(contact.id);
    setContact(initFormState);
  };
  
  return (
    <form className='main-inner-form'
      onSubmit={onSubmitForm}
    >
      <div className='form-item'>
        <input type='text'
          name='fName'
          placeholder='First Name'
          value={contact.fName}
          onChange={onInputChange}
        />
        <span className='input-group'
          onClick={toClearField}
        >X</span>
      </div>
      <div className='form-item'>
        <input type='text'
          name='lName'
          placeholder='Last Name'
          value={contact.lName}
          onChange={onInputChange}
        />
        <span className='input-group'
          onClick={toClearField}
        >X</span>
      </div>
      <div className='form-item'>
        <input type='text'
          name='email'
          placeholder='Email'
          value={contact.email}
          onChange={onInputChange}
        />
        <span className='input-group'
          onClick={toClearField}
        >X</span>
      </div>
      <div className='form-item'>
        <input type='text'
          name='phone'
          placeholder='Phone'
          value={contact.phone}
          onChange={onInputChange}
        />
        <span className='input-group'
          onClick={toClearField}
        >X</span>
      </div>

      <button>Save</button>
      {contact.id ? (<button onClick={toDeleteContact} >Delete</button>) : (<span></span>)}

    </form>
  )
};

const mapStateToProps = ({initFormState}) => {
  return {
    initFormState
  }
}

const mapDispatchToProps = {
  addContactName,
  deleteContactName,
  updateContactName
}


export default connect(mapStateToProps, mapDispatchToProps)(Form);
