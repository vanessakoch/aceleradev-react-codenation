import { AUTH_CALLBACK_SUCCESS, AUTH_CALLBACK_FAILURE } from '../actionTypes/auth';

export const authCallbackFailure = (error) => ({
  type: AUTH_CALLBACK_FAILURE,
  error
});

export const authCallbackSuccess = (tokenParams) => ({
  type: AUTH_CALLBACK_SUCCESS,
  payload: tokenParams
});