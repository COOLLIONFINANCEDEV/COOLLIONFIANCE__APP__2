import { useTheme } from "@emotion/react";
import { PhotoCamera } from "@mui/icons-material";
import { Button, Stack, TextareaAutosize, TextField } from "@mui/material";
import { useFormik } from "formik";
import React from "react";
import { useSelector } from "react-redux";
import { LENDER } from "../../../Context/Roles/roles";
import { selectLogin } from "../../../features/Login/LoginSlice";
import ConvertFileInBase64 from "../../../Helpers/Token/ConvertFileInBase64";
import YupValidationSchema from "../../../Helpers/YupValidationSchema";
import SessionService from "../../../Services/SessionService";
import CountrySelect from "../../Form/CountrySelect";
import UploadForm from "../../Form/UploadForm";

const UserInfo = () => {
  const role = useSelector(selectLogin).user.role;
  const { palette } = useTheme();
  const [listCountry, setListCountry] = React.useState({
    status: false,
    countries: [],
  });
  const [country, setCountry] = React.useState("");
  const [image, setImage] = React.useState("");

  React.useEffect(() => {
    SessionService.getCountries().then((datas) => {
      setListCountry({
        status: true,
        countries: datas.data,
      });
    });
  }, []);

  const initialValues = {
    firstName: "",
    lastName: "",
    loanCause: "",
    about: "",
  };

  const handleSubmit = (values) => {
    console.log(values);
  };

  const ValidationSchema = YupValidationSchema([
    { key: "firstName", type: "name" },
    { key: "lastName", type: "name" },
    { key: "email", type: "email" },
    { key: "contact", type: "contact" },
    {
      key: "loanCause",
      type: "comment",
    },
    {
      key: "about",
      type: "comment",
    },
  ]);

  const formik = useFormik({
    initialValues,
    ValidationSchema,
    onSubmit: handleSubmit,
  });

  console.log(formik.values);

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
        <UploadForm imageSelected={(value) => setImage(value)} />
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
            />
          )}
        </Stack>
        <Stack
          direction={"row"}
          columnGap="2rem"
          rowGap="1.5rem"
          flexWrap="wrap"
        >
          <TextareaAutosize
            id="loanCause"
            name="loanCause"
            placeholder={
              role === LENDER()
                ? "I loan because"
                : "I am asking for an investment because"
            }
            style={{
              width: "100%",
              height: "100px",
              borderColor: palette.secondary.main,
              borderSize: "2px",
              borderRadius: "5px",
            }}
            value={formik.values.loanCause}
            onChange={formik.handleChange}
            error={formik.touched.loanCause && Boolean(formik.errors.loanCause)}
            helperText={formik.touched.loanCause && formik.errors.loanCause}
          />
          <TextareaAutosize
            id="about"
            name="about"
            placeholder="About Me"
            style={{
              width: "100%",
              height: "100px",
              borderColor: palette.secondary.main,
              borderSize: "2px",
              borderRadius: "5px",
            }}
            value={formik.values.about}
            onChange={formik.handleChange}
            error={formik.touched.about && Boolean(formik.errors.about)}
            helperText={formik.touched.about && formik.errors.about}
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
