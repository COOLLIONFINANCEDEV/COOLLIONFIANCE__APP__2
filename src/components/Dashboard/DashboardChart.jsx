import { Box, Typography } from '@mui/material';
import { Doughnut, Pie, PolarArea } from "react-chartjs-2";
import { useTheme } from '@emotion/react';
import React from 'react'

const DashboardChart = () => {
    const { palette } = useTheme();
  
    const DashboardChartStyle = {
      width: "100%",
      marginTop: "12vh",
      border: "1px solid",
      borderColor: palette.secondary.main,
      backgroundColor: palette.secondary.light,
      padding: "20px 10px",
      display: "flex",
      justifyContent: "space-between",
      alignitems: "center",
      flexDirection: "row",
      rowGap: "20px",
      borderRadius: "10px",
    };
  
    const data = {
      labels: [
        "FIRST NAME PROJECT",
        "SECOND NANME  PROJECT",
        "THIRD NAME PROJECT",
        "FOURTH NAME PROJECT",
      ],
      datasets: [
        {
          data: [500, 2000, 1300, 1500],
          backgroundColor: [
            palette.primary.main,
            palette.success.main,
            palette.warning.main,
            palette.error.main,
          ],
          borderColor: [
            palette.primary.main,
            palette.success.main,
            palette.warning.main,
            palette.error.main,
          ],
          borderWidth: 1,
        },
      ],
    };
  
    const options = {
      responsive: true,
      plugins: {
        legend: {
          position: "top",
          font: "5px",
        },
      },
    };
  
    const DashboardChartChildtyle = {
      width: "calc(100% / 4)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      rowGap: "20px",
    };
  
    const DashboardChartCardtyle = {
      width: "80%",
      paddin: "0 5%",
    };
  
    const DashboardChartCardTitleStyle = {
      textAlign: "center",
      fontSize: "1.2rem",
      fontWeight: "bold",
      textTransform: "capitalize",
    };
    return (
      <Box sx={DashboardChartStyle}>
        <Box sx={DashboardChartChildtyle}>
          <Typography sx={DashboardChartCardTitleStyle}>
            total amount amount per project
          </Typography>
          <Box sx={DashboardChartCardtyle}>
            <Pie options={options} data={data} />
          </Box>
        </Box>
  
        <Box sx={DashboardChartChildtyle}>
          <Typography sx={DashboardChartCardTitleStyle}>
            total amount raised per project
          </Typography>
          <Box sx={DashboardChartCardtyle}>
            <Doughnut options={options} data={data} />
          </Box>
        </Box>
  
        <Box sx={DashboardChartChildtyle}>
          <Typography sx={DashboardChartCardTitleStyle}>
            Total projects by category
          </Typography>
          <Box sx={DashboardChartCardtyle}>
            <PolarArea data={data} />
          </Box>
        </Box>
      </Box>
    );
  };

export default DashboardChart
