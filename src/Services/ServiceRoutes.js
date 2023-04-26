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
    updateProject: (tenantId, projectId) =>
      `/tenant/${tenantId}/project/${projectId}`,
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
  terms: {
    all: (tenantId) => `/tenant/${tenantId}/investment-term/list`,
  },
};

export default ServiceRoutes;
