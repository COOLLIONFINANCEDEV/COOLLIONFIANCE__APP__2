import { Box, Button, TextField, Typography } from "@mui/material";
import React from "react";
import SessionService from "../../Services/SessionService";
import { useDispatch } from "react-redux";
import YupValidationSchema from "../../Helpers/YupValidationSchema";
import FormikDecoration from "../../Helpers/FormikDecoration";
import { setAlert } from "../../features/Alert/AlertSlice";
import { deleteLoader, setLoader } from "../../features/Loader/LoaderSlice";
import randomkey from "../../Helpers/randomKey";
import { setPoppu } from "../../features/Poppu/PoppuSlice";
import AppContent from "../../Seeds/AppContent";

const Register = ({ hanbleChange }) => {
  const dispatch = useDispatch();
  const loaderkey = randomkey();

  const initialValues = {
    email: "",
    password: "",
    confirmPassword: "",
  };

  function handleSubmitError(data) {
    dispatch(setAlert({ state: "error", message: data.message }));
    if (data.errors.length) {
      data.errors.forEach((item) => {
        formik.setFieldError(item.field, item.message);
      });
    }
  }

  function handleSubmitGood(data, values) {
    dispatch(setAlert({ state: "success", message: data.message }));
    dispatch(
      setPoppu({ state: "success", content: AppContent.poppu.registerSuccess })
    );
    // hanbleChange(0, values); ici c'est la redirection direct sur le login avec les values
  }

  const handleSubmit = async (values) => {
    dispatch(setLoader({ state: true, key: loaderkey }));
    const data = await SessionService.Register(values);
    dispatch(deleteLoader({ key: loaderkey }));
    if (data.error === true) {
      handleSubmitError(data);
    } else {
      handleSubmitGood(data, values);
    }
  };

  const formik = FormikDecoration(
    initialValues,
    YupValidationSchema([
      { key: "email", type: "email" },
      { key: "password", type: "password" },
      { key: "confirmPassword", type: "confirmPassword" },
    ]),
    handleSubmit
  );

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
      <Typography variant="h2">Sign UP</Typography>
      <Typography variant="p" sx={{ marginBottom: "5vh" }}>
        Start investing or funding your projects today.
      </Typography>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          rowGap: "20px",
        }}
        component="form"
        onSubmit={formik.handleSubmit}
      >
        <TextField
          label="Email"
          type={"email"}
          name={"email"}
          id={"email"}
          variant="outlined"
          sx={{ width: "95%" }}
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
        <TextField
          label="Password"
          type={"password"}
          name={"password"}
          id={"password"}
          variant="outlined"
          sx={{ width: "95%" }}
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
        />
        <TextField
          label="Confirm Password"
          type={"password"}
          name="confirmPassword"
          id="confirmPassword"
          variant="outlined"
          sx={{ width: "95%" }}
          value={formik.values.confirmPassword}
          onChange={formik.handleChange}
          error={
            formik.touched.confirmPassword &&
            Boolean(formik.errors.confirmPassword)
          }
          helperText={
            formik.touched.confirmPassword && formik.errors.confirmPassword
          }
        />

        <Button variant="contained" sx={{ width: "95%" }} type="submit">
          Sign up
        </Button>
      </Box>
    </Box>
  );
};

export default Register;
