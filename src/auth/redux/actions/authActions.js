//register action

import { loginService, registerService } from "../../service/auth.service";
import { LOGIN_SUCCESS, REGISTER_SUCCESS } from "../types/authTypes";

// we need to consume the service method to perform the rest call.
export const registerAction = (formData) => async (dispatch) => {
  try {
    const res = await registerService(formData);
    dispatch({ type: REGISTER_SUCCESS, payload: res.data });
  } catch (err) {}
};

export const loginAction = (formData) => async (dispatch) => {
  // call loginService
  const res = await loginService(formData);
  dispatch({ type: LOGIN_SUCCESS, payload: res.data });
};
