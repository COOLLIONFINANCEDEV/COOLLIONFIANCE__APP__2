import { Box, Stack, Typography } from "@mui/material";
import { Doughnut, Pie, PolarArea } from "react-chartjs-2";
import { useTheme } from "@emotion/react";
import React from "react";

const DashboardChart = ({ information }) => {
  const { palette } = useTheme();

  const DashboardChartStyle = {
    width: "100%",
    marginTop: "12vh",
    border: "1px solid",
    borderColor: palette.secondary.main,
    backgroundColor: palette.secondary.light,
    padding: "20px 0",
    borderRadius: "10px",
  };
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    if (information) {
      const newValue = [];
      information?.forEach((data) => {
        newValue.push({
          title: data?.title,
          data: {
            labels: data?.data?.map((item) => item.title),
            datasets: [
              {
                data: data?.data?.map((item) => item.value),
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
          },
        });
      });
      setData(newValue);
    }
  }, [
    information,
    palette.error.main,
    palette.primary.main,
    palette.success.main,
    palette.warning.main,
  ]);

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
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    rowGap: "20px",
  };

  const DashboardChartCardtyle = {
    width: "100%",
    paddin: "0 5%",
  };

  const DashboardChartCardTitleStyle = {
    textAlign: "center",
    fontSize: "1.2rem",
    fontWeight: "bold",
    textTransform: "capitalize",
  };
  return (
    <>
      {data[data.length - 1]?.data?.labels?.length >= 1 && (
        <Stack
          sx={DashboardChartStyle}
          justifyContent="space-around"
          alignItems="center"
          direction="row"
          flexWrap="wrap"
          rowGap={"40px"}
        >
          {data.map((item, key) => {
            return (
              <Box sx={DashboardChartChildtyle} key={item.title}>
                <Typography sx={DashboardChartCardTitleStyle}>
                  {item.title}
                </Typography>
                <Box sx={DashboardChartCardtyle}>
                  {key === 0 && <Pie options={options} data={item.data} />}
                  {key === 1 && <Doughnut options={options} data={item.data} />}
                  {key === 2 && (
                    <PolarArea options={options} data={item.data} />
                  )}
                </Box>
              </Box>
            );
          })}
        </Stack>
      )}
    </>
  );
};

export default DashboardChart;
