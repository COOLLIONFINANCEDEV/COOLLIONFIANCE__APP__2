import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectLogin } from "../features/Login/LoginSlice";
import NotFound from "../Pages/NotFound";

const RequireAuth = ({ allowedRoles, children }) => {
  const loginState = useSelector(selectLogin);
  const [role, setRole] = useState("LENDER");
  useEffect(() => {
    const isAuthenticated = loginState.isAuthenticated;
    if (isAuthenticated) {
      const userRole = JSON.parse(loginState.user).role;
      setRole(userRole);
    } else {
      setRole("LENDER");
    }
  }, [loginState, role]);

  return <>{allowedRoles === role ? children : <NotFound />}</>;
};

export default RequireAuth;
