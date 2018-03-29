import { createStore, applyMiddleware, combineReducers } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import * as reducers from './Ducks';

const persistConfig = {
  key: 'root',
  storage,
};

/* eslint-disable no-underscore-dangle */
export default function configureStore() {
  const rootReducer = combineReducers(reducers);
  const persistedReducer = persistReducer(persistConfig, rootReducer);
  const store = createStore(persistedReducer, applyMiddleware());

  persistStore(store);

  return store;
}
