import {
  Avatar,
  Button,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Stack,
  TextField,
  TextareaAutosize,
  Typography,
} from "@mui/material";
import React from "react";
import investImg from "../assets/imgs/invest.svg";
import askMoneyImg from "../assets/imgs/askMoney.svg";
import { useTheme } from "@emotion/react";
import FormikDecoration from "../Helpers/FormikDecoration";
import YupValidationSchema from "../Helpers/YupValidationSchema";
import { useDispatch } from "react-redux";
import randomkey from "../Helpers/randomKey";
import { deleteLoader, setLoader } from "../features/Loader/LoaderSlice";
import SessionService from "../Services/SessionService";
import FormatResponse from "../Helpers/FormatResponse";
import { setPoppu } from "../features/Poppu/PoppuSlice";
import { errorContent, successContent } from "../Context/Content/AppContent";

const ChooseTenant = ({ handleChoose, handleClose, email }) => {
  const [choice, setChoice] = React.useState(false);
  const [steps, setSteps] = React.useState({ state: 1, type: "" });
  const { palette, shadows } = useTheme();

  const handleChange = () => {
    // handleChoose(choice);
    // handleClose();
    setSteps({
      state: 2,
      type: ChooseData.filter((item) => item.id === choice)[0].title,
    });
  };

  const ChooseData = [
    {
      id: 1,
      img: investImg,
      title: "lender",
      content:
        "A lender is an individual, group, or institution that invests funds in borrowers.",
    },
    {
      id: 2,
      img: askMoneyImg,
      title: "borrower",
      content:
        "A borrower is an individual or business seeking funding for a specific project.",
    },
  ];

  return (
    <Stack
      sx={{ padding: "10px 10px", minWidth: { xs: "70vw", md: "40vw" } }}
      alignItems="center"
      justifyContent={"space-between"}
    >
      {steps.state === 1 && (
        <>
          <Typography variant="h3">Your account type</Typography>
          <Typography>
            Please choose the type of account you wish to have on the platform
            between lenders and borrowers
          </Typography>
          <Stack
            justifyContent={"center"}
            alignItems={"center"}
            sx={{ width: "100%" }}
          >
            <Stack
              direction={{ md: "row" }}
              rowGap={5}
              spacing={2}
              justifyContent={"center"}
              alignItems={"center"}
              sx={{ width: "100%", m: "5px 0px" }}
            >
              {ChooseData.map((item) => (
                <Card
                  sx={{
                    width: { xs: "100%", md: "50%" },
                    cursor: "pointer",
                    border: "5px solid white",
                    borderColor:
                      item.id === choice ? palette.primary.main : "white",
                    "&:hover": {
                      boxShadow: shadows[4],
                    },
                    transition: "all 0.4s",
                  }}
                  onClick={() => setChoice(item.id)}
                  key={item.id}
                >
                  <CardHeader
                    avatar={
                      <Avatar
                        sx={{
                          bgcolor:
                            item.id === choice
                              ? palette.primary.main
                              : palette.secondary.main,
                        }}
                        aria-label="recipe"
                      >
                        {item.id}
                      </Avatar>
                    }
                  />
                  <CardMedia
                    sx={{ height: 200, width: 200, margin: "auto" }}
                    image={item.img}
                    title="green iguana"
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      textAlign={"center"}
                      textTransform={"capitalize"}
                    >
                      {item.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {item.content}
                    </Typography>
                  </CardContent>
                </Card>
              ))}
            </Stack>

            <Button
              variant="contained"
              sx={{ width: "95%", marginTop: "30px" }}
              disabled={!choice}
              onClick={handleChange}
            >
              I have made my choice
            </Button>
          </Stack>
        </>
      )}

      {steps.state === 2 && steps.type === "lender" && (
        <>
          <Typography variant="h3">Your account information</Typography>
          <Typography>
            Thank you for giving the relative information for your account
          </Typography>
          <CreateTenantLender email={email} />
        </>
      )}

      {steps.state === 2 && steps.type === "borrower" && (
        <>
          <Typography variant="h3">Your account information</Typography>
          <Typography>
            Thank you for giving the relative information for your account
          </Typography>
          <CreateBorrowerLender email={email} />
        </>
      )}
    </Stack>
  );
};
const CreateTenantLender = ({ email }) => {
  const lenderLoaderKey = randomkey();
  const dispatch = useDispatch();

  const initialValues = {
    name: "",
  };

  const handleSubmit = (values) => {
    dispatch(setLoader({ state: true, key: lenderLoaderKey }));
    const body = {
      id: 1, // doit venir d'une get api,
      name: values.name,
      email: email,
    };

    SessionService.CreateTenant(body)
      .then((datas) => {
        dispatch(deleteLoader({ key: lenderLoaderKey }));
        const data = FormatResponse(datas);
        if (data.error === false) {
          dispatch(setPoppu({ state: "success", content: successContent() }));
        } else {
          dispatch(setPoppu({ state: "error", content: errorContent() }));
        }
      })
      .catch((error) => {
        dispatch(setPoppu({ state: "error", content: errorContent() }));
      });
  };

  const formik = FormikDecoration(
    initialValues,
    YupValidationSchema([{ key: "name", type: "name" }]),
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
      <TextField
        label={"Name"}
        type="text"
        name="name"
        id="name"
        variant="outlined"
        sx={{ width: "95%" }}
        value={formik.values.name}
        onChange={formik.handleChange}
        error={formik.touched.name && Boolean(formik.errors.name)}
        helperText={formik.touched.name && formik.errors.name}
      />
      <Button variant="contained" sx={{ width: "95%" }} type="submit">
        Submit
      </Button>
    </Stack>
  );
};

const CreateBorrowerLender = ({ email }) => {
  const lenderLoaderKey = randomkey();
  const dispatch = useDispatch();
  const { palette } = useTheme();

  const initialValues = {
    name: "",
    description: "",
    phone: "",
    businessSector: "",
  };

  const handleSubmit = (values) => {
    dispatch(setLoader({ state: true, key: lenderLoaderKey }));
    const body = {
      id: 1, // doit venir d'une get api,
      name: values.name,
      email: email,
      description: values.description,
      phone: values.phone,
      phone2: values.phone,
      businessSector: values.businessSector,
    };

    SessionService.CreateTenant(body)
      .then((datas) => {
        dispatch(deleteLoader({ key: lenderLoaderKey }));
        const data = FormatResponse(datas);
        if (data.error === false) {
          dispatch(setPoppu({ state: "success", content: successContent() }));
        } else {
          dispatch(setPoppu({ state: "error", content: errorContent() }));
        }
      })
      .catch((error) => {
        dispatch(setPoppu({ state: "error", content: errorContent() }));
      });
  };

  const formik = FormikDecoration(
    initialValues,
    YupValidationSchema([
      { key: "name", type: "name" },
      { key: "description", type: "comment" },
      { key: "phone", type: "phoneRequired" },
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
      <TextField
        label={"Name"}
        type="text"
        name="name"
        id="name"
        variant="outlined"
        sx={{ width: "95%" }}
        value={formik.values.name}
        onChange={formik.handleChange}
        error={formik.touched.name && Boolean(formik.errors.name)}
        helperText={formik.touched.name && formik.errors.name}
      />

      <TextField
        type={"tel"}
        label={"Phone"}
        id="phone"
        name="phone"
        placeholder="phone number"
        sx={{ width: "95%" }}
        value={formik.values.phone}
        onChange={formik.handleChange}
        error={formik.touched.phone && Boolean(formik.errors.phone)}
        helperText={formik.touched.phone && formik.errors.phone}
      />

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

      <TextField
        label={"Business Sector"}
        type="text"
        name="businessSector"
        id="businessSector"
        variant="outlined"
        sx={{ width: "95%" }}
        value={formik.values.businessSector}
        onChange={formik.handleChange}
        error={
          formik.touched.businessSector && Boolean(formik.errors.businessSector)
        }
        helperText={
          formik.touched.businessSector && formik.errors.businessSector
        }
      />

      <Button variant="contained" sx={{ width: "95%" }} type="submit">
        Submit
      </Button>
    </Stack>
  );
};
export default ChooseTenant;
