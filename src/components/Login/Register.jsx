import { Box, Button, TextField, Typography } from "@mui/material";
import React from "react";

const Register = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        rowGap: "10px",
      }}
    >
      <Typography variant="h2">Sign UP</Typography>
      <Typography variant="p" sx={{ marginBottom: "5vh" }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, nulla?
      </Typography>

      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          rowGap: "20px",
        }}
      >
        <TextField
          label="First Name"
          variant="outlined"
          sx={{ width: "95%" }}
        />
        <TextField label="Last Name" variant="outlined" sx={{ width: "95%" }} />
        <TextField label="Email" variant="outlined" sx={{ width: "95%" }} />
        <TextField label="Password" variant="outlined" sx={{ width: "95%" }} />
        <TextField
          label="Confirm Password"
          variant="outlined"
          sx={{ width: "95%" }}
        />
      </Box>

      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          rowGap: "10px",
          marginTop: "20px",
        }}
      >
        <Button variant="contained" sx={{ width: "95%" }}>
          Sign in
        </Button>
      </Box>
    </Box>
  );
};

export default Register;
