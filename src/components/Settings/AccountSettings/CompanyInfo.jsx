import { useTheme } from "@emotion/react";
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
import React from "react";
import { useSelector } from "react-redux";
import { BORROWER, LENDER } from "../../../Context/Roles/roles";
import { selectLogin } from "../../../features/Login/LoginSlice";

const CompanyInfo = () => {
  const [country, setCountry] = React.useState(10);
  const handlehChangeCountry = React.useCallback((event) => {
    setCountry(event.target.value);
  }, []);
  const { palette } = useTheme();
  const userInfo = useSelector(selectLogin).user;
  const [hasCompany, setHascompany] = React.useState(false);
  return (
    <>
      {(userInfo.role === LENDER() && userInfo.companies.length === 0) && (
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
          >
            <Stack
              direction={"row"}
              columnGap="5%"
              rowGap="1.5rem"
              flexWrap="wrap"
            >
              <TextField
                id="filled-basic"
                label=" Name"
                variant="outlined"
                sx={{ width: "100%" }}
                rows={"4"}
              />
              <TextField
                id="filled-basic"
                label="Domain"
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
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={country}
                label="Country"
                onChange={handlehChangeCountry}
                sx={{ width: { xs: "100%", sm: "47.5%", md: "100%" } }}
              >
                <MenuItem value={10}>COTE D'IVOIRE</MenuItem>
                <MenuItem value={20}>UNITED STATE</MenuItem>
                <MenuItem value={30}>FRANCE</MenuItem>
              </Select>

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

            <Button variant="contained">Save Profile info</Button>
          </FormControl>
        </Box>
      )}
    </>
  );
};

export default CompanyInfo;
