import React from "react";
import FeaturedPlayListIcon from "@mui/icons-material/FeaturedPlayList";
import CardPie from "../../components/CardPie";
import { useTheme } from "@emotion/react";
import { Box } from "@mui/material";


const DashboardCard = () => {
  const { palette } = useTheme();

  const DashboardCardtyle = {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
    columnGap: "20px",
    border: "1px solid",
    borderColor: palette.secondary.main,
    backgroundColor: palette.secondary.light,
    padding: "15px 10px",
    borderRadius: "10px",
  };

  return (
    <Box sx={DashboardCardtyle}>
      <CardPie
        text={"Total Projects"}
        number={"03"}
        color="primary"
        logo={<FeaturedPlayListIcon fontSize="large" />}
        variant={"contained"}
      />
      <CardPie
        text={"total amount of projects"}
        number={"3500 $"}
        color="primary"
        logo={<FeaturedPlayListIcon fontSize="large" />}
        variant={"outlined"}
      />
      <CardPie
        text={"total amount collected"}
        number={"1500 $"}
        color="success"
        logo={<FeaturedPlayListIcon fontSize="large" />}
        variant={"contained"}
      />
      <CardPie
        text={"the total amount receivable"}
        number={"2000 $"}
        color="success"
        logo={<FeaturedPlayListIcon fontSize="large" />}
        variant={"outlined"}
      />
    </Box>
  );
};

export default DashboardCard;
