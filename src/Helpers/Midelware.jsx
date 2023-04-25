/* eslint-disable react/prop-types */
import React from "react";
import { useSelector } from "react-redux";
import { ADMIN, BORROWER, LENDER } from "../Context/Roles/roles";
import { selectLogin } from "../features/Login/LoginSlice";

const Midelware = ({ admin, lender, borrower }) => {
  const { user } = useSelector(selectLogin);
  const { role } = user;
  const [Comp, setComp] = React.useState();
  React.useEffect(() => {
    if (role !== null) {
      if (role === ADMIN()) {
        setComp(admin);
      } else if (role === LENDER()) {
        setComp(lender);
      } else if (role === BORROWER()) {
        setComp(borrower);
      }
    }
  }, [admin, role, user, lender, borrower]);
  return <>{Comp}</>;
};

export default Midelware;
