import React from 'react';
import './List.css';
import { connect } from 'react-redux';
import Item from '../nameItem/Item';
import { 
  deleteContactName,
  backToCreateContact,
  selectContactName,
 } from '../../store/actions/toListAction';

function List({
  contacts, 
  deleteContactName, 
  backToCreateContact,
  selectContactName
}) {

  // function toCreateContact() {
  //   setFormState(initFormState);
  // };

  // const onEdit = (contact.id) => {
    
  // }
  

  const onDelete = (id) => {
    deleteContactName(id);
  }
  
  return (
    <div className='main-inner-list'>
        <div className='list-name-scroll'>
        {contacts.map((contact) => {
          return (
            <Item 
                  key={contact.id}
                  contact={contact}
                  onDelete={onDelete}
                  // onEdit={onSelect}
            />
          )
        })}
        </div>
        <button
         onClick={backToCreateContact}
          >New</button>
      </div>
  )
}

const mapStateToProps = ({contacts}) => {
  return {contacts}
}

const mapDispatchToProps = {
  deleteContactName,
  backToCreateContact,
  selectContactName
}


export default connect(mapStateToProps, mapDispatchToProps)(List);
