import { useTheme } from "@emotion/react";
import {
  Box,
  FormControl,
  Stack,
  TextareaAutosize,
  TextField,
} from "@mui/material";
import React from "react";

const ProjectInformation = () => {
  const { palette } = useTheme();
  const InformationStyle = {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <Box variant="form" sx={InformationStyle}>
      <FormControl sx={{ width: "90%" }}>
        <Stack
          direction={"row"}
          columnGap="5%"
          rowGap="25px"
          flexWrap={"wrap"}
          label="Street address"
        >
          <TextField
            size="small"
            sx={{ width: "100%" }}
            label="Name of the project"
          />
          <TextField size="small" sx={{ width: "47.5%" }} label="Amount" />
          <TextField
            size="small"
            sx={{ width: "47.5%" }}
            label="minimum Amount"
          />
          <TextField size="small" sx={{ width: "47.5%" }} label="Category" />
          <TextField
            size="small"
            sx={{ width: "47.5%" }}
            label="montant minimale"
          />
          <TextField size="small" sx={{ width: "47.5%" }} label="Country" />
          <TextField size="small" sx={{ width: "47.5%" }} label="City" />
          <TextareaAutosize
            id="filled-basic"
            placeholder="I loan because"
            style={{
              width: "100%",
              height: "100px",
              borderColor: palette.secondary.main,
              borderSize: "2px",
              borderRadius: "5px",
            }}
          />
        </Stack>
      </FormControl>
    </Box>
  );
};

export default ProjectInformation;
