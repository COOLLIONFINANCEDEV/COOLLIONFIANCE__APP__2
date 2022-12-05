import { Box, IconButton, Stack } from "@mui/material";
import React from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const ProjectDetailsControls = () => {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
      }}
    >
      <Stack
        direction={"row"}
        justifyContent={"flex-end"}
        alignItems={"center"}
        spacing='30px'
        sx={{
          width: '50%',
          marginTop: "15px",
          margin: "0",
          padding: "10px 10px 10px 25px",
        }}
      >
        <IconButton>
          <ArrowBackIosIcon color="primary" />
        </IconButton>
        <IconButton>
          <ArrowForwardIosIcon color="primary" />
        </IconButton>
      </Stack>
    </Box>
  );
};

export default ProjectDetailsControls;
