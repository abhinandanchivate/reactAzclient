import api from "../../../utils/api";
import {
  createProfileService,
  getProfileService,
} from "../../service/profile.service";
import {
  GET_PROFILE,
  PROFILE_ERROR,
  UPDATE_PROFILE,
} from "../type/profileTypes";

export const addExperience = (formData, navigate) => async (dispatch) => {
  try {
    const res = await api.put("/profile/experience", formData);

    dispatch({
      type: UPDATE_PROFILE,
      payload: res.data,
    });

    navigate("/dashboard");
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch());
    }

    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

export const createProfile =
  (formData, navigate, edit = false) =>
  async (dispatch) => {
    try {
      const res = await createProfileService(formData);
      dispatch({ type: GET_PROFILE, payload: res.data });
      if (!edit) navigate("/dashboard");
    } catch (err) {}
  };
export const getProfileAction = () => async (dispatch) => {
  try {
    const res = await getProfileService();
  } catch (e) {
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: e.response.statusText, status: e.response.status },
    });
  }
};
