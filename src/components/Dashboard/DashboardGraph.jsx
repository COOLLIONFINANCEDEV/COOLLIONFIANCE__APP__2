import { useTheme } from '@emotion/react';
import { faker } from "@faker-js/faker";
import { Box } from '@mui/material';

import React from 'react'
import { Line } from 'react-chartjs-2';

const DashboardGraph = () => {
    const { palette } = useTheme();
  
    const DashboardGraphStyle = {
      width: "100%",
      marginTop: "2vh",
      border: "1px solid",
      borderColor: palette.secondary.main,
      backgroundColor: palette.secondary.light,
      padding: "20px 10px",
      display: "flex",
      justifyContent: "center",
      alignitems: "center",
      flexDirection: "column",
      rowGap: "20px",
      borderRadius: "10px",
    };
  
    const options = {
      responsive: true,
      plugins: {
        legend: {
          position: "top",
        },
        title: {
          display: true,
          text: " Progression curve of the different payments on all projects",
        },
      },
    };
  
    const labels = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
    ];
  
    const data = {
      labels,
      datasets: [
        {
          label: "Progression curve of the year",
          data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
          borderColor: "rgb(255, 99, 132)",
          backgroundColor: "rgba(255, 99, 132, 0.5)",
        },
      ],
    };
  
    return (
      <Box sx={DashboardGraphStyle}>
        <Box
          sx={{
            width: "80%",
            margin: "auto",
          }}
        >
          <Line options={options} data={data} />
        </Box>
      </Box>
    );
  };

export default DashboardGraph
