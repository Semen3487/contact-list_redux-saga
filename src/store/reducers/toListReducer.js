
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
};

export default function toListReducer(state = initialState, {type, payload}) {
  switch (type) {
    case 'addContactName': return {...state, contacts: [...state.contacts, payload]};
    case 'deleteContactName': return {...state}
    default: return state;
  }
}
