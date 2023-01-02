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
      {design.map((item, key) => {
        return (
          <CardPie
            text={TitleData[key]?.title}
            key={key}
            number={TitleData[key]?.value}
            color={item.color}
            logo={<FeaturedPlayListIcon fontSize="large" />}
            variant={item.variant}
          />
        );
      })}
    </Stack>
  );
};

export default DashboardCard;
