import { createStore } from 'redux';
import toListReducer from './reducers/toListReducer';

export default createStore(toListReducer);