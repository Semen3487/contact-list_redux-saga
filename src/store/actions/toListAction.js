
// export const saveContact = (contact) => {
//   if (!contact.id) {

//   }
// }

export const addContactName = (contact) => {
  return{
    type: 'addContactName',
    payload: contact,
  }
};

export const deleteContactName = (id) => {
  return{
    type: 'deleteContactName',
    payload: id,
  }
};

