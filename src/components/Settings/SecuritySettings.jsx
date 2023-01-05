import { useTheme } from "@emotion/react";
import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { selectLogin } from "../../features/Login/LoginSlice";
import randomkey from "../../Helpers/randomKey";
import CreateModal from "../Modal/CreateModal";
import ChangeUser from "./ChangeUser";
// import SecuritySettingsConfirmPage from "./SecuritySettingsConfirmPage";
const changeUserContent = {
  password: {
    title: "password change",
    subTitle: "enter your last password and your new password for the update",
  },
  email: {
    title: "email change",
    subTitle: "enter your new account email",
  },
  twoFa: {
    title: (twoFa) => {
      return twoFa === false ? "enable" : "disable";
    },
    subTitle: "make your choice",
  },
};
const SecuritySettings = () => {
  // const [confirmPage, setConfirmPage] = React.useState(false);
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
  const [towFactorStatus, settowFactorStatus] = React.useState([]);
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
    settowFactorStatus((state) => {
      return [...state, { state: true }];
    });
  };

  return (
    <>
      {towFactorStatus.map((item) => {
        return (
          item.state !== false && (
            <CreateModal
              ModalContent={ChangeUser}
              MakeOpen={true}
              key={randomkey()}
              ContentProps={{
                hanbleChange: hanbleChange,
                content: {
                  title: changeUserContent.password.title,
                  description: changeUserContent.password.subTitle,
                },
                type: "password",
              }}
            />
          )
        );
      })}
      <Box style={securityContentPageStyle}>
        <Box sx={{ width: "80%" }}>
          <Typography variant="h4">Security and login</Typography>
        </Box>

        <Box style={securityContentPageBlockStyle}>
          <Typography variant="h5">Password</Typography>
          <Typography>
            Clicking this button will send you a verification email.
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
      </Box>
    </>
  );
};

const ChangeEmail = ({ hanbleChange }) => {
  const user = useSelector(selectLogin).user;
  const [towFactorStatus, settowFactorStatus] = React.useState([]);

  function handlePassword() {
    settowFactorStatus((state) => {
      return [...state, { state: true }];
    });
  }
  return (
    <>
      {towFactorStatus.map((item) => {
        return (
          item.state !== false && (
            <CreateModal
              ModalContent={ChangeUser}
              MakeOpen={true}
              ContentProps={{
                hanbleChange: hanbleChange,
                content: {
                  title: changeUserContent.email.title,
                  description: changeUserContent.email.subTitle,
                },
                type: "email",
              }}
            />
          )
        );
      })}
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
          Current email address: <b>{user.email}</b>
        </Typography>
        <Typography>
          Use this address to login and to receive messages from Cool Lion
          Fiance.
        </Typography>
        <Typography>
          If you would like to change the email address on your Cool Lion Fiance
          account, click the button below.
        </Typography>
        <Button variant="contained" onClick={handlePassword}>
          Request Change
        </Button>
      </Box>

      <T2fa />
    </>
  );
};

const T2fa = ({ hanbleChange }) => {
  const user = useSelector(selectLogin).user;
  const { palette } = useTheme();

  const [towFactorStatus, settowFactorStatus] = React.useState([]);

  function handlePassword() {
    settowFactorStatus((state) => {
      return [...state, { state: true }];
    });
  }

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
      {towFactorStatus.map((item) => {
        return (
          item.state !== false && (
            <CreateModal
              ModalContent={ChangeUser}
              MakeOpen={true}
              ContentProps={{
                hanbleChange: hanbleChange,
                content: {
                  title: `${changeUserContent.twoFa.title(
                    user.two_fa
                  )} your two-factor verification`,
                  description: changeUserContent.twoFa.subTitle,
                },
                type: "boolean",
              }}
            />
          )
        );
      })}
      <Box style={securityContentPageBlockStyle}>
        <Typography variant="h5">2-Step verification</Typography>
        <Typography variant="h6">
          Status:{" "}
          <Typography
            variant="span"
            sx={{ fontWeight: "bold", color: palette.primary.main }}
          >
            {user.two_fa === false && "OFF"}
            {user.two_fa === true && "ON"}
          </Typography>
        </Typography>
        <Typography>
          Protect your Cool Lion Fiance account with an extra layer of security
          by requiring Two-factor authentication. Once configured, you will need
          to enter both your password and an authentication code sent to your
          email address in order to access your account.
        </Typography>
        <Button
          variant="contained"
          sx={{ width: "40%" }}
          onClick={handlePassword}
        >
          Manage 2-step verification
        </Button>
      </Box>
    </>
  );
};

export default SecuritySettings;
