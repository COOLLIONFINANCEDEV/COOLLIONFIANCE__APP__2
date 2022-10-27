import { useTheme } from "@emotion/react";
import { Box } from "@mui/material";
import React from "react";
import Projects from "../Containers/Projects";

const Home = () => {
  const { width } = useTheme();

  const homeStyle = {
    width: width,
    margin: "auto",
  };
  return (
    <Box className="home" sx={homeStyle}>
      <Projects />
    </Box>
  );
};

export default Home;
