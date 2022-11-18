import { Step, StepLabel, Stepper } from "@mui/material";
import React from "react";

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

export default CreateStepperStepper;
