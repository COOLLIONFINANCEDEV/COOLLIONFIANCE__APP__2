import { Box, Typography } from "@mui/material";
import React from "react";
import UploadDocument from "../Form/UploadDocument";

const ProjectDocument = () => {
  const DocumentStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    flexDirection: "column",
    rowGap: "15px",
  };
  const [image, setImage] = React.useState();

  return (
    <Box sx={DocumentStyle}>
      <Typography variant="h5">Document provided</Typography>
      <UploadDocument imageSelected={(value) => setImage(value)} />
    </Box>
  );
};

export default ProjectDocument;
