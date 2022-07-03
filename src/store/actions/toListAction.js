import ACTION_TYPES from './actionTypes'


//* getContacts
export const getContactsAction = () => {
  return {
    type: ACTION_TYPES.GET_CONTACTS_ACTION,
  }
};
export const getContactsRequest = () => {
  return {
    type: ACTION_TYPES.GET_CONTACTS_REQUEST,
  }
};
export const getContactsSuccess = (contacts) => {
  return {
    type: ACTION_TYPES.GET_CONTACTS_SUCCESS,
    payload: contacts,
  }
};
export const getContactsError = (error) => {
  return {
    type: ACTION_TYPES.GET_CONTACTS_ERROR,
    payload: error,
  }
};

//* addContactName
export const addContactNameAction = (contact) => {
  return {
    type: ACTION_TYPES.POST_CONTACT_ACTION,
    payload: contact,
  }
};
export const addContactNameRequest = () => {
  return {
    type: ACTION_TYPES.POST_CONTACT_REQUEST,
  }
};
export const addContactNameSuccess = (contact) => {
  return {
    type: ACTION_TYPES.POST_CONTACT_SUCCESS,
    payload: contact,
  }
};
export const addContactNameError = (error) => {
  return {
    type: ACTION_TYPES.POST_CONTACT_ERROR,
    payload: error,
  }
};

//* updateContactName
export const updateContactNameAction = (contact) => {
  return {
    type: ACTION_TYPES.PUT_CONTACT_ACTION,
    payload: contact,
  }
};
export const updateContactNameRequest = () => {
  return {
    type: ACTION_TYPES.PUT_CONTACT_REQUEST,
  }
};
export const updateContactNameSuccess = (contact) => {
  return {
    type: ACTION_TYPES.PUT_CONTACT_SUCCESS,
    payload: contact,
  }
};
export const updateContactNameError = (error) => {
  return {
    type: ACTION_TYPES.PUT_CONTACT_ERROR,
    payload: error,
  }
};

//* deleteContactName
export const deleteContactNameAction = (id) => {
  return {
    type: ACTION_TYPES.DELETE_CONTACT_ACTION,
    payload: id,
  }
};
export const deleteContactNameRequest = () => {
  return {
    type: ACTION_TYPES.DELETE_CONTACT_REQUEST,
  }
};
export const deleteContactNameSuccess = (id) => {
  return {
    type: ACTION_TYPES.DELETE_CONTACT_SUCCESS,
    payload: id,
  }
};
export const deleteContactNameError = (error) => {
  return {
    type: ACTION_TYPES.DELETE_CONTACT_ERROR,
    payload: error,
  }
};

//* selectContactName
export const SELECT_CONTACT_NAME = 'SELECT_CONTACT_NAME';
export const selectContactName = (payload) => {
  return {
    type: SELECT_CONTACT_NAME,
    payload
  }
};

//* backToCreateContact
export const BACK_TO_CREATE_CONTACT = 'BACK_TO_CREATE_CONTACT';
export const backToCreateContact = (payload) => {
  return {
    type: BACK_TO_CREATE_CONTACT,
    payload
  }
};
