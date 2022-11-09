import { Box, Typography } from "@mui/material";
import React from "react";
import PaymentByCardSetting from "./PaymentByCardSetting";
import MobileSettings from "./MobileSettings";
import moovMoneyImg from "../assets/imgs/moovmoney.png";
import orangeMoneyImg from "../assets/imgs/orangemoney.jpg";
import mtnMoneyImg from "../assets/imgs/mtnmoney.png";
import SecuritySettingsConfirmPage from "./SecuritySettingsConfirmPage";

const PaymentSettings = () => {
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

  return (
    <>
      {confirmPage === false ? (
        <SecuritySettingsConfirmPage
          confirmEmail={setConfirmPage}
          title={"payment"}
        />
      ) : (
        <Box style={paymentSettingsStyle}>
          <Box sx={{ width: "100%" }}>
            <Typography variant="h4">Payment Methods</Typography>
          </Box>
          <PaymentByCardSetting />
          {mobileMoney.map((mobileMoney, index) => {
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
      )}
    </>
  );
};

export default PaymentSettings;
