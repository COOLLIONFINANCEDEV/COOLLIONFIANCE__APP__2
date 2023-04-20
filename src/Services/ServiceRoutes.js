const ServiceRoutes = {
  auth: {
    registration: "/auth/register",
    connect: "/auth/login",
  },
  user: {
    getUser: "/user",
    updateUser: "/user",
  },
  company: {
    createCompany: "/companies/create",
    getCompany: (id) => `/companies/retrive/${id}`,
    getAllCompany: "/companies/list",
    updateCompany: (id) => `/companies/update/${id}`,
  },
  project: {
    createProject: (id) => `/tenant/${id}/project`,
    getAllProject: "/project/list",
    getOffer: (id) => `/offers/retrive/company/${id}`,
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
    getTenant: (id) => `/tenant/${id}`,
  },
  accountType: {
    getAll: "/account-type/list",
  },
};

export default ServiceRoutes;
