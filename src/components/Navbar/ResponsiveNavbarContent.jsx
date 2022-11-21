import React from "react";
import { IconButton, Stack } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import Logo from "./Logo";
import GoodRouteLInk from "../../Helpers/GoodRouteLInk";

const ResponsiveNavbarContent = ({ AllLink }) => {
  return (
    <>
      <IconButton color="inherit" sx={{ display: { xs: "flex", md: "none" } }}>
        <MenuIcon fontSize="medium" />
      </IconButton>

      <Stack sx={{ display: { xs: "block", md: "none" } }}>
        <GoodRouteLInk AllLink={AllLink}>
          <IconButton>
            <Logo widthImg={90} />
          </IconButton>
        </GoodRouteLInk>
      </Stack>

      <Stack
        sx={{
          display: { xs: "flex", md: "none" },
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <IconButton
          size="large"
          color="inherit"
          sx={{ display: { xs: "block", md: "none" } }}
        >
          <SearchIcon fontSize="medium" />
        </IconButton>
      </Stack>
    </>
  );
};

export default ResponsiveNavbarContent;
