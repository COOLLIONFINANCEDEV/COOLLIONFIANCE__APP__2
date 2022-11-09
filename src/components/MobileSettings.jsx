import React from "react";
import {
  Box,
  Button,
  FormControl,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import { Stack } from "@mui/system";
import DeleteIcon from "@mui/icons-material/Delete";
import { useTheme } from "@emotion/react";
import AddCardIcon from "@mui/icons-material/AddCard";
import CreditScoreIcon from "@mui/icons-material/CreditScore";
import EditIcon from "@mui/icons-material/Edit";

const MobileSettings = ({ title, service, img }) => {
  const [card, setCard] = React.useState(0);
  return (
    <Box sx={{ width: "100%" }}>
      <Typography variant="h6">{title} Settings</Typography>
      {card === 0 && <AddCard addCardFunc={setCard} service={service} />}
      {card === 1 && <CardForm addCardFunc={setCard} />}
      {card === 2 && (
        <ShowCard addCardFunc={setCard} img={img} service={service} />
      )}
    </Box>
  );
};
const AddCard = ({ addCardFunc, service }) => {
  const paymentSettingsBlockStyle = {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    flexDirection: "column",
    rowGap: "20px",
  };
  return (
    <Box style={paymentSettingsBlockStyle}>
      <Typography>There are no {service} saved to this account</Typography>
      <Button endIcon={<AddCardIcon />} onClick={() => addCardFunc(1)}>
        Add a new {service} to your account.
      </Button>
    </Box>
  );
};

const CardForm = ({ addCardFunc }) => {
  const formulaireStyle = {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    width: "100%",
    rowGap: "2vh",
    marginTop: "2vh",
  };
  return (
    <FormControl sx={formulaireStyle}>
      <Stack>
        <TextField
          id="filled-basic"
          label="Phone Number"
          variant="outlined"
          sx={{ width: "100%" }}
        />
      </Stack>
      <Button
        variant="contained"
        endIcon={<CreditScoreIcon />}
        onClick={() => addCardFunc(2)}
      >
        Add Phone Number
      </Button>
    </FormControl>
  );
};

const ShowCard = ({ addCardFunc, img, service }) => {
  const { palette } = useTheme();
  const CardShowDesign = {
    width: "100%",
    height: "70px",
    borderRadius: "10px",
    border: "1px solid ",
    borderColor: palette.primary.main,
    padding: "10px 15px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };
  return (
    <Box sx={CardShowDesign} variant="outlined">
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img src={img} style={{ height: "50px" }} alt="card visa" />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            columnGap: "20px",
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography
              variant="p"
              sx={{ fontWeight: "bold", fontSize: "1.1em" }}
            >
              {`+212 6 00 00 00 00`}
            </Typography>
            <Typography variant="p" sx={{ fontStyle: "italic" }}>
              {service}
            </Typography>
          </Box>
          <Box>
            <IconButton onClick={() => addCardFunc(1)}>
              <EditIcon color={"primary"} />
            </IconButton>
          </Box>
          <Box>
            <IconButton onClick={() => addCardFunc(0)}>
              <DeleteIcon color={"error"} />
            </IconButton>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default MobileSettings;
