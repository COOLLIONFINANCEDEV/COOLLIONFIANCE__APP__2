import { Box } from "@mui/material";
import logoBleu from "../../assets/icons/logoBleu.png";
import React from "react";

const Logo = ({ widthImg = 80 }) => {
  return (
    <Box sx={{ width: "80px" }}>
      <img src={logoBleu} alt="logo" style={{ width: `${widthImg}%` }} />
    </Box>
  );
};

export default Logo;
