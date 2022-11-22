import { useTheme } from "@emotion/react";
import { Box } from "@mui/material";
import React from "react";

const ProjectDetailsImg = () => {
  const { palette } = useTheme();
  return (
    <Box
      sx={{
        width: "cacl(100% - 20px)",
        border: "1px solid",
        borderColor: palette.secondary.main,
        backgroundColor: palette.secondary.light,
        padding: "15px",
        borderRadius: "15px",
        marginTop: "15px",
        display: "flex",
        justifyContent: "center",
        alignitems: "center",
      }}
    >
      <img
        src="https://source.unsplash.com/random?family"
        alt="exemple"
        style={{ maxHeight: "50vh", borderRadius: "15px" }}
      />
    </Box>
  );
};

export default ProjectDetailsImg;
