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
import investImg from "../assets/imgs/invest.svg";
import askMoneyImg from "../assets/imgs/askMoney.svg";
import { useTheme } from "@emotion/react";

const ChooseTenant = ({ handleChoose, handleClose }) => {
  const [choice, setChoice] = React.useState(1);
  const { palette, shadows } = useTheme();

  const handleChange = (item) => {
    setChoice(item.id);
  };
  const ChooseData = [
    {
      id: 1,
      img: investImg,
      title: "Lender",
      content:
        "A lender is an individual, group, or institution that invests funds in borrowers.",
    },
    {
      id: 2,
      img: askMoneyImg,
      title: "borrower",
      content:
        "A borrower is an individual or business seeking funding for a specific project.",
    },
  ];

  
  return (
    <Stack
      sx={{ padding: "10px 10px", minWidth: { xs: "70vw", md: "40vw" } }}
      alignItems="center"
      justifyContent={"space-between"}
    >
      <Typography variant="h2">Your account type</Typography>
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
              onClick={() => handleChange(item)}
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
          onClick={() => {
            handleChoose(choice);
            handleClose();
          }}
        >
          I have made my choice
        </Button>
      </Stack>
    </Stack>
  );
};

export default ChooseTenant;
