const ServiceRoutes = {
  auth: {
    registration: "/auth/register",
    connect: "/auth/login",
  },
  user: {
    getUser: "/user",
    updateUser: "/user",
  },
  project: {
    createProject: (id) => `/tenant/${id}/project`,
    getAllProject: "/project/list",
  },
  investment: {
    createInvestment: "/investment/invest",
    listeInvestement: (id) => `/tenant/${id}/investment-term/list`,
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
  stats: {
    getStats: (id) => `/tenant/${id}/statistics`,
  },
};

export default ServiceRoutes;
