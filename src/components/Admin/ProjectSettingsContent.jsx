import {
  Box,
  Button,
  Divider,
  FormControl,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import FolderIcon from '@mui/icons-material/Folder';
import React from "react";

const ProjectSettingsContent = () => {
  const inputStyle = {
    width: "30%",
  };

  const DocumentStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    flexDirection: "column",
    rowGap: "15px",
    marginTop:'5vh',
  };
  return (
    <Box sx={{ width: "90%", margin: "5vh auto" }}>
      <Typography variant="h4">Project Settings</Typography>
      <Typography variant="h6">
        PROJECT INFORMATION{" "}
        <Typography
          variant="span"
          sx={{ fontSize: "0.8em", fontWeight: "bold" }}
        >
          * denotes a required field
        </Typography>
      </Typography>
      <Divider sx={{ marginBottom: "5vh" }} />
      <FormControl
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          width: "100%",
          rowGap: "5vh",
        }}
      >
        <Stack direction={"row"} columnGap="2rem">
          <TextField
            id="filled-basic"
            label="Project Name"
            variant="outlined"
            sx={{width:'100%'}}
            rows={"4"}
            disabled
          />
          <TextField
            id="filled-basic"
            label="Amount"
            variant="outlined"
            sx={inputStyle}
            rows={"4"}
            disabled

          />
        </Stack>
        <Stack direction={"row"} columnGap="2rem">
          <TextField
            id="filled-basic"
            label="Street address"
            variant="outlined"
            sx={{ width: "65%" }}
            rows={"4"}
            disabled

          />
          <TextField
            id="filled-basic"
            label="City"
            variant="outlined"
            sx={{ width: "30%" }}
            rows={"4"}
            disabled
          />
        </Stack>
        <Stack direction={"row"} columnGap="2rem">
          <TextField
            id="filled-basic"
            label="State/Province"
            variant="outlined"
            sx={{ width: "15%" }}
            rows={"4"}
            disabled

          />
          <TextField
            id="filled-basic"
            label="Postal code"
            variant="outlined"
            sx={{ width: "25%" }}
            disabled
            rows={"4"}
          />
        </Stack>
        <Button variant="contained">ADD MORE Text Field +</Button>
      </FormControl>

      <Box sx={DocumentStyle}>
      <Typography variant="h4">Document provided</Typography>
      <Button
        variant="outlined"
        component="label"
        sx={{ width: "100%", height: "150px" }}
        startIcon={<FolderIcon />}
      >
        choose a folder <br /> (Must be a .zip)
        <input hidden accept="image/*" multiple type="file" />
      </Button>
      <Button variant="contained" sx={{width:'100%'}}>ADD MORE +</Button>
    </Box>
    </Box>
  );
};

export default ProjectSettingsContent;
