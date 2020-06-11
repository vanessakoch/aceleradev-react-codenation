import { getUserProfileSuccess, getUserProfileFailure } from '../actions/user';
import { endpoints } from '../../modules/endpoints';

export function fetchUserProfile() {

  return function getUserProfileThunk(dispatch, getState) {
    const { url, options } = endpoints.getUserProfile;
    const { auth } = getState();

    fetch(url, {
      ...options,
      headers: { Authorization: `${auth.token_type} ${auth.access_token}` },
    })
      .then(handleErrors)
      .then(res => res.json())
      .then(data => dispatch(getUserProfileSuccess(data)))
      .catch(error => dispatch(getUserProfileFailure(error)));

    function handleErrors(response) {
      
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response;
    
    };
  };
};