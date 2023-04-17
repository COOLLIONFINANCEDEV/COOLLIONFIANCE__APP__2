import {
  Avatar,
  Button,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import investImg from "../../assets/imgs/invest.svg";
import askMoneyImg from "../../assets/imgs/askMoney.svg";
import { useTheme } from "@emotion/react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import CreateTenantBorrower from "./CreateTenantBorrower";
import CreateTenantLender from "./CreateTenantLender";
import { BORROWER, LENDER } from "../../Context/Roles/roles";

const ChooseTenant = ({ handleClose, handleChoose, email, accountTypes }) => {
  const [choice, setChoice] = React.useState(false);
  const [steps, setSteps] = React.useState({ state: 1, type: "" });
  const { palette, shadows } = useTheme();
  const [accountType, setAccountType] = React.useState(undefined);

  const handleChange = () => {
    const type = ChooseData.filter((item) => item.id === choice)[0].title;
    accountTypes.forEach((item) => {
      if (item.codename === type) setAccountType(item);
    });
    setSteps({
      state: 2,
      type,
    });
  };

  const ChooseData = [
    {
      id: 1,
      img: investImg,
      title: LENDER(),
      content:
        "A lender is an individual, group, or institution that invests funds in borrowers.",
    },
    {
      id: 2,
      img: askMoneyImg,
      title: BORROWER(),
      content:
        "A borrower is an individual or business seeking funding for a specific project.",
    },
  ];

  const handleFinish = () => {
    handleChoose();
    handleClose();
  };

  return (
    <Stack
      sx={{ padding: "10px 10px", minWidth: { xs: "70vw", md: "40vw" } }}
      alignItems="center"
      justifyContent={"space-between"}
    >
      {steps.state === 1 && (
        <>
          <Typography variant="h3">Your account type</Typography>
          <Typography>
            Please choose the type of account you wish to have on the platform
            between lenders and borrowers
          </Typography>
          <Stack
            justifyContent={"center"}
            alignItems={"center"}
            sx={{ width: "100%" }}
          >
            <Stack
              direction={{ md: "row" }}
              rowGap={5}
              spacing={2}
              justifyContent={"center"}
              alignItems={"center"}
              sx={{ width: "100%", m: "5px 0px" }}
            >
              {ChooseData.map((item) => (
                <Card
                  sx={{
                    width: { xs: "100%", md: "50%" },
                    cursor: "pointer",
                    border: "5px solid white",
                    borderColor:
                      item.id === choice ? palette.primary.main : "white",
                    "&:hover": {
                      boxShadow: shadows[4],
                    },
                    transition: "all 0.4s",
                  }}
                  onClick={() => setChoice(item.id)}
                  key={item.id}
                >
                  <CardHeader
                    avatar={
                      <Avatar
                        sx={{
                          bgcolor:
                            item.id === choice
                              ? palette.primary.main
                              : palette.secondary.main,
                        }}
                        aria-label="recipe"
                      >
                        {item.id}
                      </Avatar>
                    }
                  />
                  <CardMedia
                    sx={{ height: 200, width: 200, margin: "auto" }}
                    image={item.img}
                    title="green iguana"
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      textAlign={"center"}
                      textTransform={"capitalize"}
                    >
                      {item.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {item.content}
                    </Typography>
                  </CardContent>
                </Card>
              ))}
            </Stack>

            <Button
              variant="contained"
              sx={{ width: "95%", marginTop: "30px" }}
              disabled={!choice}
              onClick={handleChange}
            >
              I have made my choice
            </Button>
          </Stack>
        </>
      )}

      {steps.state === 2 && (
        <>
          <Stack
            justifyContent={"flex-end"}
            direction={"row"}
            alignItems={"flex-end"}
            sx={{ width: "100%" }}
          >
            <Button
              startIcon={<ArrowBackIcon />}
              variant="contained"
              size="small"
              onClick={() => setSteps({ state: 1, type: "" })}
            >
              Back
            </Button>
          </Stack>
          <Typography variant="h3">Your account information</Typography>
          <Typography>
            Thank you for giving the relative information for your{" "}
            {accountType?.codename?.toLowerCase()} account
          </Typography>
          {steps.type === BORROWER() ? (
            <CreateTenantBorrower
              email={email}
              accountType={accountType}
              handleClose={handleFinish}
            />
          ) : (
            <CreateTenantLender
              email={email}
              accountType={accountType}
              handleClose={handleFinish}
            />
          )}
        </>
      )}
    </Stack>
  );
};

export default ChooseTenant;
