import {
  Box,
} from "@mui/material";
import React from "react";
import ProjectContent from "../components/HomeProject/ProjectContent";
import ProjectOnglet from "../components/HomeProject/ProjectOnglet";

const Projects = ({ setProjectDetails }) => {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
          flexDirection: "row",
          margin: "auto",
          oveflow: "hidden",
          marginTop: "5vh",
        }}
      >
        <ProjectOnglet/>
        <ProjectContent setProjectDetails={setProjectDetails} />
      </Box>
    </>
  );
};

export default Projects;
