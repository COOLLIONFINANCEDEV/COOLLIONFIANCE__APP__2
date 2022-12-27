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
  };
  const [stateStep, setStateStep] = React.useState({
    state: true,
    information: {},
  });

  const handleStateStep = (state, information) => {
    setStateStep({ state: state, information: information });
  };
  const Steps = [
    {
      title: "Information Project",
      content: <ProjectInformation handleStateStep={handleStateStep} stateStep={stateStep.state}/>,
    },
    { title: "Project document", content: <ProjectDocument /> },
    { title: "project payment method", content: <ProjectPaiment /> },
  ];

  return (
    <Box style={CreateProjectStyle}>
      <CreateStepper
        stepsAndContent={Steps}
        handleClose={handleClose}
        stateStep={stateStep.state}
      />
    </Box>
  );
};

export default CreateProject;
