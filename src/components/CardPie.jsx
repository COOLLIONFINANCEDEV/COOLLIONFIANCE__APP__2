import { Box, Button, Typography } from "@mui/material";
import React from "react";

const CardPie = ({ text, number, color, variant, logo }) => {
  const CardStyle = {
    width: { xs: "90%", sm: "47.5%", md: "calc((100% / 4) - (10px * 6))" },
    minWidth: { xs: "80%", sm: "40%", md: "200px" },
    maxWidth: { xs: "90%", sm: "47.5%", md: "300px" },
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
        <Typography variant="p" sx={{ fontWeight: "bold", fontSize: "0.75rem" }}>
          {text}
        </Typography>
        <Typography variant="h6">{number}</Typography>
      </Box>
    </Button>
  );
};

export default CardPie;
