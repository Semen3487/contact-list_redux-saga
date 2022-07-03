import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteContactNameAction, selectContactName } from '../../store/actions/toListAction';
import './Item.css';


function Item({contact}) {

  const dispatch = useDispatch();

  const onContactDelete = (e) => {
    e.stopPropagation();
    dispatch(deleteContactNameAction(contact.id));
  }

  const toEditContact = (e) => {
    e.stopPropagation();
    dispatch(selectContactName(contact));
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
