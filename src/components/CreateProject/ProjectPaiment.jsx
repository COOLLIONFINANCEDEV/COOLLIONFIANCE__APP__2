import { Alert, Box, Button, Typography } from "@mui/material";
import React from "react";
import AppContent from "../../Seeds/AppContent";

const ProjectPaiment = ({ handleAccpet }) => {
  const PaimentStyle = {
    width: "90%",
    margin: "5vh auto",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    rowGap: "5vh",
  };

  const informationStyle = {
    fontWeigth: "bold",
    fontSize: "1.2rem",
  };

  return (
    <Box sx={PaimentStyle}>
      <Typography variant="h4">Payment Information</Typography>
      <Box sx={informationStyle}>
        <Alert severity="info">{AppContent.alert.CreateProjectPaiment}</Alert>
      </Box>

      <Button sx={{ width: "100%" }} variant="contained" onClick={handleAccpet}>
        GOT IT
      </Button>
    </Box>
  );
};

export default ProjectPaiment;
