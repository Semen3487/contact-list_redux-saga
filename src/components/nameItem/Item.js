import React from 'react';
import './Item.css';


function Item({contact, onDelete, onEdit}) {

  const onContactDelete = (e) => {
    e.stopPropagation();
    onDelete(contact.id);
  }

  const toEditContact = () => {
    onEdit(contact);
  }
  

  return (
    <div className='list-item' 
           onDoubleClick={toEditContact}
            >
        <span className='list-group-name'>
          {contact.fName} {contact.lName}
        </span>
        <span className='list-group-delete'
              onClick={onContactDelete}
               >X</span>
    </div>
  )
}

export default Item;
