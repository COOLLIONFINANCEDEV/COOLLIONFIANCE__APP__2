import { useTheme } from "@emotion/react";
import { Box, Button, Typography } from "@mui/material";
import React from "react";
import SecuritySettingsConfirmPage from "./SecuritySettingsConfirmPage";

const SecuritySettings = () => {
  const [confirmPage, setConfirmPage] = React.useState(false);
  const securityStyle = {
    width: "100%",
  };

  return (
    <Box style={securityStyle}>
      {confirmPage === false ? (
        <SecuritySettingsConfirmPage
          confirmEmail={setConfirmPage}
          title={"security"}
        />
      ) : (
        <SecuritySettingsContentPage />
      )}
    </Box>
  );
};

const SecuritySettingsContentPage = () => {
  const { palette } = useTheme();
  const securityContentPageStyle = {
    margin: "20px 0",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    rowGap: "50px",
  };

  const securityContentPageBlockStyle = {
    width: "80%",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    flexDirection: "column",
    rowGap: "20px",
  };
  return (
    <>
      <Box style={securityContentPageStyle}>
        <Box sx={{ width: "80%" }}>
          <Typography variant="h4">Security and login</Typography>
        </Box>

        <Box style={securityContentPageBlockStyle}>
          <Typography variant="h5">Password</Typography>
          <Typography variant="p">
            Clicking this button will send you a verification email. As a final
            step in this process, you'll need to click the link in that email to
            successfully update your account password.
          </Typography>
          <Button variant="contained" sx={{ width: "40%" }}>
            Change Password
          </Button>
        </Box>

        <Box style={securityContentPageBlockStyle}>
          <Typography variant="h5">2-Step verification</Typography>
          <Typography variant="h6">
            Status:{" "}
            <Typography
              variant="span"
              sx={{ fontWeight: "bold", color: palette.primary.main }}
            >
              Off
            </Typography>
          </Typography>
          <Typography variant="p">
            Protect your Kiva account with an extra layer of security by
            requiring access to your phone. Once configured, you'll be required
            to enter both your password and an authenication code from your
            mobile phone in order to access your account.
          </Typography>
          <Button variant="contained" sx={{ width: "40%" }}>
            Manage 2-step verification
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default SecuritySettings;
