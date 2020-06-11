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

export const cleanCategories = () => ({
  type: CLEAN_CATEGORIES
});

export const getCategoriesSuccess = (data) => ({
  type: GET_CATEGORIES_SUCCESS,
  payload: data
});

export const getCategoriesFailure = (error) => ({
  type: GET_CATEGORIES_FAILURE,
  error
});

export const cleanPlaylists = (data) => ({
  type: CLEAN_PLAYLISTS,
  payload: data
});

export const getPlaylistsSuccess = (data) => ({
  type: GET_PLAYLISTS_SUCCESS,
  payload: data
});

export const getPlaylistsFailure = (error) => ({
  type: GET_PLAYLISTS_FAILURE,
  error
});

export const cleanTracks = (data) => ({
  type: CLEAN_TRACKS,
  payload: data
});

export const getTracksSuccess = (data) => ({
  type: GET_TRACKS_SUCCESS,
  payload: data
});

export const getTracksFailure = (error) => ({
  type: GET_TRACKS_FAILURE,
  error
});

export const setPlayingTrack = (track) => ({
  type: SET_PLAYING_TRACK,
  payload: track
});

export const clearPlayingTrack = () => ({
  type: CLEAR_PLAYING_TRACK
});