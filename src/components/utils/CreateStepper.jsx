import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const CreateStepper = ({ stepsAndContent,handleClose }) => {
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  // const handleReset = () => {
  //   setActiveStep(0);
  // };

  console.log(stepsAndContent);
  return (
    <Box sx={{ width: "100%" }}>
      <CreateStepperStepper activeStep={activeStep} steps={stepsAndContent} />
      {activeStep === stepsAndContent.length ? (
        <CreateStepperFinishContent handleClose={handleClose} />
      ) : (
        <CreateStepperStepContent
          activeStep={activeStep}
          handleNext={handleNext}
          handleBack={handleBack}
          stepsAndContent={stepsAndContent}
        />
      )}
    </Box>
  );
};

const CreateStepperFinishContent = ({ handleClose }) => {
  return (
    <React.Fragment>
      <Typography sx={{ mt: 2, mb: 1 }}>
        All steps completed - you&apos;re finished
      </Typography>
      <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
        <Box sx={{ flex: "1 1 auto" }} />
        <Button onClick={handleClose}>Close</Button>
      </Box>
    </React.Fragment>
  );
};

const CreateStepperStepContent = ({
  activeStep,
  handleNext,
  handleBack,
  stepsAndContent,
}) => {
  const [content, setContent] = React.useState(
    stepsAndContent[activeStep].content
  );

  React.useEffect(() => {
    setContent(stepsAndContent[activeStep].content);
  }, [stepsAndContent, activeStep]);

  return (
    <React.Fragment>
      {content}
      <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
        <Button
          color="inherit"
          disabled={activeStep === 0}
          onClick={handleBack}
          sx={{ mr: 1 }}
        >
          Back
        </Button>
        <Box sx={{ flex: "1 1 auto" }} />

        <Button onClick={handleNext}>
          {activeStep === stepsAndContent.length - 1 ? "Finish" : "Next"}
        </Button>

      </Box>
    </React.Fragment>
  );
};

const CreateStepperStepper = ({ activeStep, steps }) => {
  return (
    <Stepper activeStep={activeStep}>
      {steps.map((items, index) => {
        return (
          <Step key={index}>
            <StepLabel>{items.title}</StepLabel>
          </Step>
        );
      })}
    </Stepper>
  );
};

export default CreateStepper;
