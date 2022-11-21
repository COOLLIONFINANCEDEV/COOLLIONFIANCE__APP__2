import { useTheme } from "@emotion/react";
import { Box,Stack } from "@mui/material";
import React from "react";
import Projects from "../Containers/Projects";
import ProjectDetails from "./ProjectDetails";

const Home = () => {
  const { width } = useTheme();
  console.log(width);
  const homeStyle = {
    width: width,
    margin: "auto",
  };

  const [projectDetails, setProjectDetails] = React.useState(false);
  return (
    <>
      <Stack className="home" sx={homeStyle}>
        <Projects setProjectDetails={setProjectDetails} />
      </Stack>
      <ProjectDetails
        projectDetails={projectDetails}
        setProjectDetails={setProjectDetails}
      />
    </>
  );
};

export default Home;
