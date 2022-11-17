import { useTheme } from "@emotion/react";
import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import FeaturedPlayListIcon from "@mui/icons-material/FeaturedPlayList";
import CardPie from "../../components/CardPie";
import BorrowerTable from "../../components/Borrower/BorrowerTable";
import { Doughnut, Line, Pie, PolarArea } from "react-chartjs-2";
import { ArcElement, Tooltip, Legend } from "chart.js";
import Chart from "chart.js/auto";
import { faker } from "@faker-js/faker";

Chart.register(ArcElement, Tooltip, Legend);

const MyProjects = () => {
  const { width } = useTheme();

  const MyProjectsStyle = {
    width: width,
    margin: "5vh auto",
  };

  return (
    <Box sx={MyProjectsStyle}>
      <MyProjectCard />
      <MyProjectChart />
      <MyProjectsGraph />
      <MyProjectTable />
    </Box>
  );
};

const MyProjectCard = () => {
  const { palette } = useTheme();

  const MyProjectsCardStyle = {
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
    <Box sx={MyProjectsCardStyle}>
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

const MyProjectChart = () => {
  const { palette } = useTheme();

  const MyProjectsChartStyle = {
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

  const MyProjectsChartChildStyle = {
    width: "calc(100% / 4)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    rowGap: "20px",
  };

  const MyProjectsChartCardStyle = {
    width: "80%",
    paddin: "0 5%",
  };

  const MyProjectsChartCardTitleStyle = {
    textAlign: "center",
    fontSize: "1.2rem",
    fontWeight: "bold",
    textTransform: "capitalize",
  };
  return (
    <Box sx={MyProjectsChartStyle}>
      <Box sx={MyProjectsChartChildStyle}>
        <Typography sx={MyProjectsChartCardTitleStyle}>
          total amount amount per project
        </Typography>
        <Box sx={MyProjectsChartCardStyle}>
          <Pie options={options} data={data} />
        </Box>
      </Box>

      <Box sx={MyProjectsChartChildStyle}>
        <Typography sx={MyProjectsChartCardTitleStyle}>
          total amount raised per project
        </Typography>
        <Box sx={MyProjectsChartCardStyle}>
          <Doughnut options={options} data={data} />
        </Box>
      </Box>

      <Box sx={MyProjectsChartChildStyle}>
        <Typography sx={MyProjectsChartCardTitleStyle}>
          Total projects by category
        </Typography>
        <Box sx={MyProjectsChartCardStyle}>
          <PolarArea data={data} />
        </Box>
      </Box>
    </Box>
  );
};

const MyProjectTable = () => {
  const { palette } = useTheme();
  const InvestmentContent = {
    width: "100%",
    marginTop: "12vh",
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

  return (
    <Box sx={InvestmentContent}>
      <Box>
        <BorrowerTable />
      </Box>
    </Box>
  );
};

const MyProjectsGraph = () => {
  const { palette } = useTheme();

  const MyProjectsGraphStyle = {
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
        display: false,
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
        label: "Dataset 1",
        data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  return (
    <Box sx={MyProjectsGraphStyle}>
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

export default MyProjects;
