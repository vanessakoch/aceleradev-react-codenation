import { AUTH_CALLBACK_SUCCESS, AUTH_CALLBACK_FAILURE } from '../actionTypes/auth';

const initialState = {
  isLogged: false,
  access_token: '',
  token_type: '',
  expires_in: '',
  error: '',
};

export default function authReducer(state = initialState, action) {

  if (action.type === AUTH_CALLBACK_SUCCESS) {
    return {
      isLogged: true,
      error: '',
      ...action.payload,
    };
  }

  if (action.type === AUTH_CALLBACK_FAILURE) {
    return {
      isLogged: false,
      access_token: '',
      token_type: '',
      expire_in: '',
      error: action.error,
    };
  }

  return state;
};