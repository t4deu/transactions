import { createStore, applyMiddleware, combineReducers } from 'redux';
import * as reducers from './Ducks';

/* eslint-disable no-underscore-dangle */
export default function configureStore() {
  const rootReducer = combineReducers(reducers);

  return createStore(rootReducer, applyMiddleware());
}
