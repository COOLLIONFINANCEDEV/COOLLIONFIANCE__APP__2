import {
  Box,
  Button,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
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
import { CheckUser, selectLogin } from "../../features/Login/LoginSlice";
import FormikDecoration from "../../Helpers/FormikDecoration";
import randomkey from "../../Helpers/randomKey";
import YupValidationSchema from "../../Helpers/YupValidationSchema";
import SessionService from "../../Services/SessionService";
import Poppu from "../../features/Poppu/Poppu";
import CreateModal from "../Modal/CreateModal";

const ChangeUser = ({ hanbleChange, content, handleClose, type = "text" }) => {
  const GlobalError = useSelector(selectError);
  const dispatch = useDispatch();
  const twoFactorLoaderKey = randomkey();
  const user = useSelector(selectLogin).user;

  const [popupStatus, setPopupStatus] = React.useState({
    status: false,
  });

  const initialValues = {
    [type]: type === "boolean" ? user.two_fa : "",
  };

  const handleSubmit = (values) => {
    const id = user.id;
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
      <Typography variant="h5" sx={{ textTransform: "capitalize" }}>
        {content.title}
      </Typography>
      <Typography sx={{ textTransform: "capitalize" }}>
        {content.description}
      </Typography>

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
            sx={{ width: "95%", marginBottom: "15px" }}
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

        {type !== "boolean" && (
          <TextField
            label={type === "password" ? "new password" : type}
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
        )}

        {type === "boolean" && (
          <Select
            value={formik.values[type]}
            name={type}
            label={"choose"}
            onChange={formik.handleChange}
            sx={{ width: "95%" }}
          >
            <MenuItem value={true}>Yes</MenuItem>
            <MenuItem value={false}>No</MenuItem>
          </Select>
        )}

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
