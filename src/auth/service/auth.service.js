import api from "../../utils/api";

const registerService = (data) => api.post("/users", data);

const loginService = (data) => api.post("/auth", data);
export { registerService, loginService };
