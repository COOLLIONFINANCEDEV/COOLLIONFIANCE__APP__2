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
import FormikDecoration from "../../Helpers/FormikDecoration";
// eslint-disable-next-line no-unused-vars
import randomkey from "../../Helpers/randomKey";
import YupValidationSchema from "../../Helpers/YupValidationSchema";

const Payment = ({ defaultPrice, project }) => {
  const deleteStyle = {
    minWidth: "30vw",
    minHeight: "30vh",
    borberRadius: "10px",
  };
  const initialState = {
    price: defaultPrice,
  };

  const handleSubmit = (values) => {
    console.log(values);
    console.log(project);
  };

  const formik = FormikDecoration(
    initialState,
    YupValidationSchema([
      {
        key: "price",
        type: "amount",
        props: [project?.minimum_amount, project?.total_investment_to_raise],
      },
    ]),
    handleSubmit
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
        onSubmit={formik.handleSubmit}
      >
        <TextField
          type={"number"}
          size="small"
          label={"Invest Now"}
          InputProps={{
            endAdornment: <InputAdornment position="end">$</InputAdornment>,
          }}
          sx={{ width: "100%" }}
          name={"price"}
          id={"price"}
          value={formik.values.price}
          onChange={formik.handleChange}
          error={formik.touched.price && Boolean(formik.errors.price)}
          helperText={formik.touched.price && formik.errors.price}
        />
        <Button
          variant="contained"
          size="small"
          color="primary"
          type={"submit"}
        >
          {" "}
          I invest in this project
        </Button>
      </Stack>
    </Box>
  );
};

export default Payment;
