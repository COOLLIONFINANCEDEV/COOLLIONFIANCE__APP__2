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
import InvestmentRule from "../Context/Concept/InvestmentRule";
import { useDispatch } from "react-redux";
import { addProject } from "../features/Card/CardSlice";
import randomkey from "../Helpers/randomKey";
import Payment from "./Payment/Payment";
import GenerateModalButton from "./Modal/GenerateModalButton";
import CreateModal from "./Modal/CreateModal";
import countriesList from "../Seeds/country";
import projectSchema from "../Context/Concept/ProjectSchema";

const ProjectCard = ({ setProjectDetails, ActionState = true, offer = [] }) => {
  const [price, setPrice] = React.useState(InvestmentRule.minPay);
  const [error, setError] = React.useState({
    state: false,
    message: "",
  });
  const schema = projectSchema(offer);
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
      variant={"elevation"}
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
          onClick={() => setProjectDetails({ state: true, offer: schema })}
        >
          <CardMedia
            component={"img"}
            image={schema.impactImage}
            sx={{ width: "100%", height: { xs: "400px", md: "200px" } }}
          />
          <Box
            sx={{
              width: "90%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "30%",
              margin: "10px auto",
            }}
          >
            <Box>
              <Typography
                sx={{ fontSize: "1em", fontWeight: "bold" }}
                color="primary"
                textAlign={"center"}
              >
                Project name
              </Typography>
              <Typography
                sx={{
                  fontSize: "1em",
                  fontWeight: "bold",
                  wordBreak: "break-all",
                  textTransform: "capitalize",
                }}
                textAlign={"center"}
              >
                {schema.projectTitle}
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
              <Stack
                justifyContent={"center"}
                alignItems={"center"}
                sx={{
                  width: { xs: "90%", md: "30%" },
                  textAlign: { xs: "center", md: "auto" },
                }}
                onClick={() =>
                  setProjectDetails({ state: true, offer: schema })
                }
              >
                <Typography
                  sx={{
                    fontSize: "0.8em",
                    fontWeight: "bold",
                    textTransform: "capitalize",
                  }}
                >
                  {schema.tenant.name}
                </Typography>
                <Typography
                  color={"primary"}
                  sx={{
                    fontSize: "1.2rem",
                    fontWeight: "bold",
                    textTransform: "capitalize",
                  }}
                >
                  Cost:{" "}
                  <Typography color="black" component={"span"}>
                    {schema.amountRequested} $
                  </Typography>
                </Typography>
              </Stack>
              {ActionState === true && (
                <CardActions
                  sx={{
                    width: { xs: "100%", md: "60%" },
                  }}
                >
                  <Stack
                    direction={"row"}
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
                        ContentProps={{ defaultPrice: price, project: offer }}
                      >
                        <Button
                          variant="contained"
                          color="primary"
                          type="submit"
                        >
                          Invest now
                        </Button>
                      </CreateModal>
                    </Box>
                  </Stack>
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
              onClick={() => setProjectDetails({ state: true, offer: schema })}
            >
              <Chip
                icon={<LocalOfferIcon />}
                size="small"
                label={`Capital: ${countriesList
                  .filter((item) => item.name.common === schema.projectCountry)
                  .at(0)
                  .capital.at(0)}`}
                variant="outlined"
                color="primary"
              />
              <Chip
                icon={<LocalOfferIcon />}
                size="small"
                label={`Country: ${schema.projectCountry}`}
                variant="outlined"
                color="primary"
              />
            </Stack>
            <Box
              sx={{ width: "100%" }}
              onClick={() => setProjectDetails({ state: true, offer: schema })}
            >
              <Typography variant="h6">{schema.teaserTitle}</Typography>
              <Typography
                sx={{
                  wordBreak: "break-all",
                }}
              >
                {schema.loanInformation.substring(0, InvestmentRule.card.text)}
                ...
                <Typography
                  component="span"
                  color={"primary"}
                  sx={{
                    fontWeight: "bold",
                    marginLeft: "3px",
                    wordBreak: "keep-all",
                  }}
                >
                  READ MORE
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
