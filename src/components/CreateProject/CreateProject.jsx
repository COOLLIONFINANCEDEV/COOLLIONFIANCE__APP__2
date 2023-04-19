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
  };
  const Steps = [
    {
      title: "Project informations",
      content: (
        <ProjectInformation
          handleStateStep={handleStateStep}
          stateStep={stateStep.state}
        />
      ),
    },
    {
      title: "Project documents",
      content: (
        <ProjectDocument
          handleImages={handleImages}
          stateStep={stateStep.state}
        />
      ),
    },
    {
      title: "Project payment method",
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
        allInformation={stateStep}
      />
    </Box>
  );
};

export default CreateProject;
