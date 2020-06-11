import {
  CLEAN_CATEGORIES,
  GET_CATEGORIES_SUCCESS,
  GET_CATEGORIES_FAILURE,
  CLEAN_PLAYLISTS,
  GET_PLAYLISTS_SUCCESS,
  GET_PLAYLISTS_FAILURE,
  CLEAN_TRACKS,
  GET_TRACKS_SUCCESS,
  GET_TRACKS_FAILURE,
  SET_PLAYING_TRACK,
  CLEAR_PLAYING_TRACK,
} from '../actionTypes/content';

const initialState = {
  categories: [],
  playlists: [],
  tracks: [],
  previousPlayingId: null,
  playingNowId: null,
  playingNowTrack: null,
  playerHeight: 0,
  error: '',
};

export default function contentReducer(state = initialState, action) {

  if (action.type === CLEAN_CATEGORIES) {
    return {
      ...state,
      categories: [],
    };
  }

  if (action.type === GET_CATEGORIES_SUCCESS) {
    const { payload } = action;

    return {
      ...state,
      errorMessage: '',
      categories: payload,
    };
  }

  if (action.type === GET_CATEGORIES_FAILURE) {
    const { error } = action;

    return {
      ...state,
      categories: [],
      error,
    };
  }

  if (action.type === CLEAN_PLAYLISTS) {
    return {
      ...state,
      playlists: [],
    };
  }

  if (action.type === GET_PLAYLISTS_SUCCESS) {
    const { payload } = action;

    return {
      ...state,
      playlists: payload,
    };
  }

  if (action.type === GET_PLAYLISTS_FAILURE) {
    const { error } = action;

    return {
      ...state,
      playlists: [],
      error,
    };
  }

  if (action.type === CLEAN_TRACKS) {
    return {
      ...state,
      tracks: [],
    };
  }

  if (action.type === GET_TRACKS_SUCCESS) {
    const { payload } = action;

    return {
      ...state,
      tracks: payload,
    };
  }

  if (action.type === GET_TRACKS_FAILURE) {
    const { error } = action;

    return {
      ...state,
      tracks: [],
      error,
    };
  }

  if (action.type === SET_PLAYING_TRACK) {
    return {
      ...state,
      previousPlayingId: state.playingNowId || null,
      playingNowId: action.payload.id,
      playingNowTrack: action.payload,
    };
  }

  if (action.type === CLEAR_PLAYING_TRACK) {
    return {
      ...state,
      previousPlayingId: null,
      playingNowId: null,
      playingNowTrack: null,
    };
  }
  return state;
}