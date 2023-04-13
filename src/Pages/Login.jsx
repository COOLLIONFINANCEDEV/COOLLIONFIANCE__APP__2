import { useTheme } from "@emotion/react";
import { Box, Stack } from "@mui/material";
import React from "react";
import TabSelect from "../components/TabSelect";
import Register from "../components/Login/Register";
import Connect from "../components/Login/Connect";
import { WalletComponent } from "../features/Wallet/WalletComponent";
import { useAccount } from "wagmi";
import WalletIsConnect from "../components/Login/WalletIsConnect";

const Login = () => {
  const [LoginOrRegister, setLoginOrRegister] = React.useState(false);
  const [value, setValue] = React.useState(0);
  const [userInfo, setUserInfo] = React.useState(undefined);
  const [address, setAddress] = React.useState(undefined);
  const { isConnected } = useAccount();

  const hanbleChange = React.useCallback(
    (item, userInfo) => {
      setValue(item);
      value === 0 ? setLoginOrRegister(true) : setLoginOrRegister(false);
      setUserInfo(userInfo);
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
    maxWidth: { xs: "80%", md: "50%" },
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

  const handleContinueWithAddress = (add) => {
    setAddress(add);
  };

  return (
    <Box sx={loginStyle}>
      <Box sx={LoginFormStyle}>
        {/* if wallet is connected and user choose to continued with this wallet */}
        {isConnected && address === undefined ? (
          <WalletIsConnect
            handleContinueWithAddress={handleContinueWithAddress}
          />
        ) : (
          <>
            <TabSelect
              items={["Login", "Register"]}
              TabWidth={TabWidth}
              hanbleChange={hanbleChange}
              value={value}
            />
            {LoginOrRegister ? (
              <Register hanbleChange={hanbleChange} />
            ) : (
              <Connect address={address} {...userInfo} />
            )}

            <Stack
              direction={"row"}
              flexWrap={"wrap"}
              justifyContent={"space-between"}
              spacing={5}
            >
              <WalletComponent hanbleChange={hanbleChange} />
            </Stack>
          </>
        )}
      </Box>
    </Box>
  );
};

export default Login;
