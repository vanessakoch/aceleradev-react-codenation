import { combineReducers } from 'redux';

import authReducer from './auth';

import userProfileReducer from './user';

import contentReducer from './content';

const rootReducer = combineReducers({
  auth: authReducer,
  user: userProfileReducer,
  content: contentReducer,
});

export default rootReducer;