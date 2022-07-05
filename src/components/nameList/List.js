import React, { 
  useEffect, 
} from 'react';
import './List.css';
import { useDispatch, useSelector } from 'react-redux';
import Item from '../nameItem/Item';
import { 
  // deleteContactNameAction,
  backToCreateContact, getContactsAction,
  // selectContactName,
 } from '../../store/actions/toListAction';
 

function List() {

  const dispatch = useDispatch();

  const contacts = useSelector(state => state.contacts);

  useEffect(() => {
    dispatch(getContactsAction())
  },[dispatch])

  // useEffect(() => {
  //   contactService.get('/')
  //     .then(({data}) => dispatch(getContactsAction(data)))
  //     .catch(error => console.log(error))
  // },[dispatch])


  // const onDelete = (id) => {
  //   deleteContactName(id);
  // };

  // const onEdit = (contact) => {
  //   selectContactName(contact)
  // };

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
                  // onDelete={onDelete}
                  // onEdit={onEdit}
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

// const mapStateToProps = (contacts) => {
//   return contacts
// }

// const mapDispatchToProps = {
//   deleteContactName,
//   backToCreateContact,
//   selectContactName
// }


export default List;
