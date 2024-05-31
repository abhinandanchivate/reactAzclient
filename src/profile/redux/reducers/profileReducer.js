import { PROFILE_ERROR } from "../type/profileTypes";

const initialState = {
  profile: null,
  loading: true,
  allProfiles: [],
  error: {},
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case PROFILE_ERROR:
      return { ...state, error: payload, loading: false };
    default:
      return state;
  }
};
