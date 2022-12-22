import { useTheme } from "@emotion/react";
import { PhotoCamera } from "@mui/icons-material";
import {
  Button,
  FormControl,
  MenuItem,
  Select,
  Stack,
  TextareaAutosize,
  TextField,
} from "@mui/material";
import { useFormik } from "formik";
import React from "react";
import { useSelector } from "react-redux";
import { LENDER } from "../../../Context/Roles/roles";
import { selectLogin } from "../../../features/Login/LoginSlice";
import FormikDecoration, {
  FormikOtherDecoration,
} from "../../../Helpers/FormikDecoration";
import ConvertFileInBase64 from "../../../Helpers/Token/ConvertFileInBase64";
import YupValidationSchema from "../../../Helpers/YupValidationSchema";

const UserInfo = () => {
  const [country, setCountry] = React.useState(10);
  const handlehChangeCountry = React.useCallback((event) => {
    setCountry(event.target.value);
  }, []);
  const role = useSelector(selectLogin).user.role;
  const { palette } = useTheme();
  const [baseImage, setBaseImage] = React.useState("");

  const uploadImg = async (e) => {
    const file = e.target.files[0];
    const base64 = await ConvertFileInBase64(file);
    setBaseImage(base64);
  };

  const initialValues = {
    firstName: "sylla",
    lastName: "ibrahim",
    email: "ibrahimsyla@gmail.com",
    contact: "232323232323",
    country: {},
    loanCause: "adfdfadf",
    about: "adfas",
  };

  const handleSubmit = (values) => {
    console.log(values);
  };

  const formik = FormikDecoration(
    initialValues,
    YupValidationSchema([
      { key: "firstName", type: "name" },
      { key: "lastName", type: "name" },
      { key: "email", type: "email" },
      { key: "contact", type: "contact" },
      { key: "country", type: "country" },
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

  console.log(formik);
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
        {/* eslint-disable-next-line jsx-a11y/alt-text */}
        <img
          src={baseImage}
          style={{ borderRadius: "20%", width: "25%", margin: "auto" }}
        />
        <Button
          variant="outlined"
          component="label"
          sx={{ width: "100%", height: "150px" }}
          startIcon={<PhotoCamera />}
        >
          Choose image <br /> (Must be a .gif, .jpg or .png)
          <input
            hidden
            accept="image/*"
            multiple
            type="file"
            onChange={uploadImg}
          />
        </Button>
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
          />
          <TextField
            id="filled-basic"
            label="Last Name"
            variant="outlined"
            sx={{ width: { xs: "100%", sm: "47.5%", md: "47.5%" } }}
            rows={"4"}
          />
        </Stack>
        <Stack direction={"row"} columnGap="5%" rowGap="1.5rem" flexWrap="wrap">
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={country}
            label="Country"
            onChange={handlehChangeCountry}
            sx={{ width: "100%" }}
          >
            <MenuItem value={10}>COTE D'IVOIRE</MenuItem>
            <MenuItem value={20}>UNITED STATE</MenuItem>
            <MenuItem value={30}>FRANCE</MenuItem>
          </Select>
        </Stack>
        <Stack
          direction={"row"}
          columnGap="2rem"
          rowGap="1.5rem"
          flexWrap="wrap"
        >
          <TextareaAutosize
            id="filled-basic"
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
          />
          <TextareaAutosize
            id="filled-basic"
            placeholder="About Me"
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
          Save personal info
        </Button>
      </form>
    </>
  );
};

export default UserInfo;
