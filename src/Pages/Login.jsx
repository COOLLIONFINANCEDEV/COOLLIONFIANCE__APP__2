import { useTheme } from "@emotion/react";
import { Box, Button, Skeleton, Stack, Typography } from "@mui/material";
import React from "react";
import TabSelect from "../components/TabSelect";
import Register from "../components/Login/Register";
import Connect from "../components/Login/Connect";
import { WalletComponent } from "../features/Wallet/WalletComponent";
import { useAccount, useDisconnect } from "wagmi";
import WalletIcon from "@mui/icons-material/Wallet";

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

const WalletIsConnect = ({ handleContinueWithAddress }) => {
  const { address, connector, isConnected } = useAccount();
  const { disconnect } = useDisconnect();
  const [wait, setWait] = React.useState(false);

  setTimeout(() => {
    setWait(true);
  }, 1000);

  return (
    <Box
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        rowGap: "10px",
        minWidth: "80%",
      }}
    >
      {isConnected && wait && (
        <>
          <Typography variant="h5" textAlign={"center"}>
            Do you want to continue with{" "}
            <Typography component={"span"} color={"primary"} variant="h4">
              {connector.name}
            </Typography>
          </Typography>
          <Button
            startIcon={<WalletIcon />}
            variant="outlined"
            sx={{
              width: "100%",
              margin: "10px 5px",
              textAlign: "center",
              display: { xs: "block", md: "none" },
            }}
            size="large"
          >
            Address: <br />
            {address.slice(0, 10)}..............
          </Button>
          <Button
            startIcon={<WalletIcon />}
            variant="outlined"
            sx={{
              width: "100%",
              margin: "10px 5px",
              textAlign: "center",
              display: { xs: "none", md: "block" },
            }}
            size="large"
          >
            Address <br />
            {address.slice(0, 5)} ..............
            {address.split("").reverse().slice(0, 5).join("")}
          </Button>
          <Button
            variant="contained"
            size="small"
            onClick={() => handleContinueWithAddress(address)}
          >
            Yes, I want to continue with my wallet
          </Button>
          <Button size="small" onClick={disconnect}>
            No, I want to use another method
          </Button>
        </>
      )}
      {wait === false && (
        <>
          <Skeleton variant="rectangular" height={60} width={"100%"} />{" "}
          <Skeleton variant="rectangular" height={50} width={"100%"} />
          <Skeleton variant="rounded" width={"80%"} height={20} />
          <Skeleton variant="rounded" width={"80%"} height={20} />
        </>
      )}
    </Box>
  );
};

export default Login;
