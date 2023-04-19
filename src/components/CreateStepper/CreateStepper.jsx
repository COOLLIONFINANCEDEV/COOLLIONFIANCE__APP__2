import * as React from "react";
import Box from "@mui/material/Box";
import CreateStepperFinishContent from "./CreateStepperFinishContent";
import CreateStepperStepContent from "./CreateSteppersStepContent";
import CreateStepperStepper from "./CreateStepperStepper";

const CreateStepper = ({
  stepsAndContent,
  handleClose,
  stateStep,
  handleStep,
  allInformation,
}) => {
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    if (stateStep === true) {
      let newSkipped = skipped;
      if (isStepSkipped(activeStep)) {
        newSkipped = new Set(newSkipped.values());
        newSkipped.delete(activeStep);
      }

      setActiveStep((prevActiveStep) => prevActiveStep + 1);
      setSkipped(newSkipped);
      handleStep(false);
      console.log(stateStep);
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  // const handleReset = () => {
  //   setActiveStep(0);
  // };

  return (
    <Box sx={{ width: "100%" }}>
      <CreateStepperStepper activeStep={activeStep} steps={stepsAndContent} />
      {activeStep === stepsAndContent.length ? (
        <CreateStepperFinishContent
          handleClose={handleClose}
          allInformation={allInformation}
        />
      ) : (
        <CreateStepperStepContent
          activeStep={activeStep}
          handleNext={handleNext}
          handleBack={handleBack}
          stepsAndContent={stepsAndContent}
          stateStep={stateStep}
        />
      )}
    </Box>
  );
};

export default CreateStepper;
