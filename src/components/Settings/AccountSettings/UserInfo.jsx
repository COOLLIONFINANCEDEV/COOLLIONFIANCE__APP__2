import { useTheme } from "@emotion/react";
import { Button, Stack, TextareaAutosize, TextField } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  errorUpdate,
  successUpdate,
} from "../../../Context/Content/AppContent";

import { LENDER } from "../../../Context/Roles/roles";
import { deleteLoader, setLoader } from "../../../features/Loader/LoaderSlice";
import {
  CheckUser,
  selectLogin,
  UpdateUser,
} from "../../../features/Login/LoginSlice";
import randomkey from "../../../Helpers/randomKey";
import VerifyValue from "../../../Helpers/VerifyValue";
import YupValidationSchema from "../../../Helpers/YupValidationSchema";
import countriesList from "../../../Seeds/country";
import SessionService from "../../../Services/SessionService";
import CountrySelect from "../../Form/CountrySelect";
import UploadForm from "../../Form/UploadForm";
import FormikDecoration from "../../../Helpers/FormikDecoration";
import { setPoppu } from "../../../features/Poppu/PoppuSlice";

const UserInfo = () => {
  const role = useSelector(selectLogin).user.role;
  const { palette } = useTheme();
  const user = useSelector(selectLogin).user;
  const [listCountry, setListCountry] = React.useState({
    status: false,
    countries: [],
  });
  const [country, setCountry] = React.useState(
    user.localisation !== undefined ? VerifyValue(user.localisation) : ""
  );
  const [image, setImage] = React.useState(VerifyValue(user.image));
  const dispatch = useDispatch();
  const updateLoaderKey = randomkey();

  React.useEffect(() => {
    setListCountry({
      status: true,
      countries: countriesList,
    });
  }, []);

  const initialValues = {
    firstName: VerifyValue(user.first_name),
    lastName: VerifyValue(user.last_name),
    loanCause: VerifyValue(user.loan_reason),
    about: VerifyValue(user.about_me),
  };

  const handleSubmit = (values) => {
    values.image = image;
    values.country = country;
    dispatch(setLoader({ state: true, key: updateLoaderKey }));
    SessionService.UpdateUser(user.id, values)
      .then((datas) => {
        dispatch(deleteLoader({ key: updateLoaderKey }));
        if (datas.data.error === true) {
          dispatch(setPoppu({ state: "error", content: errorUpdate() }));
        } else {
          dispatch(setPoppu({ state: "success", content: successUpdate() }));
          dispatch(
            UpdateUser({ newUser: JSON.stringify(datas.data.data), user: user })
          );
          dispatch(CheckUser());
        }
      })
      .catch((error) => {
        console.log(error);
        dispatch(deleteLoader({ key: updateLoaderKey }));
        dispatch(setPoppu({ state: "error", content: errorUpdate() }));
      });
  };

  const formik = FormikDecoration(
    initialValues,
    YupValidationSchema([
      { key: "firstName", type: "name" },
      { key: "lastName", type: "name" },
      {
        key: "loanCause",
        type: "comment",
      },
      {
        key: "about",
        type: "comment",
      },
    ]),
    handleSubmit
  );

  return (
    <>
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
        <UploadForm
          imageSelected={(value) => setImage(value)}
          DefaultImage={image}
        />
        <Stack direction={"row"} columnGap="5%" rowGap="1.5rem" flexWrap="wrap">
          <TextField
            id="firstName"
            name="firstName"
            label="First Name"
            variant="outlined"
            sx={{ width: { xs: "100%", sm: "47.5%", md: "47.5%" } }}
            rows={"4"}
            value={formik.values.firstName}
            onChange={formik.handleChange}
            error={formik.touched.firstName && Boolean(formik.errors.firstName)}
            helperText={formik.touched.firstName && formik.errors.firstName}
            type={"text"}
          />
          <TextField
            id="lastName"
            name="lastName"
            label="Last Name"
            variant="outlined"
            sx={{ width: { xs: "100%", sm: "47.5%", md: "47.5%" } }}
            rows={"4"}
            value={formik.values.lastName}
            onChange={formik.handleChange}
            error={formik.touched.lastName && Boolean(formik.errors.lastName)}
            helperText={formik.touched.lastName && formik.errors.lastName}
          />
        </Stack>
        <Stack direction={"row"} columnGap="5%" rowGap="1.5rem" flexWrap="wrap">
          {listCountry.status === true && (
            <CountrySelect
              selectCountry={(value) => {
                setCountry(JSON.stringify(value));
              }}
              items={listCountry.countries}
              type={"user"}
            />
          )}
        </Stack>
        <Stack
          direction={"row"}
          columnGap="2rem"
          rowGap="1.5rem"
          flexWrap="wrap"
        >
          <TextField
            id="loanCause"
            name="loanCause"
            placeholder={
              role === LENDER()
                ? "I loan because"
                : "I am asking for an investment because"
            }
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
            sx={{ width: "100%" }}
            value={formik.values.loanCause}
            onChange={formik.handleChange}
            error={formik.touched.loanCause && Boolean(formik.errors.loanCause)}
            helperText={formik.touched.loanCause && formik.errors.loanCause}
          />
          <TextField
            id="about"
            name="about"
            placeholder="About Me"
            sx={{
              width: "100%",
            }}
            value={formik.values.about}
            onChange={formik.handleChange}
            error={formik.touched.about && Boolean(formik.errors.about)}
            helperText={formik.touched.about && formik.errors.about}
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
        </Stack>
        <Button variant="contained" type="submit">
          Save personal info
        </Button>
      </form>
    </>
  );
};

export default UserInfo;
