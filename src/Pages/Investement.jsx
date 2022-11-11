import { useTheme } from "@emotion/react";
import { Box, Button, Typography } from "@mui/material";
import React from "react";
import FeaturedPlayListIcon from "@mui/icons-material/FeaturedPlayList";
import InvestmentTable from "../components/InvestmentTable";

const Investement = () => {
  const { width, palette } = useTheme();

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
    columnGap: "20px",
    border: "1px solid",
    borderColor: palette.secondary.main,
    backgroundColor: palette.secondary.light,
    padding:'15px 10px',
    borderRadius:'10px'
  };

  const InvestmentContent = {
    width: "100%",
    marginTop: "10vh",
    border: "1px solid",
    borderColor: palette.secondary.main,
    backgroundColor: palette.secondary.light,
    padding: "20px 10px",
    display: "flex",
    justifyContent:'center',
    alignitems:'center',
    flexDirection:'column',
    rowGap:'20px',
    borderRadius:'10px'

  };

  return (
    <Box sx={InvestementStyle}>
      <Box sx={InvestementCardStyle}>
        <CardPie
          text={"Total investment"}
          number={"03"}
          color="primary"
          logo={<FeaturedPlayListIcon fontSize="large" />}
          variant={"contained"}
        />
        <CardPie
          text={"Total amount invested"}
          number={"2500 $"}
          color="primary"
          logo={<FeaturedPlayListIcon fontSize="large" />}
          variant={"outlined"}
        />
        <CardPie
          text={"Total amount receiveds"}
          number={"1500 $"}
          color="success"
          logo={<FeaturedPlayListIcon fontSize="large" />}
          variant={"contained"}
        />
        <CardPie
          text={"Remaining amount"}
          number={"1000 $"}
          color="success"
          logo={<FeaturedPlayListIcon fontSize="large" />}
          variant={"outlined"}
        />
      </Box>

      <Box sx={InvestmentContent}>
        <Box>
            <InvestmentTable/>
        </Box>
      </Box>
    </Box>
  );
};

const CardPie = ({ text, number, color, variant, logo }) => {
  const CardStyle = {
    width: "300px",
    height: "90px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    ColumnGap: "10px",
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
      <Box>{logo}</Box>
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
