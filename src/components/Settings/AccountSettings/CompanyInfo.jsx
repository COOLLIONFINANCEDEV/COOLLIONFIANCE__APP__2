import { useTheme } from "@emotion/react";
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Stack,
  TextareaAutosize,
  TextField,
  Typography,
} from "@mui/material";
import { useFormik } from "formik";
import React from "react";
import { useSelector } from "react-redux";
import { BORROWER, LENDER } from "../../../Context/Roles/roles";
import { selectLogin } from "../../../features/Login/LoginSlice";
import YupValidationSchema from "../../../Helpers/YupValidationSchema";
import countriesList from "../../../Seeds/country";
import CountrySelect from "../../Form/CountrySelect";
import UploadForm from "../../Form/UploadForm";

const CompanyInfo = () => {
  const [listCountry, setListCountry] = React.useState({
    status: false,
    countries: [],
  });

  const userInfo = useSelector(selectLogin);
  const user = userInfo.user;
  // eslint-disable-next-line no-unused-vars
  const [company, setCompany] = React.useState({
    state: false,
    companies: [],
  });

  React.useEffect(() => {
    setListCountry({
      status: true,
      countries: countriesList,
    });
  }, []);

  const { palette } = useTheme();
  const [hasCompany, setHascompany] = React.useState(false);
  const [country, setCountry] = React.useState();
  const [image, setImage] = React.useState();

  const handleSubmit = (values) => {
    values.image = image;
    values.country = country;
  };

  const initialValues = {
    name: "",
    sector: "",
    website: "",
    payment: "",
    email: "",
    phone: "",
    about: "",
  };

  // function CheckCompany(state, value) {
  //   if (state) {
  //     return value;
  //   } else {
  //     return "";
  //   }
  // }

  const validationSchema = YupValidationSchema([
    { key: "name", type: "name" },
    { key: "sector", type: "name" },
    { key: "website", type: "link" },
    { key: "payment", type: "payment" },
    { key: "email", type: "email" },
    { key: "phone", type: "phone" },
    { key: "about", type: "comment" },
  ]);

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema,
    onSubmit: handleSubmit,
  });

  return (
    <>
      {user.role === LENDER() && company.state === false && (
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
      {user.role === BORROWER() && (
        <Typography variant="h5" sx={{ fontWeight: "bold", marginTop: "10vh" }}>
          Without your company information, you cannot create a project
        </Typography>
      )}

      {user.role === BORROWER() && (
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
          <form
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              width: "100%",
              rowGap: "5vh",
            }}
            onSubmit={formik.handleSubmit}
          >
            <Stack
              direction={"row"}
              columnGap="5%"
              rowGap="1.5rem"
              flexWrap="wrap"
            >
              <UploadForm
                imageSelected={(value) => setImage(value)}
                DefaultImage={image}
              />
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
                error={Boolean(formik.errors.name) && formik.touched.name}
                helperText={formik.errors.name}
              />
              <TextField
                label="Business Sector"
                id="sector"
                name="sector"
                variant="outlined"
                sx={{ width: { xs: "100%", sm: "47.5%", md: "50%" } }}
                rows={"4"}
                value={formik.values.sector}
                onChange={formik.handleChange}
                error={Boolean(formik.errors.sector) && formik.touched.sector}
                helperText={formik.errors.sector}
              />
              <TextField
                label="Website"
                id="website"
                name="website"
                variant="outlined"
                sx={{ width: { xs: "100%", sm: "47.5%", md: "45%" } }}
                rows={"4"}
                value={formik.values.website}
                onChange={formik.handleChange}
                error={Boolean(formik.errors.website) && formik.touched.website}
                helperText={formik.errors.website}
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
                  type={"company"}
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
                id="payment"
                name="payment"
                label="Payment IBAN"
                variant="outlined"
                sx={{ width: "100%" }}
                rows={"4"}
                value={formik.values.payment}
                onChange={formik.handleChange}
                error={Boolean(formik.errors.payment) && formik.touched.payment}
                helperText={formik.errors.payment}
              />
            </Stack>

            <Stack
              direction={"row"}
              columnGap="5%"
              rowGap="1.5rem"
              flexWrap="wrap"
            >
              <TextField
                id="email"
                name="email"
                label="Email"
                variant="outlined"
                sx={{ width: { xs: "100%", sm: "47.5%", md: "47.5%" } }}
                rows={"4"}
                value={formik.values.email}
                onChange={formik.handleChange}
                error={Boolean(formik.errors.email) && formik.touched.email}
                helperText={formik.errors.email}
              />
              <TextField
                id="phone"
                name="phone"
                label="Phone"
                variant="outlined"
                sx={{ width: { xs: "100%", sm: "47.5%", md: "47.5%" } }}
                rows={"4"}
                value={formik.values.phone}
                onChange={formik.handleChange}
                error={Boolean(formik.errors.phone && formik.touched.phone)}
                helperText={formik.errors.phone}
              />
            </Stack>

            <Stack
              direction={"row"}
              columnGap="2rem"
              rowGap="1.5rem"
              flexWrap="wrap"
            >
              <TextField
                id="about"
                name="about"
                placeholder="About My Company"
                sx={{
                  width: "100%",
                }}
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
                value={formik.values.about}
                onChange={formik.handleChange}
                error={formik.touched.about && Boolean(formik.errors.about)}
                helperText={formik.errors.about}
              />
            </Stack>

            <Button variant="contained" type="submit">
              Save Profile info
            </Button>
          </form>
        </Box>
      )}
    </>
  );
};

export default CompanyInfo;
