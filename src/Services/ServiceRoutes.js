const ServiceRoutes = {
  auth: {
    registration: "/oauth/sign-up",
    connect: "/oauth/sign-in",
    acessToken: "/oauth/token/access-token",
    verifyInfo: "/oauth/verify-info",
    checkVerification: "/oauth/check-verification",
  },
  user: {
    getUser: (id) => `/users/retrive/${id}`,
    updateUser: (id) => `/users/update/${id}`,
  },
  company: {
    createCompany: "/companies/create",
    getCompany: (id) => `/companies/retrive/${id}`,
    getAllCompany: "/companies/list",
    updateCompany: (id) => `/companies/update/${id}`,
  },
  offer: {
    createOffer: "/offers/create",
    createDocu: "/offer-docs/create",
    getOffer: (id) => `/offers/retrive/company/${id}`,
    getAllOffer: "/offers/list",
  },
  transaction: {
    depot: "/transactions/deposit",
    withDrawal: "/transactions/withdrawald",
    GetAll: "/transactions/list/",
  },
  wallet: {
    getWallet: (id) => `/wallet/retrive/${id}`,
  },
  investment: {
    createInvestment: "/investment/create",
  },
  role: {
    All: "/role/list",
  },
};

export default ServiceRoutes;
