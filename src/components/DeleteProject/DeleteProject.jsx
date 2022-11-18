import { Box, Button, TextField, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";

const DeleteProject = () => {
  const deleteStyle = {
    minWidth: "30vw",
    minHeight: "30vh",
    borberRadius: "10px",
  };
  return (
    <Box sx={deleteStyle}>
      <Stack rowGap="20px">
        <Typography variant="h6" color={'error'}>Are you absolutely sure?</Typography>
        <Typography>
          This action cannot be undone. This will permanently delete the
          <Typography variant="span" sx={{ fontWeight: "bold" }}>
            COOLLIONFINANCEDEV
          </Typography>{" "}
          project, amount, Contributing lenders, Contributing lending teams,
          packages, secrets, workflow runs, and remove all team associations.
        </Typography>
        <Typography>
          Please type{" "}
          <Typography variant="span" sx={{ fontWeight: "bold" }}>
            COOLLIONFINANCEDEV/BORROWER
          </Typography>{" "}
          to confirm.
        </Typography>
      </Stack>

      <Stack rowGap="" alignItems="center">
        <TextField size="small" sx={{ width: "100%" }} />\
        <Button variant="contained" size="small" color='error'>
          {" "}
          I understand the consequence, delete this project
        </Button>
      </Stack>
    </Box>
  );
};

export default DeleteProject;
