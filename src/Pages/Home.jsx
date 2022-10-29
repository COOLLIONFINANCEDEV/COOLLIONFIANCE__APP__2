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

  const [projectDetails, setProjectDetails] = React.useState(false);
  return (
   <>
    <Box className="home" sx={homeStyle}>
      <Projects setProjectDetails={setProjectDetails}/>
    </Box>
    <ProjectDetails projectDetails={projectDetails} setProjectDetails={setProjectDetails}/>
    </>
  );
};

export default Home;
