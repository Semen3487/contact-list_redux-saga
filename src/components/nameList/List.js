import React, { 
  useEffect, 
} from 'react';
import './List.css';
import { useDispatch, useSelector } from 'react-redux';
import Item from '../nameItem/Item';
import { 
  backToCreateContact,
  deleteContactNameAction,
  getContactsAction,
 } from '../../store/actions/toListAction';
 

function List() {

  const dispatch = useDispatch();

  const contacts = useSelector(state => state.contacts);

  useEffect(() => {
    dispatch(getContactsAction());
  },[dispatch])

  const onDelete = (id) => {
    dispatch(deleteContactNameAction(id));
  };

  const newContact = () => {
    dispatch(backToCreateContact())
  };
  
  return (
    <div className='main-inner-list'>
        <div className='list-name-scroll'>
        {contacts.map((contact) => {
          return (
            <Item 
                  key={contact.id}
                  contact={contact}
                  onDelete={onDelete}
            />
          )
        })}
        </div>
        <button
         onClick={newContact}
          >New</button>
      </div>
  )
}

export default List;
