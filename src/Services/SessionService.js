import ApiService from "./ApiService";
import ServiceRoutes from "./ServiceRoutes";

const SessionService = {
  async Login(values) {
    const body = {
      username: values.email,
      password: values.password,
      code_challenge: values.codeChallenge,
      code_challenge_method: process.env.REACT_APP_CODE_CHALLENGE_METHOD,
    };
    return ApiService(ServiceRoutes.auth.connect, "post", "", body);
  },
  async Register(values) {
    return ApiService(ServiceRoutes.auth.registration, "post", "", values);
  },
  async GetAccessToken(values) {
    return ApiService(ServiceRoutes.auth.acessToken, "post", "", values);
  },
  async GetUser(id) {
    return ApiService(ServiceRoutes.user.getUser(id),"get","","");
  },
  async Logout() {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("user");
  },
};

export default SessionService;
