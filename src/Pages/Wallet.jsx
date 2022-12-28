import { useTheme } from "@emotion/react";
import { Box } from "@mui/material";
import React from "react";

const Wallet = () => {
  const { palette, width } = useTheme();
  const WalletStyle = {
    margin: "0 auto 0 auto",
    marginTop: { xs: "4vh", md: "10vh" },
    width: width,
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
  };
  return (
    <Box sx={WalletStyle}>
      <Box></Box>
    </Box>
  );
};

export default Wallet;
