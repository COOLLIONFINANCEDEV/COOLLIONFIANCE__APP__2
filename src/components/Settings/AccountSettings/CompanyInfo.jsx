import { useTheme } from "@emotion/react";
import { UploadFile } from "@mui/icons-material";
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  MenuItem,
  Select,
  Stack,
  TextareaAutosize,
  TextField,
  Typography,
} from "@mui/material";
import { useFormik } from "formik";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { BORROWER, LENDER } from "../../../Context/Roles/roles";
import { selectLogin } from "../../../features/Login/LoginSlice";
import randomkey from "../../../Helpers/randomKey";
import YupValidationSchema from "../../../Helpers/YupValidationSchema";
import countriesList from "../../../Seeds/country";
import CountrySelect from "../../Form/CountrySelect";
import UploadForm from "../../Form/UploadForm";

const CompanyInfo = () => {
  const [country, setCountry] = React.useState("");
  const [listCountry, setListCountry] = React.useState({
    status: false,
    countries: [],
  });
  const [image, setImage] = React.useState("");
  const dispatch = useDispatch();
  const CompagnyLoaderKey = randomkey();

  React.useEffect(() => {
    setListCountry({
      status: true,
      countries: countriesList,
    });
  }, []);

  const handlehChangeCountry = React.useCallback((event) => {
    setCountry(event.target.value);
  }, []);
  const { palette } = useTheme();
  const userInfo = useSelector(selectLogin).user;
  const [hasCompany, setHascompany] = React.useState(false);

  const initialValues = {
    name: "",
  };

  const validationSchema = YupValidationSchema([{ key: "name", type: "name" }]);

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema,
    onSubmit: (value) => console.log(value),
  });

  console.log(formik);
  return (
    <>
      {userInfo.role === LENDER() && userInfo.companies.length === 0 && (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-start",
            flexDirection: "column",
            marginTop: "10vh",
            rowGap: "3vh",
          }}
        >
          <FormControlLabel
            control={
              <Checkbox
                onChange={() => setHascompany((state) => !state)}
                value={hasCompany}
              />
            }
            label="Do you Have a company"
          />
        </Box>
      )}
      {userInfo.role === BORROWER() && userInfo.companies.length === 0 && (
        <Typography variant="h5" sx={{ fontWeight: "bold", marginTop: "10vh" }}>
          Without your company information, you cannot create a project
        </Typography>
      )}

      {(hasCompany ||
        userInfo.companies.length !== 0 ||
        userInfo.role === BORROWER()) && (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-start",
            flexDirection: "column",
            marginTop: "10vh",
            rowGap: "3vh",
          }}
        >
          <Typography variant="h6">My Company Information</Typography>
          <FormControl
            sx={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              width: "100%",
              rowGap: "5vh",
            }}
            conponent={"form"}
            onSubmit={formik.handleSubmit}
          >
            <Stack
              direction={"row"}
              columnGap="5%"
              rowGap="1.5rem"
              flexWrap="wrap"
            >
              <UploadForm imageSelected={(value) => setImage(value)} />
            </Stack>
            <Stack
              direction={"row"}
              columnGap="5%"
              rowGap="1.5rem"
              flexWrap="wrap"
            >
              <TextField
                id="name"
                name="name"
                label=" Name"
                variant="outlined"
                sx={{ width: "100%" }}
                rows={"4"}
                value={formik.values.name}
                onChange={formik.handleChange}
                error={Boolean(formik.errors.name)}
                helperText={formik.errors.name}
              />
              <TextField
                id="filled-basic"
                label="Business Sector"
                variant="outlined"
                sx={{ width: { xs: "100%", sm: "47.5%", md: "50%" } }}
                rows={"4"}
              />
              <TextField
                id="filled-basic"
                label="Website"
                variant="outlined"
                sx={{ width: { xs: "100%", sm: "47.5%", md: "45%" } }}
                rows={"4"}
              />
            </Stack>

            <Stack
              direction={"row"}
              columnGap="5%"
              rowGap="1.5rem"
              flexWrap="wrap"
            >
              <TextField
                id="filled-basic"
                label="Email"
                variant="outlined"
                sx={{ width: { xs: "100%", sm: "47.5%", md: "47.5%" } }}
                rows={"4"}
              />
              <TextField
                id="filled-basic"
                label="Phone"
                variant="outlined"
                sx={{ width: { xs: "100%", sm: "47.5%", md: "47.5%" } }}
                rows={"4"}
              />
            </Stack>

            <Stack
              direction={"row"}
              columnGap="5%"
              rowGap="1.5rem"
              flexWrap="wrap"
            >
              {listCountry.status === true && (
                <CountrySelect
                  selectCountry={(value) => {
                    setCountry(JSON.stringify(value));
                  }}
                  items={listCountry.countries}
                />
              )}
            </Stack>

            <Stack
              direction={"row"}
              columnGap="5%"
              rowGap="1.5rem"
              flexWrap="wrap"
            >
              <TextField
                id="name"
                name="name"
                label="Payment IBAN"
                variant="outlined"
                sx={{ width: "100%" }}
                rows={"4"}
                value={formik.values.name}
                onChange={formik.handleChange}
                error={Boolean(formik.errors.name)}
                helperText={formik.errors.name}
              />
            </Stack>

            <Stack
              direction={"row"}
              columnGap="5%"
              rowGap="1.5rem"
              flexWrap="wrap"
            >
              <TextField
                id="filled-basic"
                label="City"
                variant="outlined"
                sx={{ width: { xs: "100%", sm: "47.5%", md: "47.5%" } }}
                rows={"4"}
              />
              <TextField
                id="filled-basic"
                label="Province"
                variant="outlined"
                sx={{ width: { xs: "100%", sm: "47.5%", md: "47.5%" } }}
                rows={"4"}
              />
            </Stack>

            <Stack
              direction={"row"}
              columnGap="5%"
              rowGap="1.5rem"
              flexWrap="wrap"
            >
              <TextField
                id="filled-basic"
                label="Email"
                variant="outlined"
                sx={{ width: { xs: "100%", sm: "47.5%", md: "47.5%" } }}
                rows={"4"}
              />
              <TextField
                id="filled-basic"
                label="Phone"
                variant="outlined"
                sx={{ width: { xs: "100%", sm: "47.5%", md: "47.5%" } }}
                rows={"4"}
              />
            </Stack>

            <Stack
              direction={"row"}
              columnGap="2rem"
              rowGap="1.5rem"
              flexWrap="wrap"
            >
              <TextareaAutosize
                id="filled-basic"
                placeholder="About My Company"
                style={{
                  width: "100%",
                  height: "100px",
                  borderColor: palette.secondary.main,
                  borderSize: "2px",
                  borderRadius: "5px",
                }}
              />
            </Stack>

            <Button variant="contained" type="submit">
              Save Profile info
            </Button>
          </FormControl>
        </Box>
      )}
    </>
  );
};

export default CompanyInfo;
