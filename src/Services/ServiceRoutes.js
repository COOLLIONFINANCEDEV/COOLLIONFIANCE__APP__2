const ServiceRoutes = {
  auth: {
    registration: "/auth/register",
    connect: "/auth/login",
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
    withDrawal: "/transactions/withdrawal",
    GetAll: "/transactions/list/",
  },
  wallet: {
    getWallet: (id) => `/wallet/retrive/${id}`,
  },
  investment: {
    createInvestment: "/investment/invest",
  },
  role: {
    All: "/role/list",
  },
  tenant: {
    createTenant: "/tenant",
  },
  accountType: {
    getAll: "/account-type/list",
  },
};

export default ServiceRoutes;
