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
import { useDispatch, useSelector } from "react-redux";
import { BORROWER, LENDER } from "../../../Context/Roles/roles";
import { deleteLoader, setLoader } from "../../../features/Loader/LoaderSlice";
import { selectLogin } from "../../../features/Login/LoginSlice";
import randomkey from "../../../Helpers/randomKey";
import YupValidationSchema from "../../../Helpers/YupValidationSchema";
import countriesList from "../../../Seeds/country";
import SessionService from "../../../Services/SessionService";
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
  const user = useSelector(selectLogin).user;

  React.useEffect(() => {
    setListCountry({
      status: true,
      countries: countriesList,
    });
  }, []);

  const { palette } = useTheme();
  const userInfo = useSelector(selectLogin).user;
  const [hasCompany, setHascompany] = React.useState(false);

  const handleSubmit = (values) => {
    values.image = image;
    values.country = country;
    dispatch(setLoader({ state: true, key: CompagnyLoaderKey }));
    SessionService.CreateCompany(user.id, values).then((datas) => {
      dispatch(deleteLoader({ key: CompagnyLoaderKey }));
      console.log(datas);
    }).catch();
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
                label="Business Sector"
                id="sector"
                name="sector"
                variant="outlined"
                sx={{ width: { xs: "100%", sm: "47.5%", md: "50%" } }}
                rows={"4"}
                value={formik.values.sector}
                onChange={formik.handleChange}
                error={Boolean(formik.errors.sector)}
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
                error={Boolean(formik.errors.website)}
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
                error={Boolean(formik.errors.payment)}
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
                error={Boolean(formik.errors.email)}
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
                error={Boolean(formik.errors.phone)}
                helperText={formik.errors.phone}
              />
            </Stack>

            <Stack
              direction={"row"}
              columnGap="2rem"
              rowGap="1.5rem"
              flexWrap="wrap"
            >
              <TextareaAutosize
                id="about"
                name="about"
                placeholder="About My Company"
                style={{
                  width: "100%",
                  height: "100px",
                  borderColor: palette.secondary.main,
                  borderSize: "2px",
                  borderRadius: "5px",
                }}
                value={formik.values.about}
                onChange={formik.handleChange}
                error={Boolean(formik.errors.about)}
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
