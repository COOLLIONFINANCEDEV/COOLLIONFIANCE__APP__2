import ApiService from "./ApiService";
import ServiceRoutes from "./ServiceRoutes";

const SessionService = {
  async Login(values) {
    const keys = Object.keys(values);
    const body = keys.includes("address")
      ? { address: values.address }
      : keys.includes("magicLink")
      ? { magicLink: values.magicLink }
      : {
          username: values.email,
          password: values.password,
        };
    return ApiService(ServiceRoutes.auth.connect, "post", body);
  },
  async Register(values) {
    const body = {
      email: values.email,
      password: values.password,
    };
    return ApiService(ServiceRoutes.auth.registration, "post", body);
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
      code: parseInt(values.code),
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
  async GetAllCompany() {
    return ApiService(ServiceRoutes.company.getAllCompany, "get", "", "");
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
  async GetOfferByUser(userId) {
    return ApiService(ServiceRoutes.offer.getOffer(userId), "get", "", "");
  },
  async GetAllOffer() {
    return ApiService(ServiceRoutes.offer.getAllOffer, "get", "", "");
  },
  async CreateTransaction(body) {
    const schema = {
      amount: body.amount,
      currency: "XOF",
      use_credit_card: body.useCreditCard,
    };

    return ApiService(ServiceRoutes.transaction.depot, "post", "", schema);
  },
  async CreateWithDrawal(body) {
    const schema = {
      amount: body.amount,
      use_existing_phone_number: false,
      phone_prefix: 225, //ignore if use_existing_phone_number is true
      phone_number: body.phone, //ignore if use_existing_phone_number is true
    };
    return ApiService(ServiceRoutes.transaction.withDrawal, "post", "", schema);
  },
  async GetAllTransaction() {
    return ApiService(ServiceRoutes.transaction.GetAll, "get", "", "");
  },
  async GetWalletByUser(id) {
    return ApiService(ServiceRoutes.wallet.getWallet(id), "get", "", "");
  },
  async CreateInvestment(id, body) {
    const schema = {
      amount: body.price,
      offer_id: parseInt(id),
    };

    return ApiService(
      ServiceRoutes.investment.createInvestment,
      "post",
      "",
      schema
    );
  },
  async CreateTenant(body) {
    const schema = {
      accountTypeId: body.id, // integer
      name: body.name,
      email: body.email, // required for community and borrower
      email2: body.email2,
      description: body.description, // required for community and borrower
      profilePhoto: body.profilePhoto,

      // lender
      address: body.address,
      preferredLoanCategories: body.preferredLoanCategories, // ignore

      // borrower
      phone: body.phone,
      phone2: body.phone2,
      businessSector: body.businessSector,

      // community
      type: body.type,
      website: body.website,
      socialMedia: body.socialMedia,
    };
    return ApiService(ServiceRoutes.tenant.createTenant, "post", "", schema);
  },
};

export default SessionService;
