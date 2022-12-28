import { Box, Button, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import { useSelector } from "react-redux";
import { selectLogin } from "../../features/Login/LoginSlice";

const ProjectPaiment = () => {
  const PaimentStyle = {
    width: "90%",
    margin: "5vh auto",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    rowGap: "5vh",
  };

  const informationStyle = {
    fontWeigth: "bold",
    fontSize: "1.2rem",
  };

  const user = useSelector(selectLogin).user;
  const paymentInformation = [...user.companies][[...user.companies].length - 1]
    ?.payment_information;
  return (
    <Box sx={PaimentStyle}>
      <Typography variant="h4">Payment Information</Typography>
      <Box sx={informationStyle}>
        <Typography sx={informationStyle}>
          Here is the payment information received from your company.
        </Typography>
        <Typography sx={informationStyle}>
          In case of bad information you can modify it in the parameters.
        </Typography>
      </Box>
      <Button
        variant="outlined"
        component="label"
        sx={{
          width: "100%",
          height: "150px",
        }}
      >
        <Stack alignItems={"center"} justifyContent={"space-between"}>
          <Typography sx={{ fontSize: "0.8rem" }}>
            {" "}
            this is information that will be used for all transactions between
            our two companies
          </Typography>
          <Typography
            sx={{
              letterSpacing: "10px",
              fontSize: "1.6rem",
              textTransform: "uppercase",
            }}
          >
            {paymentInformation.toString()}
          </Typography>
        </Stack>
      </Button>
    </Box>
  );
};

export default ProjectPaiment;
