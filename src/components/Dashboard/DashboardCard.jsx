import React from "react";
import FeaturedPlayListIcon from "@mui/icons-material/FeaturedPlayList";
import CardPie from "../../components/CardPie";
import { useTheme } from "@emotion/react";
import { Stack } from "@mui/material";

const DashboardCard = ({ TitleData }) => {
  const { palette } = useTheme();

  const DashboardCardtyle = {
    width: "100%",
    height: "100%",
    border: "1px solid",
    borderColor: palette.secondary.main,
    backgroundColor: palette.secondary.light,
    padding: "15px 10px",
    borderRadius: "10px",
  };
  const design = [
    {
      variant: "contained",
      color: "primary",
    },
    {
      variant: "outlined",
      color: "primary",
    },
    {
      variant: "contained",
      color: "success",
    },
    {
      variant: "outlined",
      color: "success",
    },
  ];

  return (
    <Stack
      sx={DashboardCardtyle}
      justifyContent="space-around"
      alignItems="center"
      direction={"row"}
      flexWrap="wrap"
      rowGap="20px"
    >
      {TitleData.map((item, key) => {
        return (
          <CardPie
            text={item.title}
            number={item.value}
            color={design[key].color}
            logo={<FeaturedPlayListIcon fontSize="large" />}
            variant={design[key].variant}
          />
        );
      })}
    </Stack>
  );
};

export default DashboardCard;
