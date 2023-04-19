import React from "react";
import { ADMIN, BORROWER, LENDER } from "../Context/Roles/roles";
import GoodRouteLInk from "../Helpers/GoodRouteLInk";
import {
  AdminLenderRouteLink,
  BorrowerRouteLink,
  HomeRouteLink,
} from "../Router/Routes";

const Redirect = () => {
  const AllLink = React.useCallback(() => {
    return {
      LENDER: { link: HomeRouteLink(), role: LENDER() },
      BORROWER: { link: BorrowerRouteLink(), role: BORROWER() },
      ADMIN: { link: AdminLenderRouteLink(), role: ADMIN() },
    };
  }, []);

  return <GoodRouteLInk AllLink={AllLink()} onlyDo={true} />;
};

export default Redirect;
