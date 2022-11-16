import React from "react";
import { useSelector } from "react-redux";
import { ADMIN, BORROWER, LENDER } from "../Context/Roles/roles";
import { selectLogin } from "../features/Login/LoginSlice";
import Redirect from "./Redirect";

const GoodRouteLInk = ({ AllLink, children }) => {
  const [link, setLink] = React.useState();
  const loginState = useSelector(selectLogin);

  React.useEffect(() => {
    const isAuthenticated = loginState.isAuthenticated;
    if (isAuthenticated) {
      const userRole = JSON.parse(loginState.user).role;
      if (userRole === LENDER()) {
        setLink(AllLink.LENDER.link);
      } else if (userRole === BORROWER()) {
        setLink(AllLink.BORROWER.link);
      } else if (userRole === ADMIN()) {
        setLink(AllLink.ADMIN.link);
      }
    }
  }, [loginState, AllLink]);

  return <Redirect link={link}>{children}</Redirect>;
};

export default GoodRouteLInk;
