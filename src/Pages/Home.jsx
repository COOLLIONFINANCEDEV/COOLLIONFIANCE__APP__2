import { useTheme } from "@emotion/react";
import { Box } from "@mui/material";
import React from "react";

const Home = () => {
  const { size } = useTheme();

  const homeStyle = {
    width: {
      xs: size.mobile,
      sm: size.tablet,
      md: size.desktop,
      lg: size.largeDesktop,
    },
    margin: "auto",
  };
  return <Box className="home" sx={homeStyle}></Box>;
};

export default Home;
