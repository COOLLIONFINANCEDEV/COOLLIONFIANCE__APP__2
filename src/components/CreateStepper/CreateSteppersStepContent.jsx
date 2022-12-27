import { Box, Button } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import React from "react";

const CreateStepperStepContent = ({
  activeStep,
  handleNext,
  handleBack,
  stepsAndContent,
  stateStep,
}) => {
  const [content, setContent] = React.useState(
    stepsAndContent[activeStep].content
  );

  React.useEffect(() => {
    setContent(stepsAndContent[activeStep].content);
  }, [stepsAndContent, activeStep]);

  const contentStyle = {
    margin: "5vh auto",
  };

  return (
    <Box sx={contentStyle}>
      {content}
      <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
        <Button
          disabled={activeStep === 0}
          onClick={handleBack}
          sx={{ mr: 1 }}
          variant="outlined"
          color="primary"
          startIcon={<ChevronLeftIcon />}
        >
          Back
        </Button>
        <Box sx={{ flex: "1 1 auto" }} />

        <Button
          onClick={handleNext}
          variant="contained"
          endIcon={<NavigateNextIcon />}
          disabled={!stateStep}
        >
          {activeStep === stepsAndContent.length - 1 ? "Finish" : "Next"}
        </Button>
      </Box>
    </Box>
  );
};

export default CreateStepperStepContent;
