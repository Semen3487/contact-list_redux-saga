export const ADD_CONTACT_NAME = 'ADD_CONTACT_NAME';
export const addContactName = (contact) => {
  return {
    type: 'ADD_CONTACT_NAME',
    payload: contact,
  }
};

export const DELETE_CONTACT_NAME = 'DELETE_CONTACT_NAME';
export const deleteContactName = (id) => {
  return {
    type: 'DELETE_CONTACT_NAME',
    payload: id,
  }
};

export const SELECT_CONTACT_NAME = 'SELECT_CONTACT_NAME';
export const selectContactName = (contact) => {
  return {
    type: 'SELECT_CONTACT_NAME',
    payload: contact,
  }
};

export const UPDATE_CONTACT_NAME = 'UPDATE_CONTACT_NAME';
export const updateContactName = (contact) => {
  return {
    type: 'UPDATE_CONTACT_NAME',
    payload: contact,
  }
};

export const BACK_TO_CREATE_CONTACT = 'BACK_TO_CREATE_CONTACT';
export const backToCreateContact = () => {
  return {
    type: 'BACK_TO_CREATE_CONTACT',
    payload: '',
  }
};

