import { useTheme } from "@emotion/react";
import { Box, Button, Stack, TextareaAutosize, TextField } from "@mui/material";
import React from "react";
import FormikDecoration from "../../Helpers/FormikDecoration";
import YupValidationSchema from "../../Helpers/YupValidationSchema";
import countriesList from "../../Seeds/country";
import CountrySelect from "../Form/CountrySelect";
import UploadForm from "../Form/UploadForm";
import UploadMulitpleImage from "../Form/UploadMulitpleImage";
import randomkey from "../../Helpers/randomKey";

const ProjectInformation = ({ handleStateStep, stateStep }) => {
  const { palette } = useTheme();
  const InformationStyle = {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };
  const [image, setImage] = React.useState(null);
  const [carousel, setCarousel] = React.useState([]);
  const [country, setCountry] = React.useState(null);
  // eslint-disable-next-line no-unused-vars
  const [imageList, setImageList] = React.useState([]);

  const initialValue = {
    impactImage: "",
    projectTitle: "",
    teaserTitle: "",
    carouselImage: "",
    projectCountry: "",
    story: "",
    loanApplicationSpecial: "",
    loanInformation: "",
  };

  const validationSchema = [
    { key: "impactImage", type: "text" },
    { key: "projectTitle", type: "name" },
    { key: "teaserTitle", type: "comment", props: [15, 60] },
    { key: "carouselImage", type: "text", required: false },
    { key: "projectCountry", type: "text" },
    { key: "story", type: "comment", props: [200, 500] },
    { key: "loanApplicationSpecial", type: "comment", props: [200, 1500] },
    { key: "loanInformation", type: "comment", props: [200, 1500] },
  ];

  const inputLabel = {
    impactImage: "Impact Image",
    projectTitle: "Project Title",
    teaserTitle: "Teaser Title",
    carouselImage: "Gallery Image",
    projectCountry: "Project Country",
    story: "Story about your project",
    loanApplicationSpecial: "Why you loan is Special",
    loanInformation: "Loan information",
  };

  const handleSubmit = (values) => {
    values.carouselImage = JSON.stringify(carousel);
    handleStateStep(true, values);
  };

  const handleCarousel = (value) => {
    setImageList([randomkey()]);
    setCarousel(value);
  };

  const formik = FormikDecoration(
    initialValue,
    YupValidationSchema(validationSchema),
    handleSubmit
  );

  const handleSelectCountry = (option) => {
    const data = JSON.stringify(option);
    setCountry(data);
  };

  React.useEffect(() => {
    formik.setFieldValue("projectCountry", country ?? "");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [country]);

  React.useEffect(() => {
    formik.setFieldValue("impactImage", image ?? "");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [image]);

  return (
    <Box variant="form" sx={InformationStyle}>
      <Box sx={{ width: "90%" }}>
        <Stack
          direction={"row"}
          columnGap="5%"
          rowGap="10px"
          flexWrap={"wrap"}
          label="Street address"
          component={"form"}
          onSubmit={formik.handleSubmit}
        >
          <UploadForm
            title={inputLabel.impactImage}
            imageSelected={(value) => setImage(value)}
            DefaultImage={false}
            error={
              Boolean(formik.errors.impactImage) && formik.touched.impactImage
            }
          />

          <TextField
            sx={{ width: "100%" }}
            label={inputLabel.projectTitle}
            id="projectTitle"
            name="projectTitle"
            value={formik.values.projectTitle}
            onChange={formik.handleChange}
            error={
              Boolean(formik.errors.projectTitle) && formik.touched.projectTitle
            }
            helperText={
              formik.touched.projectTitle && formik.errors.projectTitle
            }
          />

          <TextField
            sx={{ width: "100%" }}
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

          <UploadMulitpleImage
            title={inputLabel.carouselImage}
            imageSelected={handleCarousel}
            DefaultImage={false}
          />

          <Stack
            direction={"row"}
            columnGap="5%"
            rowGap="1.5rem"
            flexWrap="wrap"
            sx={{ width: "100%" }}
          >
            <CountrySelect
              selectCountry={handleSelectCountry}
              items={countriesList}
              error={
                Boolean(formik.errors.projectCountry) &&
                formik.touched.projectCountry
              }
              helperText={
                formik.touched.projectCountry && formik.errors.projectCountry
              }
              name={"projectCountry"}
            />
          </Stack>

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

          <TextField
            id="loanApplicationSpecial"
            name="loanApplicationSpecial"
            label={inputLabel.loanApplicationSpecial}
            sx={{
              width: "100%",
            }}
            value={formik.values.loanApplicationSpecial}
            onChange={formik.handleChange}
            error={
              formik.touched.loanApplicationSpecial &&
              Boolean(formik.errors.loanApplicationSpecial)
            }
            helperText={
              formik.touched.loanApplicationSpecial &&
              formik.errors.loanApplicationSpecial
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
            id="loanInformation"
            name="loanInformation"
            label={inputLabel.loanInformation}
            sx={{
              width: "100%",
            }}
            value={formik.values.loanInformation}
            onChange={formik.handleChange}
            error={
              formik.touched.loanInformation &&
              Boolean(formik.errors.loanInformation)
            }
            helperText={
              formik.touched.loanInformation && formik.errors.loanInformation
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

          <Button variant="contained" sx={{ width: "100%" }} type="submit">
            record information
          </Button>
        </Stack>
      </Box>
    </Box>
  );
};

export default ProjectInformation;
