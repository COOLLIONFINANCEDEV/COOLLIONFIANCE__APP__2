const ServiceRoutes = {
  auth: {
    registration: "/oauth/sign-up",
    connect: "/oauth/sign-in",
    acessToken: "/oauth/token/access-token",
  },
  user: {
    getUser: (id) => `/users/retrive/${id}`,
  }
};

export default ServiceRoutes;
