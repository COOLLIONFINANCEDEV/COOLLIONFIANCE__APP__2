import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Chip,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";

import React from "react";
import LinearProgessCustomize from "./LinearProgessCustomize";
import InvestmentRule from "../Context/Concept/InvestmentRule";
import { useDispatch } from "react-redux";
import { addProject } from "../features/Card/CardSlice";
import randomkey from "../Helpers/randomKey";
import Payment from "./Payment/Payment";
import GenerateModalButton from "./Modal/GenerateModalButton";
import CreateModal from "./Modal/CreateModal";
import DefaultiImage from "../assets/imgs/card.png";

const ProjectCard = ({ setProjectDetails, ActionState = true, offer = [] }) => {
  const [shadow, setShadow] = React.useState(false);
  const [price, setPrice] = React.useState(InvestmentRule.minPay);
  const [error, setError] = React.useState({
    state: false,
    message: "",
  });
  const localisation = JSON.parse(offer.localisation);
  const image = offer.image === "Undefined" ? DefaultiImage : offer.image;
  const dispatch = useDispatch();

  const handleError = React.useCallback(
    (price) => {
      if (parseInt(price) < InvestmentRule.minPay) {
        setError({
          state: true,
          message: "the minimum amount is $25",
        });
      } else {
        setError({
          state: false,
          message: "",
        });
      }
    },
    [setError]
  );

  const handleSubmit = React.useCallback(
    (event) => {
      event.preventDefault();
      handleError(price);
      const body = {
        project: {
          id: randomkey(),
          name: "first",
        },
        price: price,
      };
      if (error.state === false) {
        dispatch(addProject(body));
      }
    },
    [handleError, price, dispatch, error]
  );

  const handleChange = React.useCallback(
    (event) => {
      setPrice(event.target.value);
      handleError(event.target.value);
    },
    [handleError, setPrice]
  );

  return (
    <Card
      sx={{
        width: "100%",
        maxWidth: { xs: "100%", sm: "calc((100%/2 - 20px))", md: "100%" },
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
      }}
      variant={shadow === false ? "outlined" : "elevation"}
      onMouseEnter={() => setShadow(true)}
      onMouseLeave={() => setShadow(false)}
    >
      <Stack
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
          flexDirection: { xs: "column", md: "row" },
          cursor: "pointer",
        }}
      >
        <Stack
          sx={{ width: { xs: "100%", md: "40%" }, height: "100%" }}
          onClick={() => setProjectDetails({ state: true, offer: offer })}
        >
          <CardMedia
            component={"img"}
            image={image}
            sx={{ width: "100%", height: { xs: "400px", md: "200px" } }}
          />
          <Box
            sx={{
              width: "90%",
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
              height: "30%",
              margin: "10px auto",
            }}
          >
            <Box>
              <Typography
                sx={{ fontSize: "1em", fontWeight: "bold" }}
                color="primary.light"
              >
                Company Name
              </Typography>
              <Typography
                sx={{
                  fontSize: "1em",
                  fontWeight: "bold",
                  wordBreak: "break-all",
                  textTransform: "capitalize",
                }}
              >
                {offer.company.name}
              </Typography>
            </Box>
            <Box>
              <Typography
                sx={{ fontSize: "1em", fontWeight: "bold" }}
                color="primary.light"
              >
                Loan Length
              </Typography>
              <Typography sx={{ fontSize: "1em", fontWeight: "bold" }}>
                {new Date(offer.loan_length).getMonth()} month
              </Typography>
            </Box>
          </Box>
        </Stack>

        <CardContent sx={{ width: { xs: "95%", md: "60%" }, height: "100%" }}>
          <Stack spacing={1.5}>
            <Stack
              justifyContent="space-between"
              sx={{ width: "100%", flexDirection: { xs: "column", md: "row" } }}
              flexWrap="wrap"
              rowGap={"20px"}
            >
              <Box
                sx={{
                  width: { xs: "100%", md: "30%" },
                  textAlign: { xs: "center", md: "auto" },
                }}
                onClick={() => setProjectDetails({ state: true, offer: offer })}
              >
                <Typography
                  sx={{
                    fontSize: "1.6em",
                    fontWeight: "bold",
                    textTransform: "capitalize",
                  }}
                >
                  {offer.name}
                </Typography>
                <Typography
                  sx={{ fontSize: "1em", fontWeight: "bold" }}
                  color="primary.light"
                >
                  {localisation.name.official}
                </Typography>
              </Box>
              {ActionState === true && (
                <CardActions
                  sx={{
                    width: { xs: "100%", md: "60%" },
                  }}
                >
                  <Box
                    sx={{
                      width: "100%",
                      display: "flex",
                      justifyContent: { xs: "center", md: "flex-end" },
                      alignitems: "center",
                      columnGap: "20px",
                      rowGap: "20px",
                      flexWrap: "wrap",
                      margin: 0,
                      padding: 0,
                      transform: "translate(-17px,0)",
                    }}
                    component="form"
                    onSubmit={handleSubmit}
                  >
                    <Box sx={{ width: "35%" }}>
                      <TextField
                        type={"number"}
                        size="small"
                        label={"Invest Now"}
                        InputProps={{
                          endAdornment: (
                            <InputAdornment position="end">$</InputAdornment>
                          ),
                        }}
                        value={price}
                        onChange={handleChange}
                        error={error.state}
                        helperText={error.message}
                        required
                      />
                    </Box>
                    <Box>
                      <CreateModal
                        OpenButton={GenerateModalButton}
                        ModalContent={Payment}
                      >
                        <Button
                          variant="contained"
                          color="primary"
                          type="submit"
                        >
                          Lend now
                        </Button>
                      </CreateModal>
                    </Box>
                  </Box>
                </CardActions>
              )}
            </Stack>
            <Stack
              direction="row"
              justifyContent="flex-start"
              alignItems="center"
              spacing={1}
              flexWrap="wrap"
              rowGap="5px"
              sx={{ width: "100%" }}
              onClick={() => setProjectDetails({ state: true, offer: offer })}
            >
              <Chip
                icon={<LocalOfferIcon />}
                size="small"
                label={`Sector: ${offer.category}`}
                variant="outlined"
                color="primary"
              />
              <Chip
                icon={<LocalOfferIcon />}
                size="small"
                label={`Location: ${localisation.name.official}`}
                variant="outlined"
                color="primary"
              />
            </Stack>
            <Box
              sx={{ width: "100%" }}
              onClick={() => setProjectDetails({ state: true, offer: offer })}
            >
              <Typography>
                {offer.investment_motive.substring(0, InvestmentRule.card.text)}
                ...
                <Typography
                  component="span"
                  color={"primary"}
                  sx={{ fontWeight: "bold", marginLeft: "3px" }}
                >
                  READ MORE
                </Typography>
              </Typography>
            </Box>
            <Box
              sx={{ width: "100%" }}
              onClick={() => setProjectDetails({ state: true, offer: offer })}
            >
              <LinearProgessCustomize value={30} />
            </Box>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginBottom: "10px",
              }}
              onClick={() => setProjectDetails({ state: true, offer: offer })}
            >
              <Typography sx={{ fontWeight: "bold" }}>
                Only {new Date(offer.end_date).getDate()} days and{" "}
                {new Date(offer.end_date).getMonth()} month left!{" "}
                <Typography
                  component={"span"}
                  color="primary"
                  sx={{ fontWeight: "bold" }}
                >
                  {offer.total_investment_to_raise} xof to go
                </Typography>
              </Typography>
            </Box>
          </Stack>
        </CardContent>
      </Stack>
    </Card>
  );
};

export default ProjectCard;
