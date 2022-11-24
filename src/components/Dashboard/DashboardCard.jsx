import React from "react";
import FeaturedPlayListIcon from "@mui/icons-material/FeaturedPlayList";
import CardPie from "../../components/CardPie";
import { useTheme } from "@emotion/react";
import { Stack } from "@mui/material";


const DashboardCard = () => {
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

  return (
    <Stack sx={DashboardCardtyle} justifyContent='space-around' alignItems='center' direction={'row'} flexWrap='wrap' rowGap="20px">
      <CardPie
        text={"Total Projects"}
        number={"03"}
        color="primary"
        logo={<FeaturedPlayListIcon fontSize="large" />}
        variant={"contained"}
      />
      <CardPie
        text={"total amount"}
        number={"3500 $"}
        color="primary"
        logo={<FeaturedPlayListIcon fontSize="large" />}
        variant={"outlined"}
      />
      <CardPie
        text={"total collected"}
        number={"1500 $"}
        color="success"
        logo={<FeaturedPlayListIcon fontSize="large" />}
        variant={"contained"}
      />
      <CardPie
        text={"total received"}
        number={"2000 $"}
        color="success"
        logo={<FeaturedPlayListIcon fontSize="large" />}
        variant={"outlined"}
      />
    </Stack>
  );
};

export default DashboardCard;
