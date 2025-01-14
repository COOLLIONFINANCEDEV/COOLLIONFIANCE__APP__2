import { Box, Button, Skeleton, Typography } from "@mui/material";
import React from "react";
import { useAccount, useDisconnect } from "wagmi";
import WalletIcon from "@mui/icons-material/Wallet";


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
              {connector?.name}
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

export default WalletIsConnect;
