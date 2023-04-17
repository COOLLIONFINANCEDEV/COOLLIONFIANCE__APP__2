import React from "react";
import randomkey from "../../Helpers/randomKey";
import { useDispatch } from "react-redux";
import { deleteLoader, setLoader } from "../../features/Loader/LoaderSlice";
import SessionService from "../../Services/SessionService";
import FormikDecoration from "../../Helpers/FormikDecoration";
import YupValidationSchema from "../../Helpers/YupValidationSchema";
import { Alert, AlertTitle, Button, Stack, TextField } from "@mui/material";
import { useAccount } from "wagmi";
import AppContent from "../../Seeds/AppContent";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import { LENDER } from "../../Context/Roles/roles";
import { setAlert } from "../../features/Alert/AlertSlice";
import { setPoppu } from "../../features/Poppu/PoppuSlice";
import { HomeRouteLink } from "../../Router/Routes";
import { useNavigate } from "react-router-dom";

const CreateTenantLender = ({ email, accountType, handleClose }) => {
  const lenderLoaderKey = randomkey();
  const dispatch = useDispatch();
  const { isConnected } = useAccount();
  const navigate = useNavigate();

  const initialValues = {
    email: email,
    name: "",
  };

  const handleSubmit = async (values) => {
    dispatch(setLoader({ state: true, key: lenderLoaderKey }));
    const body = {
      id: accountType.id,
      email: values.email,
      name: values.name ? values.name : "anonymous",
    };
    const data = await SessionService.CreateTenant(body);
    dispatch(deleteLoader({ key: lenderLoaderKey }));
    if (data.error === false) {
      dispatch(
        setAlert({
          state: "success",
          message: AppContent.alert.successConnexion,
        })
      );
      handleClose();
      navigate(HomeRouteLink());
    } else {
      dispatch(
        setPoppu({ state: "error", content: AppContent.poppu.serverError })
      );
    }
  };

  const formik = FormikDecoration(
    initialValues,
    YupValidationSchema([
      { key: "email", type: "email", required: isConnected ? true : false },
      { key: "name", type: "name", required: !isConnected ? true : false },
    ]),
    handleSubmit
  );

  return (
    <Stack
      justifyContent={"center"}
      alignItems={"center"}
      sx={{ width: "100%", mt: "20px" }}
      spacing={2}
      component={"form"}
      onSubmit={formik.handleSubmit}
    >
      {isConnected && (
        <Alert severity="info">
          <AlertTitle>Warning</AlertTitle>
          {AppContent.alert.becomeLenderWithWallet}
        </Alert>
      )}
      {!isConnected && (
        <TextField
          label={"Name"}
          type="text"
          id="name"
          variant="outlined"
          sx={{ width: "100%" }}
          value={formik.values.name}
          onChange={formik.handleChange}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
        />
      )}
      {isConnected && (
        <TextField
          label={"Email"}
          type="email"
          id="email"
          variant="outlined"
          sx={{ width: "100%" }}
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
      )}
      <Button variant="contained" sx={{ width: "100%" }} type="submit">
        Submit
      </Button>
      <Stack
        direction={"row"}
        justifyContent={"flex-end"}
        sx={{ width: "95%" }}
      >
        {accountType.codename === LENDER() && (
          <Button
            endIcon={<SkipNextIcon />}
            variant="outlined"
            size="small"
            onClick={handleSubmit}
          >
            Skip
          </Button>
        )}
      </Stack>
    </Stack>
  );
};

export default CreateTenantLender;
