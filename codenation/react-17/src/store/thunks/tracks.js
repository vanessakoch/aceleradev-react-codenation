import { getTracksSuccess, getTracksFailure } from '../actions/content';
import { endpoints } from '../../modules/endpoints';

export function fetchTracks(playlistId) {

  return function fetchTracksThunk(dispatch, getState) {
    const { url, options } = endpoints.getPlaylistTracks;
    const { auth } = getState();
    
    const fetchUrl = url.replace(/{playlistId}/, playlistId);

    fetch(fetchUrl, {
      ...options,
      headers: { Authorization: `${auth.token_type} ${auth.access_token}` },
    })
      .then(handleErrors)
      .then(res => res.json())
      .then(data => {
        dispatch(getTracksSuccess(data.items));
      })
      .catch(error => dispatch(getTracksFailure(error)));

    function handleErrors(response) {
      if (!response.ok) throw new Error(response.statusText);
      return response;
    };

  };
};