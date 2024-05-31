import api from "../../utils/api";
const getProfileService = () => api.get("/profile/me");
export { getProfileService };
