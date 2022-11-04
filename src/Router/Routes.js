export const HomeRouteLink = () => "/";
export const DashboardRouteLink = () => "/dashboard";
export const LoginRouteLink = () => "/login";
export const NotFoundRouteLink = () => "*"; // This is a catch-all router that will match any path that is not matched by the other routes.
export const ProjectGlobalLink = () => '/project'
export const CartRouteLink = () => "/cart"; 
export const ProjectDetailsLink = (projectId) => `${projectId}`;