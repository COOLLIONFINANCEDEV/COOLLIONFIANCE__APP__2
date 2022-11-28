import { Box, Button, TextField, Typography } from "@mui/material";
import * as yup from "yup";
import React from "react";
import { useFormik } from "formik";

const validationSchema = yup.object({
  contact: yup
    .number()
    .min('10')
    .typeError("That doesn't look like a phone number")
    .positive("A phone number can't start with a minus")
    .integer("A phone number can't include a decimal point")
    .required("A phone number is required"),
  email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string("Enter your password")
    .min(8, "Password should be of minimum 8 characters length")
    .required("Password is required"),
  confirmPassword: yup
    .string()
    .test("passwords-match", "Passwords must match", function(value) {
      return this.parent.password === value;
    }),
});

const Register = () => {
  const formik = useFormik({
    initialValues: {
      contact: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      
    },
  });

  return (
    <Box
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        rowGap: "10px",
      }}
    >
      <Typography variant="h2">Sign UP</Typography>
      <Typography variant="p" sx={{ marginBottom: "5vh" }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, nulla?
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
          label="Contact"
          type={"tel"}
          name={"contact"}
          id={"contact"}
          variant="outlined"
          sx={{ width: "95%" }}
          value={formik.values.contact}
          onChange={formik.handleChange}
          error={formik.touched.contact && Boolean(formik.errors.contact)}
          helperText={formik.touched.contact && formik.errors.contact}
        />
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
          Sign in
        </Button>
      </Box>
    </Box>
  );
};

export default Register;
