import { 
  BACK_TO_CREATE_CONTACT,
  SELECT_CONTACT_NAME,
} from '../actions/toListAction';

import ACTION_TYPES from '../actions/actionTypes';

const initialState = {
  contacts: [],
  initFormState: {
    fName: '',
    lName: '',
    email: '',
    phone: '',
  },
  isFetching: false,
  error: null,

};

export default function toListReducer(state = initialState, {type, payload}) {
  switch (type) {
    //* Create
    case ACTION_TYPES.POST_CONTACT_REQUEST: return {
      ...state,
      isFetching: true
    };
    case ACTION_TYPES.POST_CONTACT_SUCCESS: return {
      ...state, 
      contacts: [...state.contacts, payload],
      initFormState: {
        fName: '',
        lName: '',
        email: '',
        phone: '',
      },
      isFetching: false
    };
    case ACTION_TYPES.POST_CONTACT_ERROR: return {
      ...state,
      isFetching: false,
      error: payload
    };
    //* Delete
    case ACTION_TYPES.DELETE_CONTACT_REQUEST: return {
      ...state,
      isFetching: true
    };
    case ACTION_TYPES.DELETE_CONTACT_SUCCESS: return {
      ...state, 
      contacts: [...state.contacts.filter((contact) => contact.id !== payload)],
      initFormState: {
        fName: '',
        lName: '',
        email: '',
        phone: '',
      },
      isFetching: false
    };
    case ACTION_TYPES.DELETE_CONTACT_ERROR: return {
      ...state,
      isFetching: false,
      error: payload
    };
    //* Update
    case ACTION_TYPES.PUT_CONTACT_REQUEST: return {
      ...state,
      isFetching: true
    };
    case ACTION_TYPES.PUT_CONTACT_SUCCESS: return {
      ...state,
      contacts: [...state.contacts.map((contact) => contact.id !== payload.id ? contact : payload)],
      initFormState: {
        fName: '',
        lName: '',
        email: '',
        phone: '',
      },
      isFetching: false
    };
    case ACTION_TYPES.PUT_CONTACT_ERROR: return {
      ...state,
      isFetching: false,
      error: payload
    };
    //* Get
    case ACTION_TYPES.GET_CONTACTS_REQUEST: return {
      ...state,
      isFetching: true
    };
    case ACTION_TYPES.GET_CONTACTS_SUCCESS: return {
      ...state,
      contacts: payload,
      isFetching: false
    };
    case ACTION_TYPES.GET_CONTACTS_ERROR: return {
      ...state,
      isFetching: false,
      error: payload
    };
    //* Sync
    case SELECT_CONTACT_NAME: return {
      ...state,
      initFormState: payload
    };
    case BACK_TO_CREATE_CONTACT: return {
      ...state,
      initFormState: {
        fName: '',
        lName: '',
        email: '',
        phone: '',
      }
    };
    default: return state;
  }
};

