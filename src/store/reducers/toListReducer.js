import { 
        ADD_CONTACT_NAME,
        DELETE_CONTACT_NAME,
        BACK_TO_CREATE_CONTACT,
        SELECT_CONTACT_NAME,
        } from '../actions/toListAction';

const initialState = {
  contacts: [
    {
      id: 1,
      fName: 'Robinson',
      lName: 'Crusoe',
      email: 'isla.crusoe@gmail.com',
      phone: '+56 32 2939000',
    },
    {
      id: 2,
      fName: 'Tom',
      lName: 'Sawyer',
      email: 't.sawyer@gmail.com',
      phone: '+1 415-554-4000',
    },
    {
      id: 3,
      fName: 'Harry',
      lName: 'Potter',
      email: 'h.potter@gmail.com',
      phone: '+44 02079834100',
    },
  ],
  initFormState: {
    fName: '',
    lName: '',
    email: '',
    phone: '',
  }
};

export default function toListReducer(state = initialState, {type, payload}) {
  switch (type) {
    case ADD_CONTACT_NAME: return {
      ...state, contacts: [...state.contacts, payload],
      initFormState: state.initFormState
    };
    case DELETE_CONTACT_NAME: return {
      ...state, contacts: [...state.contacts.filter((contact) => contact.id !== payload)],
      initFormState: state.initFormState
    };
    case SELECT_CONTACT_NAME: return {
      ...state,
      initFormState: payload,
    }
    case BACK_TO_CREATE_CONTACT: return {
      ...state,
      initFormState: state.initFormState
    }
    default: return state;
  }
};

//* вибір створення або оновлення контакту в формі
