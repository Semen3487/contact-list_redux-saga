import {put} from 'redux-saga/effects';
import contactService from '../api/contact-service';
import { 
  addContactNameError,
  addContactNameRequest,
  addContactNameSuccess,
  deleteContactNameError,
  deleteContactNameRequest,
  deleteContactNameSuccess,
  getContactsError,
  getContactsRequest, 
  getContactsSuccess,
  updateContactNameError,
  updateContactNameRequest,
  updateContactNameSuccess, 
} from '../store/actions/toListAction';


export function* getContactsSaga(){
  yield put(getContactsRequest());
  try {
    const contacts = yield contactService.get('/').then(({data}) => data);
    yield put(getContactsSuccess(contacts));
  } catch (error) {
    yield put(getContactsError(error));
  }
};

export function* createContactSaga({payload}){
  yield put(addContactNameRequest());
  try {
    const newContact = yield contactService.post('/', payload)
      .then(({data}) => data);
    yield put(addContactNameSuccess(newContact));
  } catch (error) {
    yield put(addContactNameError(error));
  }
};

export function* updateContactSaga({payload}){
  yield put(updateContactNameRequest());
  try {
    //* payload.id ???
    const updateContact = yield contactService.put(`/${payload.id}`, payload)
      .then(({data}) => data);
    yield put(updateContactNameSuccess(updateContact));
  } catch (error) {
    yield put(updateContactNameError(error));
  }
};

export function* deleteContactSaga({payload}){
  yield put(deleteContactNameRequest());
  try {
    yield contactService.post(`/${payload}`);
    yield put(deleteContactNameSuccess(payload));
  } catch (error) {
    yield put(deleteContactNameError(error));
  }
};