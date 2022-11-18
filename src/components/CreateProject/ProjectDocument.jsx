import FolderIcon from '@mui/icons-material/Folder';
import { Box, Button, Typography } from "@mui/material";
import React from "react";

const ProjectDocument = () => {
  const DocumentStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    flexDirection: "column",
    rowGap: "15px",
  };
  return (
    <Box sx={DocumentStyle}>
      <Typography variant="h6">Document provided</Typography>
      <Button
        variant="outlined"
        component="label"
        sx={{ width: "100%", height: "150px" }}
        startIcon={<FolderIcon />}
      >
        choose a folder <br /> (Must be a .zip)
        <input hidden accept="image/*" multiple type="file" />
      </Button>
    </Box>
  );
};

export default ProjectDocument;
