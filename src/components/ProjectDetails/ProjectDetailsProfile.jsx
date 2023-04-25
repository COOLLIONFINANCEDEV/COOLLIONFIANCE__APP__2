import React from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import Man4Icon from "@mui/icons-material/Man4";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import ReplyIcon from "@mui/icons-material/Reply";
import { useTheme } from "@emotion/react";

import {
  Avatar,
  Box,
  Button,
  Chip,
  FormControl,
  Link,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import ShareBtn from "../ShareBtn";
import CreateModal from "../Modal/CreateModal";
import GenerateModalButton from "../Modal/GenerateModalButton";
import Payment from "../Payment/Payment";
import randomkey from "../../Helpers/randomKey";
import { addProject } from "../../features/Card/CardSlice";
import { useDispatch, useSelector } from "react-redux";
import InvestmentRule from "../../Context/Concept/InvestmentRule";
import countriesList from "../../Seeds/country";
import { LENDER } from "../../Context/Roles/roles";
import { selectLogin } from "../../features/Login/LoginSlice";

const ProjectDetailsProfile = ({ offer }) => {
  const { palette } = useTheme();
  const { user } = useSelector(selectLogin);
  const ProjectDetailsProfileStyle = {
    width: "cacl(100% - 20px)",
    border: "1px solid",
    borderColor: palette.secondary.main,
    backgroundColor: palette.secondary.light,
    padding: "15px",
    borderRadius: "15px",
  };

  const [price, setPrice] = React.useState(InvestmentRule.minPay);
  const [error, setError] = React.useState({
    state: false,
    message: "",
  });

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

  const PROJECTURL = window.location.href;

  return (
    <Box sx={ProjectDetailsProfileStyle}>
      <Stack
        sx={{
          width: "calc(100% - 20px)",
        }}
        alignItems="center"
        direction={{ xs: "column", sm: "row" }}
      >
        <Avatar
          alt={offer?.tenant?.name}
          src={offer?.tenant?.profilePhoto}
          sx={{ width: "110px", height: "110px", margin: "15px" }}
        />
        <Box sx={{ width: "cacl(100%)" }}>
          <Typography
            sx={{
              fontSize: "1.5em",
              fontWeight: "bold",
              textTransform: "capitalize",
            }}
          >
            {offer?.projectTitle}
          </Typography>
          <Typography
            sx={{
              fontSize: "1.1em",
              fontWeight: "bold",
              marginBottom: "50px",
            }}
            color={"primary"}
          >
            Amount requested:{" "}
            <Typography color={"black"} component={"span"}>
              {offer?.amountRequested} $
            </Typography>
          </Typography>
        </Box>
      </Stack>

      <Box sx={{ width: "calc(100% - 20px)", margin: "5px 15px" }}>
        <Typography
          sx={{
            width: "100%",
            fontSize: "1.5em",
            fontWeight: "bold",
            wordBreak: "break-all",
          }}
        >
          {offer?.teaserTitle}
        </Typography>
      </Box>

      <Box
        sx={{
          width: "calc(100% - 20px)",
          margin: "15px 15px",
          display: "flex",
          justifyContent: "flex-start",
          alginItems: "center",
          columnGap: "20px",
        }}
      >
        <Chip
          icon={<LocationOnIcon />}
          label={`Country: ${offer?.projectCountry}`}
        />
        <Chip
          icon={<LocationCityIcon />}
          label={`Capital: ${countriesList
            .filter((item) => item.name.common === offer?.projectCountry)
            .at(0)
            ?.capital.at(0)}`}
        />
      </Box>

      <Box sx={{ width: "calc(100% - 20px)", margin: "15px 15px" }}>
        {user.role === LENDER() && (
          <Typography
            sx={{
              fontSize: "1.5em",
              fontWeight: "bold",
              marginBottom: "10px",
            }}
          >
            Help fund this loan
          </Typography>
        )}
        <Stack
          sx={{
            width: "100%",
            justifyContent: "space-between",
            alignContent: "center",
          }}
          justifyContent="space-between"
          alignItems={"center"}
          rowGap="20px"
        >
          {user.role === LENDER() && (
            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "flex-start",
                alignContent: "center",
                columnGap: "15px",
              }}
            >
              <Box sx={{ width: "47.5%" }}>
                <FormControl fullWidth component="form" onSubmit={handleSubmit}>
                  {/* min amount is : 25$ */}
                  <TextField
                    type={"number"}
                    size="small"
                    label={`${InvestmentRule.minPay} $`}
                    value={price}
                    onChange={handleChange}
                    error={error.state}
                    helperText={error.message}
                    required
                  />
                </FormControl>
              </Box>
              <Box sx={{ width: "47.5%" }}>
                <CreateModal
                  OpenButton={GenerateModalButton}
                  ModalContent={Payment}
                  ContentProps={{ defaultPrice: price, project: offer }}
                >
                  <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    sx={{ width: "100%" }}
                    type="submit"
                  >
                    Lend now
                  </Button>
                </CreateModal>
              </Box>
            </Box>
          )}
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: { xs: "center", md: "flex-end" },
              alignContent: "center",
              columnGap: "15px",
              rowGap: "20px",
              flexWrap: "wrap",
            }}
          >
            <Link href="#story">
              <Button
                startIcon={<Man4Icon />}
                variant="outlined"
                sx={{ width: { xs: "calc(100% / 3) - 1px", md: "auto" } }}
              >
                Borrower Story
              </Button>
            </Link>
            <Link href="#details">
              <Button
                variant="outlined"
                startIcon={<FormatListBulletedIcon />}
                sx={{ width: { xs: "calc(100% / 3) - 1px", md: "auto" } }}
              >
                Loan Details
              </Button>
            </Link>
            <CreateModal
              OpenButton={GenerateModalButton}
              ModalContent={ShareBtn}
              ContentProps={{ url: PROJECTURL }}
              ButtonContent={
                <Button
                  variant="outlined"
                  startIcon={<ReplyIcon />}
                  sx={{ width: { xs: "calc(100% / 3) - 1px", md: "auto" } }}
                >
                  Share Project
                </Button>
              }
            ></CreateModal>
          </Box>
        </Stack>
      </Box>
    </Box>
  );
};
export default ProjectDetailsProfile;
