const CurrentRoute = (route) => {
    const current = window.location.pathname;
   return current === route;
};

export default CurrentRoute;
