import { Box, Typography } from "@mui/material";
import React from "react";
import UploadDocument from "../Form/UploadDocument";

const ProjectDocument = ({ handleImages }) => {
  const DocumentStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    flexDirection: "column",
    rowGap: "15px",
  };

  return (
    <Box sx={DocumentStyle}>
      <Typography variant="h5">Document provided</Typography>
      <UploadDocument
        uploadImages={(images) => {
          handleImages(images);
        }}
      />
    </Box>
  );
};

export default ProjectDocument;
