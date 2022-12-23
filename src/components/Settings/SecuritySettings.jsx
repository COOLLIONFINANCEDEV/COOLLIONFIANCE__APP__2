import { useTheme } from "@emotion/react";
import { Box, Button, Typography } from "@mui/material";
import React from "react";
import CreateModal from "../Modal/CreateModal";
import ChangeUser from "./ChangeUser";
import SecuritySettingsConfirmPage from "./SecuritySettingsConfirmPage";

const SecuritySettings = () => {
  const [confirmPage, setConfirmPage] = React.useState(false);
  const securityStyle = {
    width: "100%",
  };

  return (
    <Box style={securityStyle}>
      {/* {confirmPage === false ? (
        <SecuritySettingsConfirmPage
          confirmEmail={setConfirmPage}
          title={"security"}
        />
      ) : ( */}
      <SecuritySettingsContentPage />
      {/* )} */}
    </Box>
  );
};

const SecuritySettingsContentPage = ({ hanbleChange }) => {
  const { palette } = useTheme();
  const [towFactorStatus, settowFactorStatus] = React.useState({
    status: false,
  });
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

  const handlePassword = () => {
    settowFactorStatus({
      status: true,
    });
  };
  return (
    <>
      {towFactorStatus.status !== false && (
        <CreateModal
          ModalContent={ChangeUser}
          MakeOpen={true}
          ContentProps={{
            hanbleChange: hanbleChange,
            content: {
              title: "2fa",
              description: "juste unpeu",
            },
              type: "password",

          }}
        />
      )}
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
          <Button
            variant="contained"
            sx={{ width: "40%" }}
            onClick={handlePassword}
          >
            Change Password
          </Button>
        </Box>

        <Box style={securityContentPageBlockStyle}>
          <ChangeEmail />
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
            Protect your Cool Lion Fiance account with an extra layer of
            security by requiring access to your phone. Once configured, you'll
            be required to enter both your password and an authenication code
            from your mobile phone in order to access your account.
          </Typography>
          <Button variant="contained" sx={{ width: "40%" }}>
            Manage 2-step verification
          </Button>
        </Box>
      </Box>
    </>
  );
};

const ChangeEmail = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
          flexDirection: "column",
          rowGap: "3vh",
        }}
      >
        <Typography variant={"h5"}>Email</Typography>
        <Typography>
          Current email address: <b>ibrahimsyllac196@gmail.com</b>
        </Typography>
        <Typography>
          Use this address to login and to receive messages from Cool Lion
          Fiance.
        </Typography>
        <Typography>
          If you would like to change the email address on your Cool Lion Fiance
          account, click the button below. Clicking this button will send a
          verification email to your current email address. You will need to
          click the link in that email to confirm that you want to change your
          email address. If you cannot access your old email address, please get
          in touch at dev@coollionfi.com.
        </Typography>
        <Button variant="contained">Request Change</Button>
      </Box>
    </>
  );
};

export default SecuritySettings;
