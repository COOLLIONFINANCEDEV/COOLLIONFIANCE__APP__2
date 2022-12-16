import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ADMIN, BORROWER, LENDER } from "../Context/Roles/roles";
import { selectLogin } from "../features/Login/LoginSlice";
import Redirect from "./Redirect";

const GoodRouteLInk = ({ AllLink, children, onlyDo = false }) => {
  const [link, setLink] = React.useState();
  const loginState = useSelector(selectLogin);
  const navigate = useNavigate();

  React.useEffect(() => {
    const isAuthenticated = loginState.isAuthenticated;
    if (isAuthenticated) {
      const userRole = loginState.user.role;
      if (userRole === LENDER()) {
        setLink(AllLink.LENDER.link);
      } else if (userRole === BORROWER()) {
        setLink(AllLink.BORROWER.link);
      } else if (userRole === ADMIN()) {
        setLink(AllLink.ADMIN.link);
      }
    } else {
      setLink(AllLink.LENDER.link);
    }

    if (onlyDo === true) {
      navigate(link);
    }
  }, [loginState, AllLink, onlyDo, navigate,link]);

  return <>{onlyDo === false && <Redirect link={link}>{children}</Redirect>}</>;
};

export default GoodRouteLInk;
