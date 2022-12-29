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
    updateCompany: (id) => `/companies/update/${id}`,
  },
  offer:{
    createOffer:"/offers/create",
    createDocu:"/offer-docs/create"
  },
  transaction:{
    depot:"/transactions/deposit"
  },
  role: {
    All: "/role/list",
  },
};

export default ServiceRoutes;
