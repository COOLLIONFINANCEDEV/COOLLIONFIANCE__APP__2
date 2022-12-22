import { useTheme } from "@emotion/react";
import { Stack } from "@mui/material";
import axios from "axios";
import React from "react";
import Projects from "../Containers/Projects";
import ProjectDetails from "./ProjectDetails";

const Home = () => {
  const { width } = useTheme();
  const homeStyle = {
    width: width,
    margin: "auto",
  };
  
  axios.get(`https://api.coollionfi.com/v1.1/role/list`).then((res) => {
    console.log(res);
  });

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
