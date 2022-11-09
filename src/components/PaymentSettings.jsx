import {
  Box,
  Button,
  FormControl,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import { Stack } from "@mui/system";
import cardVisaImg from "../assets/imgs/visa.png";
import DeleteIcon from "@mui/icons-material/Delete";
import React from "react";
import { useTheme } from "@emotion/react";
import AddCardIcon from "@mui/icons-material/AddCard";
import CreditScoreIcon from "@mui/icons-material/CreditScore";
import EditIcon from "@mui/icons-material/Edit";
import PaymentByCardSetting from "./PaymentByCardSetting";

const PaymentSettings = () => {
  const paymentSettingsStyle = {
    width: "90%",
    margin: "5vh auto",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    rowGap: "5vh",
  };

  return (
    <Box style={paymentSettingsStyle}>
      <Box sx={{ width: "100%" }}>
        <Typography variant="h4">Payment Methods</Typography>
      </Box>
      <PaymentByCardSetting/>
    </Box>
  );
};


export default PaymentSettings;
