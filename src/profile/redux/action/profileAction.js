import { getProfileService } from "../../service/profile.service";
import { PROFILE_ERROR } from "../type/profileTypes";

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
