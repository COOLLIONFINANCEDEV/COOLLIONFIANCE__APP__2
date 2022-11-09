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
import cardVisaImg from "../assets/imgs/visa.png";
import DeleteIcon from "@mui/icons-material/Delete";
import { useTheme } from "@emotion/react";
import AddCardIcon from "@mui/icons-material/AddCard";
import CreditScoreIcon from "@mui/icons-material/CreditScore";
import EditIcon from "@mui/icons-material/Edit";

const PaymentByCardSetting = () => {
  const [card, setCard] = React.useState(0);
  return (
    <Box sx={{ width: "100%" }}>
      <Typography variant="h6">Credit Card Settings</Typography>
      {card === 0 && <AddCard addCardFunc={setCard} />}
      {card === 1 && <CardForm addCardFunc={setCard} />}
      {card === 2 && <ShowCard addCardFunc={setCard} />}
    </Box>
  );
};
const AddCard = ({ addCardFunc }) => {
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
      <Typography>There are no cards saved to this account</Typography>
      <Button endIcon={<AddCardIcon />} onClick={() => addCardFunc(1)}>
        Add a new card
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
          label="Card Number"
          variant="outlined"
          sx={{ width: "100%" }}
        />
      </Stack>
      <Stack direction={"row"} columnGap="2rem">
        <TextField
          id="filled-basic"
          label="Expiration Date"
          variant="outlined"
          sx={{ width: "50%" }}
        />
        <TextField
          id="filled-basic"
          label="CVV"
          variant="outlined"
          sx={{ width: "50%" }}
        />
      </Stack>
      <Button
        variant="contained"
        endIcon={<CreditScoreIcon />}
        onClick={() => addCardFunc(2)}
      >
        Add Card
      </Button>
    </FormControl>
  );
};

const ShowCard = ({ addCardFunc }) => {
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
          <img src={cardVisaImg} style={{ height: "50px" }} alt="card visa" />
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
              Ending in 6093
            </Typography>
            <Typography variant="p" sx={{ fontStyle: "italic" }}>
              Visa
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

export default PaymentByCardSetting;
