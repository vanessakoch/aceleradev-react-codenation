import { getPlaylistsSuccess, getPlaylistsFailure } from '../actions/content';
import { endpoints } from '../../modules/endpoints';

export function fetchPlaylists(categoryId) {

  return function fetchPlaylistsThunk(dispatch, getState) {
    const { url, options } = endpoints.getCategoryPlaylists;
    const { auth } = getState();
    const fetchUrl = url.replace(/{categoryId}/, categoryId);

    fetch(fetchUrl, {
      ...options,
      headers: { Authorization: `${auth.token_type} ${auth.access_token}` },
    })
      .then(handleErrors)
      .then(res => res.json())
      .then(({ playlists }) => dispatch(getPlaylistsSuccess(playlists.items)))
      .catch(error => dispatch(getPlaylistsFailure(error)));

    function handleErrors(response) {
    
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response;
    
    };

  };
};