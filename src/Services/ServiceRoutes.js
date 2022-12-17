const ServiceRoutes = {
  auth: {
    registration: "/oauth/sign-up",
    connect: "/oauth/sign-in",
    acessToken: "/oauth/token/access-token",
    verifyInfo: "/oauth/verify-info",
    checkVerification: "/oauth/check-verification"
  },
  user: {
    getUser: (id) => `/users/retrive/${id}`,
  }
};

export default ServiceRoutes;
