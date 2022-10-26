import { Box, Divider, Stack, Typography } from "@mui/material";
import React from "react";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import { useTheme } from "@emotion/react";

const LiveStats = () => {
  const { width } = useTheme();
  return (
    <Box
      sx={{
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Stack
        direction={"row"}
        justifyContent="space-between"
        alignItems="center"
        sx={{ width: width, padding: {xs:'18px 0',md:'20px 0'},overflowX:{xs:'scroll',md:'hidden'} }}
      >
        <Items time={2000} text={"Total Value Locked"} />
        <Divider orientation="vertical" variant="middle" flexItem />
        <Items time={3000} text="Total Loan origination" />
        <Divider orientation="vertical" variant="middle" flexItem />
        <Items time={3500} text="Current Loans Outstanding" />
        <Divider orientation="vertical" variant="middle" flexItem />
        <Items time={5000} text="Circulating Supply" />
      </Stack>
    </Box>
  );
};

const Items = ({ time = 2000, text }) => {
  const { palette } = useTheme();
  const [value, setValue] = React.useState(Math.floor(Math.random() * 100));

  React.useEffect(() => {
    const interval = setInterval(() => {
      setValue(Math.floor(Math.random() * 100));
    }, time);
    return () => clearInterval(interval);
  }, [time]);
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "space-between",
          height: "100%",
          rowGap: "13px",
          minWidth: "max-content",
          margin:{xs:'0 15px',md:'auto'}
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography
            variant="p"
            sx={{
              fontWeight: "bold",
              fontFamily: "Helvetica",
              fontSize: "0.8rem",
              fontStyle: "italic",
            }}
          >
            {text} &nbsp;
          </Typography>
          <HelpOutlineIcon fontSize="small" />
        </Box>
        <Box>
          <Typography
            variant="h5"
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "flex-end",
              color: palette.primary.light,
              transition: "all 1s ease",
            }}
          >
            {value}.{Math.floor(Math.random() * value)} M &nbsp;
            <Typography component={"span"} variant="h6">
              USD
            </Typography>
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default LiveStats;
