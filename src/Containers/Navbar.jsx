import React from "react";
import { AppBar, Toolbar, Box, Stack } from "@mui/material";
import { AdminLenderRouteLink, BorrowerRouteLink, DashboardRouteLink, HomeRouteLink } from "../Router/Routes";
import { ADMIN, BORROWER, LENDER } from "../Context/Roles/roles";
import DesktopNavbarContent from "../components/Navbar/DesktopNavbarContent";
import ResponsiveNavbarContent from "../components/Navbar/ResponsiveNavbarContent";

const Navbar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const AllLink = {
    LENDER: { link: HomeRouteLink(), role: LENDER() },
    BORROWER: { link: BorrowerRouteLink(), role: BORROWER() },
    ADMIN: { link: AdminLenderRouteLink(), role: ADMIN() },
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box component={"div"} sx={{ overflow: "hidden" }}>
      <AppBar component={"nav"} position="static">
        <Toolbar
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Stack
            direction="row"
            justifyContent={"space-between"}
            sx={{ width: "90%" }}
          >
            <DesktopNavbarContent
              AllLink={AllLink}
              handleClick={handleClick}
              open={open}
              anchorEl={anchorEl}
              handleClose={handleClose}
            />

            <ResponsiveNavbarContent />
          </Stack>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
