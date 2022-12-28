import { useTheme } from "@emotion/react";
import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";
import CardPie from "../components/CardPie";
import FeaturedPlayListIcon from "@mui/icons-material/FeaturedPlayList";
import { useSelect } from "@mui/base";
import { selectLogin } from "../features/Login/LoginSlice";
import { useSelector } from "react-redux";

const Wallet = () => {
  const { palette, width } = useTheme();
  const WalletStyle = {
    margin: "0 auto 0 auto",
    marginTop: { xs: "4vh", md: "10vh" },
    width: width,
  };

  const WalletCardPie = {
    width: "100%",
    height: "100%",
    border: "1px solid",
    borderColor: palette.secondary.main,
    backgroundColor: palette.secondary.light,
    padding: "15px 10px",
    borderRadius: "10px",
  };

  const user = useSelector(selectLogin).user;
  const role = user.role;

  return (
    <Box sx={WalletStyle}>
      <Stack
        sx={WalletCardPie}
        justifyContent="space-around"
        alignItems="center"
        direction={"row"}
        flexWrap="wrap"
        rowGap="20px"
      >
        <Button
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            direction: "column",
            width: "100%",
            padding: "15px 10px",
          }}
          variant="outlined"
        >
          <Typography
            sx={{ fontWeight: "bold", marginRight: "30px" }}
            variant="h4"
          >
            Current Balance:
          </Typography>
          <Typography variant="h4">$729.00</Typography>
        </Button>
        <CardPie
          text={"Total transactions"}
          number={"03"}
          color="primary"
          logo={<FeaturedPlayListIcon fontSize="large" />}
          variant={"contained"}
        />
        <CardPie
          text={"Total payment"}
          number={"3500 $"}
          color="primary"
          logo={<FeaturedPlayListIcon fontSize="large" />}
          variant={"outlined"}
        />
        <CardPie
          text={"total withdrawals"}
          number={"1500 $"}
          color="success"
          logo={<FeaturedPlayListIcon fontSize="large" />}
          variant={"contained"}
        />
        <CardPie
          text={"total received"}
          number={"2000 $"}
          color="success"
          logo={<FeaturedPlayListIcon fontSize="large" />}
          variant={"outlined"}
        />
      </Stack>
    </Box>
  );
};

export default Wallet;
