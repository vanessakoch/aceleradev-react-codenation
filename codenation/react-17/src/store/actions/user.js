import { GET_USER_PROFILE_SUCCESS, GET_USER_PROFILE_FAILURE } from '../actionTypes/user';

export const getUserProfileSuccess = (userData) => ({
  type: GET_USER_PROFILE_SUCCESS,
  payload: userData,
});

export const getUserProfileFailure = (error) => ({
  type: GET_USER_PROFILE_FAILURE,
  error
});