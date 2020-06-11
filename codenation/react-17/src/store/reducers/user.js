import { GET_USER_PROFILE_SUCCESS, GET_USER_PROFILE_FAILURE } from '../actionTypes/user';

const initialState = {
  display_name: '',
  email: '',
  thumb: ''
};

const userProfileReducer = (state = initialState, action) => {
  
  if (action.type === GET_USER_PROFILE_SUCCESS) {
    const { display_name, email, images } = action.payload;

    return {
      display_name: display_name,
      email: email,
      thumb: images.length ? images[0].url : ''
    };
  }

  if (action.type === GET_USER_PROFILE_FAILURE) {
    return {
      display_name: '',
      email: '',
      thumb: '',
      error: action.error
    };
  }
  return state;
};

export default userProfileReducer;