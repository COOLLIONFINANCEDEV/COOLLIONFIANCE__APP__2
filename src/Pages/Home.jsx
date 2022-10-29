import { useTheme } from "@emotion/react";
import { Box } from "@mui/material";
import React from "react";
import Projects from "../Containers/Projects";
import ProjectDetails from "./ProjectDetails";

const Home = () => {
  const { width } = useTheme();

  const homeStyle = {
    width: width,
    margin: "auto",
  };
  return (
   <>
    <Box className="home" sx={homeStyle}>
      <Projects />
    </Box>
    <ProjectDetails />
    </>
  );
};

export default Home;
