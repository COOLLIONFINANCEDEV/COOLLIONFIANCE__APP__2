import {
  Box,
  Button,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
// eslint-disable-next-line no-unused-vars
import { useDispatch } from "react-redux";
import InvestmentRule from "../../Context/Concept/InvestmentRule";
// eslint-disable-next-line no-unused-vars
import randomkey from "../../Helpers/randomKey";

const Payment = () => {
  const deleteStyle = {
    minWidth: "30vw",
    minHeight: "30vh",
    borberRadius: "10px",
  };
  const [price, setPrice] = React.useState(InvestmentRule.minPay);
  const [error, setError] = React.useState({
    state: false,
    message: "",
  });

  const handleError = React.useCallback(
    (price) => {
      if (parseInt(price) < InvestmentRule.minPay) {
        setError({
          state: true,
          message: "the minimum amount is $25",
        });
      } else {
        setError({
          state: false,
          message: "",
        });
      }
    },
    [setError]
  );

  // eslint-disable-next-line no-unused-vars
  const handleSubmit = React.useCallback(
    (event) => {
      event.preventDefault();
      handleError(price);
      //   const body = {
      //     project: {
      //       id: randomkey(),
      //       name: "first",
      //     },
      //     price: price,
      //   };s
      if (error.state === false) {
      }
    },
    [handleError, price, error]
  );

  const handleChange = React.useCallback(
    (event) => {
      setPrice(event.target.value);
      handleError(event.target.value);
    },
    [handleError, setPrice]
  );

  return (
    <Box sx={deleteStyle}>
      <Stack rowGap="20px">
        <Typography variant="h6" color={"primary"}>
          Do you want to invest in this project ?
        </Typography>

        <Typography>You can change the amount .</Typography>
      </Stack>

      <Stack
        rowGap=""
        alignItems="center"
        spacing={2}
        sx={{ marginTop: "10px" }}
        component={"form"}
      >
        <TextField
          type={"number"}
          size="small"
          label={"Invest Now"}
          InputProps={{
            endAdornment: <InputAdornment position="end">$</InputAdornment>,
          }}
          sx={{ width: "100%" }}
          value={price}
          onChange={handleChange}
          error={error.state}
          helperText={error.message}
          required
        />
        <Button
          variant="contained"
          size="small"
          color="primary"
          type={"button"}
        >
          {" "}
          I invest in this project
        </Button>
      </Stack>
    </Box>
  );
};

export default Payment;
