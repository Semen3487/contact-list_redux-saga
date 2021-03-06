import React, { useState } from 'react';
import './Form.css';
import {
  addContactNameAction,
  deleteContactNameAction,
  updateContactNameAction,
} from '../../store/actions/toListAction';
import { useDispatch } from 'react-redux';


function Form({initFormState}) {

  const [contact, setContact] = useState(initFormState);

  const dispatch = useDispatch();

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
      dispatch(addContactNameAction(newContact));
      setContact(initFormState);
    }else{
      dispatch(updateContactNameAction(contact));
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
    dispatch(deleteContactNameAction(contact.id));
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


export default Form;
