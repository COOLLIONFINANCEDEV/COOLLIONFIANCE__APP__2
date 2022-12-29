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
    state: false,
    information: {},
    images: [],
  });

  const handleStateStep = (state, information) => {
    setStateStep({
      state: state,
      information: information,
      images: stateStep?.images,
    });
    localStorage.setItem(
      "createProject",
      JSON.stringify({
        state: state,
        information: information,
        images: stateStep?.images,
      })
    );
  };

  const handleStep = (state) => {
    setStateStep((state) => {
      state = {
        state: false,
        information: state.information,
        images: state?.images,
      };
      return state;
    });
  };

  const handleImages = (images) => {
    setStateStep((state) => {
      state = {
        state: true,
        information: state.information,
        images: images,
      };
      return state;
    });
    localStorage.setItem("createProject", JSON.stringify(stateStep));
  };
  const Steps = [
    {
      title: "Information Project",
      content: (
        <ProjectInformation
          handleStateStep={handleStateStep}
          stateStep={stateStep.state}
        />
      ),
    },
    {
      title: "Project document",
      content: (
        <ProjectDocument
          handleImages={handleImages}
          stateStep={stateStep.state}
        />
      ),
    },
    {
      title: "project payment method",
      content: (
        <ProjectPaiment
          handleAccpet={() => {
            setStateStep((state) => {
              state = {
                state: true,
                information: state.information,
                images: state.images,
              };
              return state;
            });
          }}
        />
      ),
    },
  ];

  return (
    <Box style={CreateProjectStyle}>
      <CreateStepper
        stepsAndContent={Steps}
        handleClose={handleClose}
        stateStep={stateStep.state}
        handleStep={handleStep}
      />
    </Box>
  );
};

export default CreateProject;
