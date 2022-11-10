import { useTheme } from "@emotion/react";
import { Box, Button, Typography } from "@mui/material";
import React from "react";
import FeaturedPlayListIcon from "@mui/icons-material/FeaturedPlayList";

const Investement = () => {
  const { width } = useTheme();

  const InvestementStyle = {
    width: width,
    margin: "5vh auto",
  };

  const InvestementCardStyle = {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
    columnGap:'20px'
  };

  return (
    <Box sx={InvestementStyle}>
      <Box sx={InvestementCardStyle}>
        <CardPie text={"Total investment"} number={"03"} color='primary' logo={<FeaturedPlayListIcon fontSize="large" />} variant={'contained'}/>
        <CardPie text={"Total amount invested"} number={"2500 $"} color='primary' logo={<FeaturedPlayListIcon fontSize="large" />} variant={'outlined'}/>
        <CardPie text={"Total amount receiveds"} number={"1500 $"} color='success' logo={<FeaturedPlayListIcon fontSize="large" />} variant={'contained'}/>
        <CardPie text={"Remaining amount"} number={"1000 $"} color='success' logo={<FeaturedPlayListIcon fontSize="large" />} variant={'outlined'}/>
      </Box>
    </Box>
  );
};

const CardPie = ({ text, number,color,variant ,logo}) => {
  const CardStyle = {
    width: "300px",
    height: "90px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    ColumnGap:'10px',
  };

  const ContentStyle = {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "flex-end",
    flexDirection: "column",
    height: "100%",
  };
  return (
    <Button sx={CardStyle} variant={variant} color={color}>
      <Box>
        {
            logo
        }
      </Box>
      <Box sx={ContentStyle}>
        <Typography variant="p" sx={{ fontWeight: "bold", fontSize: "1.2em" }}>
          {text}
        </Typography>
        <Typography variant="h6">{number}</Typography>
      </Box>
    </Button>
  );
};

export default Investement;
