import {
  Box,
  Checkbox,
  FormControlLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import React from "react";
import PaymentByCardSetting from "./PaymentByCardSetting";
import MobileSettings from "./MobileSettings";
import moovMoneyImg from "../../assets/imgs/moovmoney.png";
import orangeMoneyImg from "../../assets/imgs/orangemoney.jpg";
import mtnMoneyImg from "../../assets/imgs/mtnmoney.png";
import SecuritySettingsConfirmPage from "./SecuritySettingsConfirmPage";

const PaymentSettings = ({ twoAuth = true }) => {
  const [confirmPage, setConfirmPage] = React.useState(false);
  const paymentSettingsStyle = {
    width: "90%",
    margin: "5vh auto",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    rowGap: "5vh",
  };

  const mobileMoney = [
    { name: "Moov Money", img: moovMoneyImg },
    { name: "Orange Money", img: orangeMoneyImg },
    { name: "MTN Money", img: mtnMoneyImg },
  ];

  const [mobileMoneySetting, setMobileMoneySetting] = React.useState(false);
  const [firstMethodeToPay, setFirstMethodeToPay] = React.useState("card");

  return (
    <>
      {confirmPage === false && twoAuth === true ? (
        <SecuritySettingsConfirmPage
          confirmEmail={setConfirmPage}
          title={"payment"}
        />
      ) : (
        <Box style={paymentSettingsStyle}>
          <Box sx={{ width: "100%" }}>
            <Typography variant="h4">Payment Methods</Typography>
          </Box>
          <Box sx={{ width: "100%" }}>
            <Typography>
              what will be your preferred method of payment ?
            </Typography>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={firstMethodeToPay}
              label="Country"
              onChange={(e) => setFirstMethodeToPay(e.target.value)}
              sx={{ width: "100%" }}
            >
              <MenuItem value={"card"}>CARD</MenuItem>
              <MenuItem value={"orange"}>ORANGE MONEY</MenuItem>
              <MenuItem value={"moov"}>MOOV MONEY</MenuItem>
              <MenuItem value={"mtn"}>MTN MONEY</MenuItem>
            </Select>
          </Box>
          <PaymentByCardSetting />
          <Box sx={{ width: "100%" }}>
            <FormControlLabel
              control={
                <Checkbox
                  onChange={() => setMobileMoneySetting((state) => !state)}
                  value={mobileMoneySetting}
                />
              }
              label="Do you want to change your Mobile Money setting ?"
            />
          </Box>
          <Box sx={{ width: "100%" }}>
            {mobileMoneySetting &&
              mobileMoney.map((mobileMoney, index) => {
                return (
                  <MobileSettings
                    key={index}
                    title={mobileMoney.name}
                    service={mobileMoney.name}
                    img={mobileMoney.img}
                  />
                );
              })}
          </Box>
        </Box>
      )}
    </>
  );
};

export default PaymentSettings;
