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
  async GetUser() {
    return ApiService(ServiceRoutes.user.getUser, "get", "");
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
  async CreateProject(tenantId, body) {
    const infos = body.information;
    const docs = body.images;
    const schema = {
      impactImage: infos.impactImage,
      projectTitle: infos.projectTitle,
      teaserTitle: infos.teaserTitle,
      amountRequested: infos.amountRequested,
      carouselImage: infos.carouselImage,
      projectCountry: infos.projectCountry,
      story: infos.story,
      loanApplicationSpecial: infos.loanApplicationSpecial,
      loanInformation: infos.loanInformation,
      docs: JSON.stringify(docs),
    };
    return ApiService(
      ServiceRoutes.project.createProject(tenantId),
      "post",
      schema
    );
  },
  async UpdateProject(tenanId, ProjectId, body) {
    return ApiService(
      ServiceRoutes.project.updateProject(tenanId, ProjectId),
      "put",
      body
    );
  },
  async GetAllProject() {
    return ApiService(ServiceRoutes.project.getAllProject, "get", "");
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
  async GetAllInvestment(id) {
    return ApiService(ServiceRoutes.investment.listeInvestement(id), "get", "");
  },
  async CreateTenant(body) {
    console.table(body);
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
    return ApiService(ServiceRoutes.tenant.createTenant, "post", schema);
  },
  async ListTenant(id) {
    return ApiService(ServiceRoutes.tenant.getTenant(id), "get", "");
  },
  async GetAccountTypes() {
    return ApiService(ServiceRoutes.accountType.getAll, "get", "");
  },
  async GetStats(id) {
    return ApiService(ServiceRoutes.stats.getStats(id), "get", "");
  },
  async GetTerms(tenantId) {
    return ApiService(ServiceRoutes.terms.all(tenantId), "get", "");
  },
};

export default SessionService;
