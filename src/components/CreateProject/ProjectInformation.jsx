import { useTheme } from "@emotion/react";
import {
  Box,
  Button,
  FormControl,
  MenuItem,
  Select,
  Stack,
  TextareaAutosize,
  TextField,
} from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { selectLogin } from "../../features/Login/LoginSlice";
import FormikDecoration from "../../Helpers/FormikDecoration";
import VerifyValue from "../../Helpers/VerifyValue";
import YupValidationSchema from "../../Helpers/YupValidationSchema";
import countriesList from "../../Seeds/country";
import CountrySelect from "../Form/CountrySelect";
import UploadForm from "../Form/UploadForm";

const ProjectInformation = () => {
  const { palette } = useTheme();
  const InformationStyle = {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };
  const user = useSelector(selectLogin).user;
  const [image, setImage] = React.useState();
  const [listCountry, setListCountry] = React.useState({
    status: false,
    countries: [],
  });
  const [country, setCountry] = React.useState();

  React.useEffect(() => {
    setListCountry({
      status: true,
      countries: countriesList,
    });
  }, []);

  const initialValue = {
    name: "",
    startDate: `${new Date().getFullYear()}-${new Date().getMonth() +
      1}-${new Date().getDate()}`,
    endDate: "",
    teaserTitle: "",
    // localisation: "",
    amount: "",
    minAmount: "",
    loanLenght: "",
    interestRate: "",
    RepaymentSchedule: true,
    disbursedDate: "",
    image: "",
    story: "",
    investmentMotive: "",
    aboutLoan: "",
    aboutFriendship: "",
    status: "false",
  };

  const inputLabel = {
    name: "Name of the project",
    startDate: "Project start date",
    endDate: "Project end date",
    teaserTitle: "Teaser title",
    amount: "The amount requested",
    minAmount: "The minimun amount",
    loanLenght: "The terme of the loan",
    interestRate: "The interest rate of the project",
    RepaymentSchedule: "repayment schedule period",
    disbursedDate: "disbursement date",
    image: "pictures of the projects",
    story: "tell me your story",
    investmentMotive: "why your loan application is special",
    aboutLoan: "more information about that loan",
    aboutFriendship: "Learn more about the Friendship Bridge",
  };

  const handleSubmit = (values) => {
    values.image = image;
    values.localisation = country;
    console.log(values);
  };

  const formik = FormikDecoration(
    initialValue,
    YupValidationSchema([{ key: "name", type: "name" }]),
    handleSubmit
  );

  console.log(formik);

  return (
    <Box variant="form" sx={InformationStyle}>
      <Box sx={{ width: "90%" }}>
        <Stack
          direction={"row"}
          columnGap="5%"
          rowGap="25px"
          flexWrap={"wrap"}
          label="Street address"
          component={"form"}
          onSubmit={formik.handleSubmit}
        >
          <UploadForm
            imageSelected={(value) => setImage(value)}
            DefaultImage={false}
          />

          <TextField
            sx={{ width: "100%" }}
            label={inputLabel.name}
            id="name"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            error={Boolean(formik.errors.name) && formik.touched.name}
            helperText={formik.touched.name && formik.errors.name}
          />

          <TextField
            placeholder="Placeholder Text"
            sx={{ width: "47.5%" }}
            type="date"
            label={inputLabel.startDate}
            id="startDate"
            name="startDate"
            value={formik.values.startDate}
            onChange={formik.handleChange}
            error={Boolean(formik.errors.startDate) && formik.touched.startDate}
            helperText={formik.touched.startDate && formik.errors.startDate}
          />

          <TextField
            sx={{ width: "47.5%" }}
            type="date"
            label={inputLabel.endDate}
            id="endDate"
            name="endDate"
            value={formik.values.endDAte}
            onChange={formik.handleChange}
            error={Boolean(formik.errors.endDate) && formik.touched.endDate}
            helperText={formik.touched.endDate && formik.errors.endDate}
          />

          <TextField
            sx={{ width: "47.5%" }}
            label={inputLabel.teaserTitle}
            name="teaserTitle"
            id="teaserTitle"
            value={formik.values.teaserTitle}
            onChange={formik.handleChange}
            error={
              Boolean(formik.errors.teaserTitle) && formik.touched.teaserTitle
            }
            helperText={formik.touched.teaserTitle && formik.errors.teaserTitle}
          />

          <TextField
            type="number"
            sx={{ width: "47.5%" }}
            label={inputLabel.amount}
            name="amount"
            id="amount"
            value={formik.values.amount}
            onChange={formik.handleChange}
            error={Boolean(formik.errors.amount) && formik.touched.amount}
            helperText={formik.touched.amount && formik.errors.amount}
          />

          <TextField
            type="number"
            sx={{ width: "47.5%" }}
            label={inputLabel.minAmount}
            name="minAmount"
            id="minAmount"
            value={formik.values.minAmount}
            onChange={formik.handleChange}
            error={Boolean(formik.errors.minAmount) && formik.touched.minAmount}
            helperText={formik.touched.minAmount && formik.errors.minAmount}
          />

          <TextField
            type="date"
            sx={{ width: "47.5%" }}
            label={inputLabel.loanLenght}
            name="loanLenght"
            id="loanLenght"
            value={formik.values.loanLenght}
            onChange={formik.handleChange}
            error={
              Boolean(formik.errors.loanLenght) && formik.touched.loanLenght
            }
            helperText={formik.touched.loanLenght && formik.errors.loanLenght}
          />

          <TextField
            type="number"
            sx={{ width: "47.5%" }}
            label={inputLabel.interestRate}
            name="interestRate"
            id="interestRate"
            value={formik.values.interestRate}
            onChange={formik.handleChange}
            error={
              Boolean(formik.errors.interestRate) && formik.touched.interestRate
            }
            helperText={
              formik.touched.interestRate && formik.errors.interestRate
            }
          />

          <Select
            id="RepaymentSchedule"
            value={formik.values.RepaymentSchedule}
            label={inputLabel.RepaymentSchedule}
            error={
              Boolean(formik.errors.RepaymentSchedule) &&
              formik.touched.RepaymentSchedule
            }
            helperText={
              formik.touched.RepaymentSchedule &&
              formik.errors.RepaymentSchedule
            }
            onChange={formik.handleChange}
            sx={{ width: "47.5%" }}
          >
            <MenuItem value={true}>Monthly payment</MenuItem>
            <MenuItem value={false}>Annual payment</MenuItem>
          </Select>

          <TextField
            type="date"
            sx={{ width: "47.5%" }}
            label={inputLabel.disbursedDate}
            name="disbursedDate"
            id="disbursedDate"
            value={formik.values.disbursedDate}
            onChange={formik.handleChange}
            error={
              Boolean(formik.errors.disbursedDate) &&
              formik.touched.disbursedDate
            }
            helperText={
              formik.touched.disbursedDate && formik.errors.disbursedDate
            }
            disabled={true}
          />

          <Stack
            direction={"row"}
            columnGap="5%"
            rowGap="1.5rem"
            flexWrap="wrap"
            sx={{ width: "47.5%" }}
          >
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

          <TextField
            id="investmentMotive"
            name="investmentMotive"
            label={inputLabel.investmentMotive}
            sx={{
              width: "100%",
            }}
            value={formik.values.investmentMotive}
            onChange={formik.handleChange}
            error={
              formik.touched.investmentMotive &&
              Boolean(formik.errors.investmentMotive)
            }
            helperText={
              formik.touched.investmentMotive && formik.errors.investmentMotive
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
          />

          <TextField
            id="aboutLoan"
            name="aboutLoan"
            label={inputLabel.aboutLoan}
            sx={{
              width: "100%",
            }}
            value={formik.values.aboutLoan}
            onChange={formik.handleChange}
            error={formik.touched.aboutLoan && Boolean(formik.errors.aboutLoan)}
            helperText={formik.touched.aboutLoan && formik.errors.aboutLoan}
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
            id="aboutFriendship"
            name="aboutFriendship"
            label={inputLabel.aboutFriendship}
            sx={{
              width: "100%",
            }}
            value={formik.values.aboutFriendship}
            onChange={formik.handleChange}
            error={
              formik.touched.aboutFriendship &&
              Boolean(formik.errors.aboutFriendship)
            }
            helperText={
              formik.touched.aboutFriendship && formik.errors.aboutFriendship
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
          />

          <TextField
            id="story"
            name="story"
            label={inputLabel.story}
            sx={{
              width: "100%",
            }}
            value={formik.values.story}
            onChange={formik.handleChange}
            error={formik.touched.story && Boolean(formik.errors.story)}
            helperText={formik.touched.story && formik.errors.story}
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
          <Button variant="contained" sx={{ width: "100%" }} type="submit">
            record information
          </Button>
        </Stack>
      </Box>
    </Box>
  );
};

export default ProjectInformation;
