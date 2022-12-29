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
      email: body.email,
      last_password: body.lastPassword,
      two_fa: body.boolean,
      newsletter: body.newsletter,
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
  async UpdateCompanyByManager(id, body) {
    const schema = {
      about_me: body.about,
      domain: body.sector,
      email: body.email,
      localisation: body.country,
      logo: body.image,
      name: body.name,
      payment_information: body.payment,
      phone: body.phone,
      website: body.website,
    };
    return ApiService(
      ServiceRoutes.company.updateCompany(id),
      "put",
      "",
      schema
    );
  },
  async CreateOffer(companyId, body) {
    const schema = {
      name: body.name,
      start_date: new Date(body.startDate),
      end_date: new Date(body.endDate),
      image: body.image,
      localisation: body.localisation,
      status: "true",
      category: "category",
      stroy: body.story,
      investment_motive: body.investmentMotive,
      loan_about: body.aboutLoan,
      interest_rate: body.interestRate,
      disbursed_date: new Date(new Date(body.endDate).setDate(20)),
      total_investment_to_raise: body.amount,
      minimum_amount: body.minAmount,
      loan_length: new Date(body.loanLenght),
      company_id: companyId,
      distribution_frequency: 1,
      about_friendship_bridge: body.aboutFriendship,
    };
    return ApiService(ServiceRoutes.offer.createOffer, "post", "", schema);
  },
  async CreateOfferDocs(offerId, body) {
    const schema = {
      docs: JSON.stringify(body.images),
      offer_id: offerId,
    };

    return ApiService(ServiceRoutes.offer.createDocu, "post", "", schema);
  },
  async GetOfferByUser(userId){
    return ApiService(ServiceRoutes.offer.getOffer(userId),"get","","");
  },
  async CreateTransaction(body) {
    const schema = {
      amount: body.amount,
      currency: "XOF",
      use_credit_card: body.useCreditCard,
    };

    return ApiService(ServiceRoutes.transaction.depot, "post", "", schema);
  },
};

export default SessionService;
