import { useTheme } from "@emotion/react";
import { Box } from "@mui/material";
import React from "react";

import { ArcElement, Tooltip, Legend } from "chart.js";
import Chart from "chart.js/auto";
import ProjectDetails from "../Pages/ProjectDetails";
import DashboardTableWithDetails from "../components/Dashboard/Table/DashboardTableWithDetails";
import DashboardTable from "../components/Dashboard/Table/DashboardTable";
import DashboardCard from "../components/Dashboard/DashboardCard";
import DashboardChart from "../components/Dashboard/DashboardChart";
import DashboardGraph from "../components/Dashboard/DashboardGraph";

Chart.register(ArcElement, Tooltip, Legend);

const Dashboard = ({ role }) => {
  const { width } = useTheme();
  const [projectDetails, setProjectDetails] = React.useState(false);

  const DashboardStyle = {
    width: width,
    margin: "5vh auto",
  };

  return (
    <Box sx={DashboardStyle}>
      <DashboardCard />
      <DashboardChart />
      <DashboardGraph />
      <DashboardTable setProjectDetails={setProjectDetails} />{" "}
      <DashboardTableWithDetails setProjectDetails={setProjectDetails} />
      <ProjectDetails
        projectDetails={projectDetails}
        setProjectDetails={setProjectDetails}
      />
    </Box>
  );
};

export default Dashboard;
