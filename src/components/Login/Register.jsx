import {
  Box,
  Button,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import SessionService from "../../Services/SessionService";
import { useDispatch, useSelector } from "react-redux";
import {
  hanbleError,
  ResetError,
  selectError,
} from "../../features/Error/ErrorSlice";
import YupValidationSchema from "../../Helpers/YupValidationSchema";
import FormikDecoration from "../../Helpers/FormikDecoration";
import { setAlert } from "../../features/Alert/AlertSlice";
import { deleteLoader, setLoader } from "../../features/Loader/LoaderSlice";
import randomkey from "../../Helpers/randomKey";
import CreateModal from "../Modal/CreateModal";
import Poppu from "./Poppu";
import TimeOut from "../../Context/TimeOut/TimeOut";
import { BORROWER, LENDER } from "../../Context/Roles/roles";
import { selectLogin } from "../../features/Login/LoginSlice";

const Register = ({ hanbleChange }) => {
  const GlobalError = useSelector(selectError);
  const dispatch = useDispatch();
  const loaderkey = randomkey();
  const roles = useSelector(selectLogin).roles;
  const [role, setRole] = React.useState(
    roles.find((item) => item.name.toUpperCase() === LENDER())
  );

  const [popupStatus, setPopupStatus] = React.useState({
    status: false,
  });
  const initialValues = {
    email: "",
    password: "",
    confirmPassword: "",
  };

  function resetPassword() {
    formik.values.confirmPassword = "";
  }

  function handleSubmitError(data) {
    if (data.error === true) {
      for (let key in initialValues) {
        if (data.message.includes(key)) {
          dispatch(
            hanbleError({
              name: "oauth",
              section: "registration",
              child: key,
              update: { state: true, message: data.message },
            })
          );

          setTimeout(() => {
            dispatch(
              ResetError({
                name: "oauth",
                section: "registration",
              })
            );
          }, TimeOut.error);
          break;
        }
      }
      dispatch(setAlert({ state: "error", message: data.message }));
      resetPassword();
    }
  }

  function handleSubmitGood(data) {
    if (data.error === false) {
      setPopupStatus({
        status: "success",
        content: "Congratulations, your account has been successfully created",
        moveStep: hanbleChange,
      });
    }
  }

  const handleSubmit = (values) => {
    delete values["confirmPassword"];
    values.role_id = 4;
    dispatch(setLoader({ state: true, message: "ll", key: loaderkey }));
    SessionService.Register(values)
      .then((datas) => {
        dispatch(deleteLoader({ key: loaderkey }));
        const data = datas.data;
        handleSubmitError(data);
        handleSubmitGood(data);
      })
      .catch(() => {
        dispatch(deleteLoader({ key: loaderkey }));
        setPopupStatus({
          status: "error",
          content: "Sorry, server problem, please try again soon",
          moveStep: () => {},
        });
      });
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

  // for reset the error field when the form in write again

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
      {popupStatus.status !== false && (
        <CreateModal
          ModalContent={Poppu}
          MakeOpen={true}
          ContentProps={{
            content: popupStatus.content,
            status: popupStatus.status,
            changeTab: popupStatus.moveStep,
          }}
        />
      )}
      ;<Typography variant="h2">Sign UP</Typography>
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
          label="Email"
          type={"email"}
          name={"email"}
          id={"email"}
          variant="outlined"
          sx={{ width: "95%" }}
          value={formik.values.email}
          onChange={formik.handleChange}
          error={
            (formik.touched.email && Boolean(formik.errors.email)) ||
            GlobalError.oauth.registration.email.state
          }
          helperText={
            (formik.touched.email && formik.errors.email) ||
            GlobalError.oauth.registration.email.message
          }
        />

        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={role}
          label="Age"
          onChange={(e) => setRole(e.target.value)}
          sx={{ width: "95%" }}
          required
        >
          <MenuItem
            value={roles.find((item) => item.name.toUpperCase() === LENDER())}
          >
            I want to invest
          </MenuItem>
          <MenuItem
            value={roles.find((item) => item.name.toUpperCase() === BORROWER())}
          >
            I want to be funded
          </MenuItem>
        </Select>

        <TextField
          label="Password"
          type={"password"}
          name={"password"}
          id={"password"}
          variant="outlined"
          sx={{ width: "95%" }}
          value={formik.values.password}
          onChange={formik.handleChange}
          error={
            (formik.touched.password && Boolean(formik.errors.password)) ||
            GlobalError.oauth.registration.password.state
          }
          helperText={
            (formik.touched.password && formik.errors.password) ||
            GlobalError.oauth.registration.password.message
          }
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
