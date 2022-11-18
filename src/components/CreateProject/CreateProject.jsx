import { Box } from "@mui/material";
import React from "react";
import CreateStepper from "../CreateStepper/CreateStepper";
import ProjectDocument from "./ProjectDocument";
import ProjectInformation from "./ProjectInformation";
import ProjectPaiment from "./ProjectPaiment";

const CreateProject = ({ handleClose }) => {
  const CreateProjectStyle = {
    minWidth: "45vw",
    borberRadius: "10px",
    maxHeight:'100vh',
    oveflow:'scroll'
  };

  const Steps = [
    { title: "Information Project", content: <ProjectInformation /> },
    { title: "Project document", content: <ProjectDocument /> },
    { title: "project payment method", content: <ProjectPaiment /> },
  ];

  return (
    <Box style={CreateProjectStyle}>
      <CreateStepper stepsAndContent={Steps} handleClose={handleClose} />
    </Box>
  );
};

export default CreateProject;
