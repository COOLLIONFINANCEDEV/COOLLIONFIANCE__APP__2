import React from "react";
import randomkey from "../../Helpers/randomKey";
import { useDispatch } from "react-redux";
import { deleteLoader, setLoader } from "../../features/Loader/LoaderSlice";
import SessionService from "../../Services/SessionService";
import FormikDecoration from "../../Helpers/FormikDecoration";
import YupValidationSchema from "../../Helpers/YupValidationSchema";
import {
  Alert,
  AlertTitle,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
  TextareaAutosize,
} from "@mui/material";
import { useAccount } from "wagmi";
import AppContent from "../../Seeds/AppContent";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import { LENDER } from "../../Context/Roles/roles";
import { setAlert } from "../../features/Alert/AlertSlice";
import { setPoppu } from "../../features/Poppu/PoppuSlice";
import ProjectFilterItems from "../../Context/Filters/ProjectFilterItems";
import { useTheme } from "@emotion/react";
import { HomeRouteLink } from "../../Router/Routes";
import { useNavigate } from "react-router-dom";

const CreateTenantBorrower = ({ email, accountType, handleClose }) => {
  const lenderLoaderKey = randomkey();
  const dispatch = useDispatch();
  const { isConnected } = useAccount();
  const sectors = ProjectFilterItems().filter(
    (item) => item.Title === "Sectors"
  );
  const { palette } = useTheme();
  const navigate = useNavigate();

  const initialValues = {
    name: "",
    email: email,
    phone: "",
    businessSector: "",
    description: "",
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
      { key: "name", type: "name" },
      { key: "email", type: "email" },
      { key: "phone", type: "phone" },
      { key: "description", type: "comment", required: false },
      { key: "businessSector", type: "name" },
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
      {!isConnected && (
        <Alert severity="info">
          <AlertTitle>Warning</AlertTitle>
          {AppContent.alert.becomeBorrowerWithWallet}
        </Alert>
      )}
      <TextField
        label={"Name"}
        type="text"
        id="name"
        variant="outlined"
        sx={{ width: "95%" }}
        value={formik.values.name}
        onChange={formik.handleChange}
        error={formik.touched.name && Boolean(formik.errors.name)}
        helperText={formik.touched.name && formik.errors.name}
      />
      <TextField
        label={"Email"}
        type="email"
        id="email"
        variant="outlined"
        sx={{ width: "95%" }}
        value={formik.values.email}
        onChange={formik.handleChange}
        error={formik.touched.email && Boolean(formik.errors.email)}
        helperText={formik.touched.email && formik.errors.email}
      />
      <TextField
        label={"Phone"}
        type="phone"
        id="phone"
        variant="outlined"
        sx={{ width: "95%" }}
        value={formik.values.phone}
        onChange={formik.handleChange}
        error={formik.touched.phone && Boolean(formik.errors.phone)}
        helperText={formik.touched.phone && formik.errors.phone}
      />
      <FormControl sx={{ width: "95%" }}>
        <InputLabel id="businessSector">Business Sector</InputLabel>
        <Select
          labelId="businessSector"
          id="businessSector"
          value={formik.values.businessSector}
          name="businessSector"
          label="Business Sector"
          onChange={formik.handleChange}
          error={
            formik.touched.businessSector &&
            Boolean(formik.errors.businessSector)
          }
        >
          {sectors[0].Items.map((item) => (
            <MenuItem key={item} value={item}>
              {item}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <TextField
        id="description"
        name="description"
        label={"Description"}
        sx={{
          width: "95%",
        }}
        value={formik.values.description}
        onChange={formik.handleChange}
        error={formik.touched.description && Boolean(formik.errors.description)}
        helperText={formik.touched.description && formik.errors.description}
        InputProps={{
          inputComponent: TextareaAutosize,
          inputProps: {
            style: {
              width: "100%",
              height: "100px",
              borderColor: palette.secondary.main,
              borderSize: "2px",
              borderRadius: "5px",
            },
          },
        }}
      />
      <Button variant="contained" sx={{ width: "95%" }} type="submit">
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

export default CreateTenantBorrower;
