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
  async VerfyInfo(values) {
    const body = {
      channel: "email",
      authorization_code: values.authorization_code,
      code_verifier: values.code_verifier,
    };
    return ApiService(ServiceRoutes.auth.verifyInfo, "post", "", body);
  },
  async CheckVerification(values) {
    const body = {
      code: values.code,
      authorization_code: values.authorization_code,
      code_verifier: values.code_verifier,
    };

    return ApiService(ServiceRoutes.auth.checkVerification, "post", "", body);
  },
  async GetUser(id) {
    return ApiService(ServiceRoutes.user.getUser(id), "get", "", "");
  },
  async GetRole() {
    return ApiService(ServiceRoutes.role.All, "get", "", "");
  },
  async Logout() {
    localStorage.clear();
  },
  async UpdateUser(id, body) {
    const schema = {
      about_me: body.about,
      first_name: body.firstName,
      image: body.image,
      last_name: body.lastName,
      loan_reason: body.loanCause,
      localisation: body.country,
      password: body.password,
    };
    return ApiService(ServiceRoutes.user.updateUser(id), "put", "", schema);
  },
  async CreateCompany(id, body) {
    const schema = {
      domain: body.sector,
      name: body.name,
      payment_information: body.payment,
      about_me: body.about,
      logo: body.image,
      localisation: body.country,
      email: body.email,
      phone: body.phone,
      manager_id: id,
      website: body.website,
    };

    return ApiService(ServiceRoutes.company.createCompany, "post", "", schema);
  },

  async GetCompanyByManager(id) {
    return ApiService(ServiceRoutes.company.getCompany(id), "get", "", "");
  },
};

export default SessionService;
