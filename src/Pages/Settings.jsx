import { useTheme } from "@emotion/react";
import {
  Divider,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  TextField,
  Typography,
  Stack,
  FormControl,
  Select,
  MenuItem,
  Button,
  TextareaAutosize,
  Checkbox,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import SecurityIcon from "@mui/icons-material/Security";
import PaymentIcon from "@mui/icons-material/Payment";
import UnsubscribeIcon from "@mui/icons-material/Unsubscribe";
import CookieIcon from "@mui/icons-material/Cookie";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import palette from "../Context/themes/palette";

const Settings = () => {
  const { width } = useTheme();
  const [ongletItemState, setOngletItemState] = React.useState(0);

  const settingStyle = {
    margin: "10vh auto 0 auto",
    width: width,
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
  };

  return (
    <Box sx={settingStyle}>
      <SettingOnglet
        ongletActive={ongletItemState}
        handleOnglet={setOngletItemState}
      />
      <SettingContent ongletActive={ongletItemState} />
    </Box>
  );
};

const SettingContent = ({ ongletActive }) => {
  const { palette } = useTheme();
  const contentStyle = {
    width: "65%",
    margin: "0 0 0 5%",
    backgroundColor: palette.secondary.light,
    border: "1px solid ",
    borderColor: palette.secondary.main,
    borderRadius: "10px",
    padding: "10px 2.5%",
  };

  return (
    <Box sx={contentStyle}>
     {ongletActive === 0 && <Account />}
    </Box>
  );
};

const Account = () => {
  const [country, setCountry] = React.useState("");
  const handlehChangeCountry = React.useCallback((event) => {
    setCountry(event.target.value);
  }, []);
  const inputStyle = {
    width: "30%",
  };
  return (
    <>
      <Typography variant="h4">Account Settings</Typography>
      <Typography variant="h6">
        Personal Info{" "}
        <Typography
          variant="span"
          sx={{ fontSize: "0.8em", fontWeight: "bold" }}
        >
          * denotes a required field
        </Typography>
      </Typography>
      <Divider sx={{ marginBottom: "5vh" }} />
      <FormControl
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          width: "100%",
          rowGap: "5vh",
        }}
      >
        <Stack direction={"row"} columnGap="2rem">
          <TextField
            id="filled-basic"
            label="First Name"
            variant="outlined"
            sx={inputStyle}
            rows={"4"}
          />
          <TextField
            id="filled-basic"
            label="Last Name"
            variant="outlined"
            sx={inputStyle}
            rows={"4"}
          />
        </Stack>
        <Stack direction={"row"} columnGap="2rem">
          <TextField
            id="filled-basic"
            label="Street address"
            variant="outlined"
            sx={{ width: "65%" }}
            rows={"4"}
          />
          <TextField
            id="filled-basic"
            label="City"
            variant="outlined"
            sx={{ width: "30%" }}
            rows={"4"}
          />
        </Stack>
        <Stack direction={"row"} columnGap="2rem">
          <TextField
            id="filled-basic"
            label="State/Province"
            variant="outlined"
            sx={{ width: "15%" }}
            rows={"4"}
          />
          <TextField
            id="filled-basic"
            label="Postal code"
            variant="outlined"
            sx={{ width: "25%" }}
            rows={"4"}
          />
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={country}
            label="Country"
            onChange={handlehChangeCountry}
            sx={{ width: "60%" }}
          >
            <MenuItem value={10}>COTE D'IVOIRE</MenuItem>
            <MenuItem value={20}>UNITED STATE</MenuItem>
            <MenuItem value={30}>FRANCE</MenuItem>
          </Select>
        </Stack>
        <Button variant="contained">Save personal info</Button>
      </FormControl>
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
        <Typography variant={"h5"}>Email</Typography>
        <Typography>
          Current email address: <b>ibrahimsyllac196@gmail.com</b>
        </Typography>
        <Typography>
          Use this address to login and to receive messages from Kiva.
        </Typography>
        <Typography>
          If you would like to change the email address on your Kiva account,
          click the button below. Clicking this button will send a verification
          email to your current email address. You will need to click the link
          in that email to confirm that you want to change your email address.
          If you cannot access your old email address, please get in touch at
          dev@coollionfi.com.
        </Typography>
        <Button variant="contained">Request Change</Button>
      </Box>
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
        <Typography variant="h6">My Lender Profile</Typography>
        <Button
          variant="outlined"
          component="label"
          sx={{ width: "100%", height: "150px" }}
          startIcon={<PhotoCamera />}
        >
          Choose image <br /> (Must be a .gif, .jpg or .png)
          <input hidden accept="image/*" multiple type="file" />
        </Button>
        <FormControl
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            width: "100%",
            rowGap: "5vh",
          }}
        >
          <Stack direction={"row"} columnGap="2rem">
            <TextField
              id="filled-basic"
              label=" Name"
              variant="outlined"
              sx={inputStyle}
              rows={"4"}
            />
            <TextField
              id="filled-basic"
              label="City"
              variant="outlined"
              sx={inputStyle}
              rows={"4"}
            />
            <TextField
              id="filled-basic"
              label="State/Province"
              variant="outlined"
              sx={{ width: "30%" }}
              rows={"4"}
            />
          </Stack>

          <Stack direction={"row"} columnGap="2rem">
            <TextField
              id="filled-basic"
              label="Occupation"
              variant="outlined"
              sx={{ width: "30%" }}
              rows={"4"}
            />
            <TextField
              id="filled-basic"
              label="Website"
              variant="outlined"
              sx={{ width: "30%" }}
              rows={"4"}
            />
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={country}
              label="Country"
              onChange={handlehChangeCountry}
              sx={{ width: "60%" }}
            >
              <MenuItem value={10}>COTE D'IVOIRE</MenuItem>
              <MenuItem value={20}>UNITED STATE</MenuItem>
              <MenuItem value={30}>FRANCE</MenuItem>
            </Select>
          </Stack>

          <Stack direction={"row"} columnGap="2rem">
            <TextareaAutosize
              id="filled-basic"
              placeholder="I loan because"
              style={{
                width: "50%",
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
                width: "50%",
                height: "100px",
                borderColor: palette.secondary.main,
                borderSize: "2px",
                borderRadius: "5px",
              }}
            />
          </Stack>

          <Stack direction="row" alignItems="center" columnGap="10px">
            <Checkbox />{" "}
            <Typography sx={{ fontWeight: "bold" }}>
              Make my page and loans public. If unchecked, the information above
              will not be displayed.
            </Typography>
          </Stack>

          <Button variant="contained">Save Profile info</Button>
        </FormControl>
      </Box>
    </>
  );
};

const SettingOnglet = ({ ongletActive, handleOnglet }) => {
  const { palette } = useTheme();

  const ongletStyle = {
    width: "25%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    paddng: "0",
    margin: "0",
    rowGap: "15px",
    oveflow: "hidden",
    backgroundColor: palette.secondary.light,
    overflow: "hidden",
    border: "1px solid ",
    borderColor: palette.secondary.main,
    borderRadius: "10px",
  };

  const ongletItemsWithIcon = [
    { name: "Account", icon: <PersonOutlineIcon /> },
    { name: "Security", icon: <SecurityIcon /> },
    { name: "Payment", icon: <PaymentIcon /> },
    { name: "Email preferences", icon: <UnsubscribeIcon /> },
    { name: "Data settings", icon: <CookieIcon /> },
  ];

  return (
    <Box sx={ongletStyle}>
      <List sx={{ width: "100%" }}>
        {ongletItemsWithIcon.map((item, index) => {
          return (
            <ListItemButton
              key={index}
              selected={index === ongletActive ? true : false}
              onClick={() => handleOnglet(index)}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText>{item.name}</ListItemText>
            </ListItemButton>
          );
        })}
      </List>
    </Box>
  );
};

export default Settings;
