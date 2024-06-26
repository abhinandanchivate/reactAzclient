import {
  GET_PROFILE,
  PROFILE_ERROR,
  UPDATE_PROFILE,
} from "../type/profileTypes";

const initialState = {
  profile: null,
  loading: true,
  allProfiles: [],
  error: {},
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_PROFILE:
      return { ...state, profile: payload, loading: false };

    case PROFILE_ERROR:
      return { ...state, error: payload, loading: false };
    default:
      return state;
  }
};
