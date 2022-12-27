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
import {
  errorContent,
  successContent,
} from "../../../Context/Content/AppContent";
import { BORROWER, LENDER } from "../../../Context/Roles/roles";
import TimeOut from "../../../Context/TimeOut/TimeOut";
import { setAlert } from "../../../features/Alert/AlertSlice";
import {
  hanbleError,
  ResetError,
  selectError,
} from "../../../features/Error/ErrorSlice";
import { deleteLoader, setLoader } from "../../../features/Loader/LoaderSlice";
import {
  AddCompany,
  CheckUser,
  selectLogin,
} from "../../../features/Login/LoginSlice";
import { setPoppu } from "../../../features/Poppu/PoppuSlice";
import randomkey from "../../../Helpers/randomKey";
import VerifyValue from "../../../Helpers/VerifyValue";
import YupValidationSchema from "../../../Helpers/YupValidationSchema";
import countriesList from "../../../Seeds/country";
import SessionService from "../../../Services/SessionService";
import CountrySelect from "../../Form/CountrySelect";
import UploadForm from "../../Form/UploadForm";

const CompanyInfo = () => {
  const CompagnyLoaderKey = randomkey();
  const GlobalError = useSelector(selectError);
  const [listCountry, setListCountry] = React.useState({
    status: false,
    countries: [],
  });

  const dispatch = useDispatch();
  const userInfo = useSelector(selectLogin);
  const user = userInfo.user;
  const [company, setCompany] = React.useState({
    state: false,
    companies: [],
  });

  React.useEffect(() => {
    setCompany({
      state: Boolean([...user.companies].length >= 1),
      companies: user.companies[user.companies.length - 1],
    });
  }, [user.companies]);

  React.useEffect(() => {
    setListCountry({
      status: true,
      countries: countriesList,
    });
  }, []);

  const { palette } = useTheme();
  const [hasCompany, setHascompany] = React.useState(false);
  const [country, setCountry] = React.useState(
    VerifyValue(user.companies[user.companies.length - 1]?.localisation)
  );
  const [image, setImage] = React.useState(
    VerifyValue(user.companies[user.companies.length - 1]?.logo)
  );

  function handleSubmitError(datas) {
    const data = datas.data;
    if (data.error === true) {
      for (let key in initialValues) {
        if (data.message.includes(key) && key !== "name") {
          dispatch(
            hanbleError({
              name: "oauth",
              section: "company",
              child: key,
              update: { state: true, message: data.message },
            })
          );

          setTimeout(() => {
            dispatch(
              ResetError({
                name: "oauth",
                section: "company",
              })
            );
          }, TimeOut.error);
          break;
        }
      }
      dispatch(setAlert({ state: "error", message: data.message }));
    }
  }
  function handleSubmitSuccess(datas) {
    dispatch(setPoppu({ state: "success", content: successContent() }));
    dispatch(
      AddCompany({
        company: datas.data.data,
        user: user,
      })
    );
    dispatch(CheckUser());
  }
  function handleCatch(error) {
    console.log(error);
    dispatch(deleteLoader({ key: CompagnyLoaderKey }));
    dispatch(setPoppu({ state: "error", content: errorContent() }));
  }

  const handleSubmit = (values) => {
    values.image = image;
    values.country = country;
    dispatch(setLoader({ state: true, key: CompagnyLoaderKey }));
    if (company.state === false) {
      SessionService.CreateCompany(user.id, values)
        .then((datas) => {
          dispatch(deleteLoader({ key: CompagnyLoaderKey }));

          handleSubmitError(datas);
          handleSubmitSuccess(datas);
        })
        .catch(handleCatch);
    } else if (company.state === true) {
      const body = values;
      SessionService.UpdateCompanyByManager(
        user.companies[user.companies.length - 1].id,
        body
      )
        .then((datas) => {
          dispatch(deleteLoader({ key: CompagnyLoaderKey }));

          handleSubmitError(datas);
          handleSubmitSuccess(datas);
        })
        .catch(handleCatch);
    }
  };

  const initialValues = {
    name: VerifyValue(user.companies[user.companies.length - 1]?.name),
    sector: VerifyValue(user.companies[user.companies.length - 1]?.domain),
    website: VerifyValue(user.companies[user.companies.length - 1]?.website),
    payment: VerifyValue(
      user.companies[user.companies.length - 1]?.payment_information
    ),
    email: VerifyValue(user.companies[user.companies.length - 1]?.email),
    phone: VerifyValue(user.companies[user.companies.length - 1]?.phone),
    about: VerifyValue(user.companies[user.companies.length - 1]?.about_me),
  };

  function CheckCompany(state, value) {
    if (state) {
      return value;
    } else {
      return "";
    }
  }

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

  console.log(GlobalError);

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
      {user.role === BORROWER() && company.state === false && (
        <Typography variant="h5" sx={{ fontWeight: "bold", marginTop: "10vh" }}>
          Without your company information, you cannot create a project
        </Typography>
      )}

      {(hasCompany ||
        user.companies.length !== 0 ||
        user.role === BORROWER()) && (
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
                error={
                  (Boolean(formik.errors.name) && formik.touched.name) ||
                  GlobalError.oauth.company.name.state
                }
                helperText={
                  formik.errors.name || GlobalError.oauth.company.name.message
                }
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
                error={
                  Boolean(formik.errors.sector) &&
                  formik.touched.sector &&
                  GlobalError.oauth.company.sector.state
                }
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
                error={
                  (Boolean(formik.errors.website) && formik.touched.website) ||
                  GlobalError.oauth.company.website.state
                }
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
                error={
                  (Boolean(formik.errors.payment) && formik.touched.payment) ||
                  GlobalError.oauth.company.payment.state
                }
                helperText={
                  formik.errors.payment ||
                  GlobalError.oauth.company.payment.message
                }
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
                error={
                  (Boolean(formik.errors.email) && formik.touched.email) ||
                  GlobalError.oauth.company.email.state
                }
                helperText={
                  formik.errors.email || GlobalError.oauth.company.email.message
                }
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
                error={
                  Boolean(formik.errors.phone && formik.touched.phone) ||
                  GlobalError.oauth.company.phone.state
                }
                helperText={
                  formik.errors.phone || GlobalError.oauth.company.phone.message
                }
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
