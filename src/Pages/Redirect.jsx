import React from "react";
import { ADMIN, BORROWER, LENDER } from "../Context/Roles/roles";
import GoodRouteLInk from "../Helpers/GoodRouteLInk";
import {
  AdminRouteLink,
  BorrowerRouteLink,
  HomeRouteLink,
} from "../Router/Routes";

const Redirect = () => {
  const AllLink = React.useCallback(() => {
    return {
      LENDER: { link: HomeRouteLink(), role: LENDER() },
      BORROWER: { link: BorrowerRouteLink(), role: BORROWER() },
      ADMIN: { link: AdminRouteLink(), role: ADMIN() },
    };
  }, []);

  setTimeout(() => {
    const RedirectBtn = window.document.querySelector(".redirectBtn");
    RedirectBtn.click();
  }, 1000);

  return <GoodRouteLInk AllLink={AllLink()} onlyDo={true} />;
};

export default Redirect;
