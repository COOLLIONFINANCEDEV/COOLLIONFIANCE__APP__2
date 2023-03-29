import { useTheme } from "@emotion/react";
import { Box, Button, Stack } from "@mui/material";
import React from "react";
import TabSelect from "../components/TabSelect";
import Register from "../components/Login/Register";
import Connect from "../components/Login/Connect";
import connectWallet from "../assets/icons/connectWallet.svg";
import { WalletComponent } from "../features/Wallet/WalletComponent";

const Login = () => {
  const [LoginOrRegister, setLoginOrRegister] = React.useState(false);
  const [value, setValue] = React.useState(0);

  const hanbleChange = React.useCallback(
    (item) => {
      setValue(item);
      value === 0 ? setLoginOrRegister(true) : setLoginOrRegister(false);
    },
    [setValue, value]
  );

  const { palette } = useTheme();

  const loginStyle = {
    marginTop: "15vh",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  };

  const LoginFormStyle = {
    width: "100%",
    maxWidth: { xs: "80%", md: "40%" },
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    border: "1px solid",
    borderColor: palette.secondary.main,
    borderRadius: "10px",
    flexDirection: "column",
    backgroundColor: palette.secondary.light,
    rowGap: "30px",
    padding: "5vh 3vw",
  };

  const TabWidth = {
    width: "50%",
  };

  return (
    <Box sx={loginStyle}>
      <Box sx={LoginFormStyle}>
        <TabSelect
          items={["Login", "Register"]}
          TabWidth={TabWidth}
          hanbleChange={hanbleChange}
          value={value}
        />
        {LoginOrRegister ? (
          <Register hanbleChange={hanbleChange} />
        ) : (
          <Connect />
        )}

        <Stack
          direction={"row"}
          flexWrap={"wrap"}
          justifyContent={"space-between"}
          spacing={5}
        >
          <WalletComponent />
        </Stack>
      </Box>
    </Box>
  );
};

export default Login;
