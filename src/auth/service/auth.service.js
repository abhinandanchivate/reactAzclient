import api from "../../utils/api";

const registerService = (data) => api.post("/users", data);

const loginService = (data) => api.post("/auth", data);

const loadUserDataService = () => {
  return api.get("/auth");
};
export { registerService, loginService, loadUserDataService };
