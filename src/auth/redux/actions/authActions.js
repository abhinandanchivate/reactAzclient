//register action

import setAuthToken from "../../../utils/setAuthToken";
import {
  loadUserDataService,
  loginService,
  registerService,
} from "../../service/auth.service";
import {
  LOGIN_SUCCESS,
  REGISTER_SUCCESS,
  USER_LOADED,
} from "../types/authTypes";

// we need to consume the service method to perform the rest call.
export const registerAction = (formData) => async (dispatch) => {
  try {
    const res = await registerService(formData);
    setAuthToken(res.data.token);
    dispatch({ type: REGISTER_SUCCESS, payload: res.data });
  } catch (err) {}
};

export const loginAction = (formData) => async (dispatch) => {
  // call loginService
  const res = await loginService(formData);
  localStorage.setItem("token", res.data.token);
  setAuthToken(res.data.token);
  dispatch({ type: LOGIN_SUCCESS, payload: res.data });
  dispatch(userLoadAction());
};

export const userLoadAction = () => async (dispatch) => {
  const res = await loadUserDataService();
  console.log(res);
  dispatch({ type: USER_LOADED, payload: res.data });
};
