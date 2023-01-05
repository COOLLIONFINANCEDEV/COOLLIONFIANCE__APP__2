import { Divider, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import CompanyInfo from "./CompanyInfo";
import UserInfo from "./UserInfo";

const AccountSettings = () => {
  return (
    <Box sx={{ width: "90%", margin: "5vh auto" }}>
      <Typography variant="h4">Account Settings</Typography>
      <Typography variant="h6">
        Personal Info{" "}
        <Typography
          variant="span"
          sx={{ fontSize: "0.8em", fontWeight: "bold" }}
        >
          * denotes a required field
        </Typography>
      </Typography>
      <Divider sx={{ marginBottom: "5vh" }} />
      <UserInfo />
      <CompanyInfo />
    </Box>
  );
};

export default AccountSettings;
