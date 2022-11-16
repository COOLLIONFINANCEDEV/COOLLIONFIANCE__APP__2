import React from "react";
import { IconButton, Box } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import Logo from "./Logo";

const ResponsiveNavbarContent = () => {
  return (
    <>
      <IconButton color="inherit" sx={{ display: { xs: "flex", md: "none" } }}>
        <MenuIcon fontSize="medium" />
      </IconButton>

      <Box sx={{ display: { xs: "block", md: "none" } }}>
        <Logo widthImg={90} />
      </Box>

      <Box
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
      </Box>
    </>
  );
};

export default ResponsiveNavbarContent;
