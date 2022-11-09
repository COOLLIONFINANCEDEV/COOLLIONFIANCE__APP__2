import { Button, Typography, Box } from "@mui/material";
import React from "react";

const SecuritySettingsConfirmPage = ({ confirmEmail, title }) => {
  const securityConfirmPage = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    rowGap: "5vh",
    margin: "20px 0",
  };
  return (
    <>
      <Box style={securityConfirmPage}>
        <Typography variant="h3">Email verification required</Typography>
        <Typography variant="h6">
          To ensure your safety, we added an extra layer of security.
        </Typography>
        <Typography variant="h6">
          Once we verify your account, you can continue managing your {title}{" "}
        settings!
        </Typography>
        <Button
          variant="contained"
          fontSize={"large"}
          size="large"
          onClick={() => confirmEmail((state) => !state)}
        >
          Send Verification Link
        </Button>
      </Box>
    </>
  );
};

export default SecuritySettingsConfirmPage;
