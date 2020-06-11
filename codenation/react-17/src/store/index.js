import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const persistConfig = {
  key: 'spotifyStorage',
  storage,
  blacklist: ['auth', 'content'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
const middlewares = [thunk];
const store = createStore(persistedReducer, applyMiddleware(...middlewares));
const persistor = persistStore(store);

export { store, persistor };