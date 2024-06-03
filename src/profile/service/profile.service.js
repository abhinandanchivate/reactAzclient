import api from "../../utils/api";
const getProfileService = () => api.get("/profile/me");
const createProfileService = (formData) => api.post("/profile", formData);
export { createProfileService, getProfileService };
