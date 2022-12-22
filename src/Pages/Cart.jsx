import { useTheme } from "@emotion/react";
import {
  Avatar,
  Button,
  Divider,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch, useSelector } from "react-redux";
import { deleteProject, selectProject } from "../features/Card/CardSlice";
import InvestmentRule from "../Context/Concept/InvestmentRule";
import { RedirectRouteLink } from "../Router/Routes";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { palette } = useTheme();
  const project = useSelector(selectProject);
  const [price, setPrice] = React.useState({});
  const [error, setError] = React.useState({});
  // eslint-disable-next-line no-unused-vars
  const [sum, setSum] = React.useState();
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const handleError = React.useCallback(
    (price, id) => {
      if (parseInt(price) < InvestmentRule.minPay) {
        setError({
          [id]: {
            state: true,
            message: "the minimum amount is $25",
          },
        });
      } else {
        setError({
          [id]: {
            state: false,
            message: "",
          },
        });
      }
    },
    [setError]
  );

  const handleSubmit = React.useCallback(() => {
    handleError(price);
    // const body = {
    //   project: {
    //     id: "1",
    //     name: "first",
    //   },
    //   price: price,
    // };
    if (error.state === false) {
    }
  }, [handleError, price, error]);

  const handleChange = React.useCallback(
    (value, id) => {
      setPrice((state) => {
        state[id] = value;
        return state;
      });
      handleError(value, id);
    },
    [handleError]
  );
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        backgroundColor: palette.secondary.dark,
        marginTop: "15vh",
      }}
    >
      <Box
        sx={{
          width: "80%",
          borderRadius: "10px",
          padding: "40px",
          backgroundColor: palette.secondary.light,
        }}
      >
        <Typography variant="h4" sx={{ color: palette.secondary.contrastText }}>
          Your basket
        </Typography>

        <Divider color={palette.secondary.main} />

        {project.projects.map((item) => {
          return (
            <Stack
              sx={{
                marginTop: "10vh",
              }}
              justifyContent="space-between"
              alignItems="flex-start"
              direction={{ xs: "column", sm: "row" }}
              rowGap="10px"
              columnGap={"15px"}
              key={item.project.id}
            >
              <Stack
                sx={{
                  height: "100%",
                }}
                justifyContent={"center"}
                alignItems={{ xs: "flex-start", sm: "center" }}
                direction={{ xs: "column", sm: "row" }}
              >
                <Avatar
                  variant="rounded"
                  alt="project"
                  src="https://picsum.photos/1024/1024?face"
                  sx={{ width: 150, height: 150 }}
                ></Avatar>
                <Stack
                  sx={{
                    height: { xs: "auto", sm: "150px" },
                    marginLeft: { xs: "0", sm: "25px" },
                  }}
                >
                  <Typography sx={{ fontWeight: "bold", fontSize: "1.5em" }}>
                    De Corazon Group in Guatemala
                  </Typography>
                  <Typography variant="h6" sx={{ fontSize: "1em" }}>
                    Reservation expires in 10m 24s
                  </Typography>
                </Stack>
              </Stack>
              <Stack
                sx={{
                  width: { xs: "100%", sm: "auto" },
                }}
                alignItems="center"
                justifyContent={{ xs: "space-between", sm: "center" }}
                direction="row"
              >
                <TextField
                  type={"number"}
                  size="small"
                  label={"Invest Now"}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">$</InputAdornment>
                    ),
                  }}
                  value={price[item.project.id]}
                  onChange={(event) =>
                    handleChange(event.target.value, item.project.id)
                  }
                  error={error[item.project.id]?.state}
                  helperText={error[item.project.id]?.message}
                  required
                />
                <IconButton
                  onClick={() => dispatch(deleteProject(item.project.id))}
                >
                  <DeleteIcon fontSize={"large"} color="error" />
                </IconButton>
              </Stack>
            </Stack>
          );
        })}

        <Stack
          sx={{
            marginTop: "10vh",
          }}
          justifyContent="space-between"
          alignItems="flex-start"
          direction={{ xs: "column", sm: "row" }}
          rowGap="10px"
          columnGap={"15px"}
        >
          <Typography
            variant="h4"
            sx={{ color: palette.secondary.contrastText, marginTop: "10vh" }}
          >
            Total : {sum}
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              columnGap: "30px",
            }}
          >
            <Button
              variant="outlined"
              size="large"
              onClick={() => navigate(RedirectRouteLink())}
            >
              Continue as Guest
            </Button>
            <Button variant="contained" size="large" onClick={handleSubmit}>
              Continue
            </Button>
          </Box>
        </Stack>
      </Box>
    </Box>
  );
};

export default Cart;
