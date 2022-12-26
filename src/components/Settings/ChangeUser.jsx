import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { successContent } from "../../Context/Content/AppContent";
import TimeOut from "../../Context/TimeOut/TimeOut";
import {
  hanbleError,
  ResetError,
  selectError,
} from "../../features/Error/ErrorSlice";
import { deleteLoader, setLoader } from "../../features/Loader/LoaderSlice";
import {
  CheckUser,
  selectLogin,
  UpdateUser,
} from "../../features/Login/LoginSlice";
import FormikDecoration from "../../Helpers/FormikDecoration";
import randomkey from "../../Helpers/randomKey";
import YupValidationSchema from "../../Helpers/YupValidationSchema";
import SessionService from "../../Services/SessionService";
import Poppu from "../Login/Poppu";
import CreateModal from "../Modal/CreateModal";

const ChangeUser = ({ hanbleChange, content, handleClose, type = "text" }) => {
  const GlobalError = useSelector(selectError);
  const dispatch = useDispatch();
  const twoFactorLoaderKey = randomkey();
  const user = useSelector(selectLogin).user;

  const [popupStatus, setPopupStatus] = React.useState({
    status: false,
  });

  function handleSubmitError() {
    dispatch(
      hanbleError({
        name: "oauth",
        section: type.toLowerCase(),
        child: "twoFactor",
        update: { state: true, message: "Two Factor code is invalid" },
      })
    );

    setTimeout(() => {
      dispatch(
        ResetError({
          name: "oauth",
          section: "twoFactor",
        })
      );
    }, TimeOut.error);
  }

  const initialValues = {
    [type]: "",
  };

  const handleSubmit = (values) => {
    dispatch(setLoader({ state: true, key: twoFactorLoaderKey }));
    const id = user.id;
    console.log(values);

    SessionService.UpdateUser(id, values)
      .then((datas) => {
        dispatch(deleteLoader({ key: twoFactorLoaderKey }));
        setPopupStatus({
          status: "success",
          content: successContent(type),
        });
        dispatch(
          UpdateUser({ newUser: JSON.stringify(datas.data.data), user: user })
        );
        dispatch(CheckUser());
        setTimeout(() => {
          handleClose();
        }, TimeOut.good);
      })
      .catch((error) => {
        dispatch(CheckUser());
        setTimeout(() => {
          handleClose();
        }, TimeOut.good);
        handleSubmitError();
      });
  };

  const validationschema =
    type === "password"
      ? [
          { key: type, type: type },
          { key: "lastPassword", type: type },
        ]
      : [{ key: type, type: type }];
  const formik = FormikDecoration(
    initialValues,
    YupValidationSchema(validationschema),
    handleSubmit
  );

  return (
    <Stack
      sx={{ padding: "10px 10px", minWidth: { xs: "70vw", md: "40vw" } }}
      alignItems="center"
      justifyContent={"space-between"}
      spacing={5}
    >
      {popupStatus.status !== false && (
        <CreateModal
          ModalContent={Poppu}
          MakeOpen={true}
          ContentProps={{
            content: popupStatus.content,
            status: popupStatus.status,
            changeTab: hanbleChange,
          }}
        />
      )}
      <Typography variant="h5">{content.title}</Typography>
      <Typography>{content.description}</Typography>

      <Box
        component="form"
        onSubmit={formik.handleSubmit}
        sx={{ width: "100%" }}
      >
        {type === "password" && (
          <TextField
            label="last password"
            type={type}
            name={"lastPassword"}
            id={"lastPassword"}
            variant="outlined"
            sx={{ width: "95%", marginTop: "10px" }}
            value={formik.values.lastPassword}
            onChange={formik.handleChange}
            error={
              (formik.touched.lastPassword &&
                Boolean(formik.errors.lastPassword)) ||
              GlobalError.oauth.registration["lastPassword"].state
            }
            helperText={
              (formik.touched.lastPassword && formik.errors.lastPassword) ||
              GlobalError.oauth.registration["lastPassword"].message
            }
          />
        )}

        <TextField
          label={type === "password" ? "new password" : "last password"}
          type={type}
          name={type}
          id={type}
          variant="outlined"
          sx={{ width: "95%" }}
          value={formik.values[type]}
          onChange={formik.handleChange}
          error={
            (formik.touched[type] && Boolean(formik.errors[type])) ||
            GlobalError.oauth.registration[type.toLowerCase()].state
          }
          helperText={
            (formik.touched[type] && formik.errors[type]) ||
            GlobalError.oauth.registration[type.toLowerCase()].message
          }
        />

        <Button
          variant="contained"
          sx={{ width: "95%", marginTop: "30px" }}
          type="submit"
        >
          Change
        </Button>
      </Box>
    </Stack>
  );
};

export default ChangeUser;
