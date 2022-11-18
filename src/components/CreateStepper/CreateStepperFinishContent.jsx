import { Box, Button, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import React from "react";

const CreateStepperFinishContent = ({ handleClose }) => {
  return (
    <React.Fragment>
      <Typography sx={{ mt: 2, mb: 1 }}>
        All steps completed - you&apos;re finished
      </Typography>
      <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
        <Box sx={{ flex: "1 1 auto" }} />
        <Button
          onClick={handleClose}
          endIcon={<CloseIcon />}
          variant={"contained"}
        >
          Close
        </Button>
      </Box>
    </React.Fragment>
  );
};

export default CreateStepperFinishContent;
