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
  },
  role: {
    All: "/role/list",
  },
};

export default ServiceRoutes;
