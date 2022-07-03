import { applyMiddleware, createStore } from 'redux';
import toListReducer from './reducers/toListReducer';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from '@redux-saga/core';
import rootSaga from '../sagas';

const sagaMiddleware = createSagaMiddleware();

const middleWeare = applyMiddleware(sagaMiddleware, logger);

export default createStore(toListReducer, composeWithDevTools(middleWeare));

sagaMiddleware.run(rootSaga);