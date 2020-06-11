import { getCategoriesSuccess, getCategoriesFailure } from '../actions/content';
import { endpoints } from '../../modules/endpoints';

export function fetchCategories() {

  return function getCategoriesThunk(dispatch, getState) {
    const { url, options } = endpoints.getCategories;
    const { auth } = getState();

    fetch(url, {
      ...options,
      headers: { Authorization: `${auth.token_type} ${auth.access_token}` },
    })
      .then(handleErrors)
      .then(res => res.json())
      .then(({ categories }) =>
        dispatch(getCategoriesSuccess(categories.items))
      )
      .catch(error => dispatch(getCategoriesFailure(error)));

    function handleErrors(response) {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response;
    };
    
  };
};