import { useTheme } from "@emotion/react";
import { Box, Typography } from "@mui/material";
import React from "react";

const ProjectDetailsStory = ({ offer }) => {
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
      id="story"
    >
      <Box
        sx={{
          width: "80%",
          display: "flex",
          justifyContent: "center",
          alignitems: "center",
          flexDirection: "column",
          rowGap: "15px",
        }}
      >
        <Typography
          sx={{
            fontWeight: "bold",
            textTransform: "capitalize",
            textAlign: "center",
          }}
          variant="h5"
        >
          Project Story
        </Typography>
        <Typography
          sx={{
            textAlign: "justify",
          }}
        >
          {offer?.story}
        </Typography>
      </Box>
    </Box>
  );
};

export default ProjectDetailsStory;
