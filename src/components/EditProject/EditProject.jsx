import { Box } from "@mui/material";
import React from "react";
import CreateStepper from "../CreateStepper/CreateStepper";
import ProjectDocument from "./ProjectDocument";
import ProjectInformation from "./ProjectInformation";
import ProjectPaiment from "./ProjectPaiment";

const EditProject = ({ handleClose }) => {
  const EditProjectStyle = {
    minWidth: "45vw",
    borberRadius: "10px",
   
  };

  const Steps = [
    { title: "Information Project", content: <ProjectInformation /> },
    { title: "Project document", content: <ProjectDocument /> },
    { title: "project payment method", content: <ProjectPaiment /> },
  ];

  return (
    <Box style={EditProjectStyle}>
      <CreateStepper stepsAndContent={Steps} handleClose={handleClose} />
    </Box>
  );
};

export default EditProject;
