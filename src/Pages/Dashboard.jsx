import { useTheme } from "@emotion/react";
import { Box } from "@mui/material";
import React from "react";

import { ArcElement, Tooltip, Legend } from "chart.js";
import Chart from "chart.js/auto";
import ProjectDetails from "./ProjectDetails";
import DashboardTableWithDetails from "../components/Dashboard/Table/DashboardTableWithDetails";
import DashboardTable from "../components/Dashboard/Table/DashboardTable";
import DashboardCard from "../components/Dashboard/DashboardCard";
import DashboardChart from "../components/Dashboard/DashboardChart";
import DashboardGraph from "../components/Dashboard/DashboardGraph";
import { useSelector } from "react-redux";
import { selectLogin } from "../features/Login/LoginSlice";
import { BORROWER, LENDER } from "../Context/Roles/roles";

Chart.register(ArcElement, Tooltip, Legend);

const Dashboard = () => {
  const { width } = useTheme();
  const [projectDetails, setProjectDetails] = React.useState(false);
  const [userRole, setUserRole] = React.useState(LENDER());
  const User = useSelector(selectLogin);

  React.useEffect(() => {
    if (User.isAuthenticated) {
      const role = User.user.role;
      setUserRole(role);
    }
  }, [User, setUserRole, userRole]);

  const DashboardStyle = {
    width: width,
    margin: "5vh auto",
  };
  const Borrower = {
    cardPie: [
      {
        title: "Total Projects",
        value: "",
      },
      {
        title: "Total Amount",
        value: "",
      },
      {
        title: "Total Collected",
        value: "",
      },
      {
        title: "Total Received",
        Value: "",
      },
    ],
    Cart: [
      "Total Amount Per Project",
      "Total Amount Raised Per Project",
      "Total Projects By Category",
    ],
    graph: "Progression curve of the different payments on all Projects",
  };

  return (
    <Box sx={DashboardStyle}>
      <DashboardCard
        TitleData={userRole === BORROWER() ? Borrower.cardPie : ""}
      />
      <DashboardChart
        TitleData={userRole === BORROWER() ? Borrower.Cart : ""}
      />
      <DashboardGraph Title={userRole === BORROWER() ? Borrower.graph : ""} />

      {userRole === BORROWER() && (
        <DashboardTable setProjectDetails={setProjectDetails} />
      )}

      {userRole === LENDER() && (
        <DashboardTableWithDetails setProjectDetails={setProjectDetails} />
      )}

      <ProjectDetails
        projectDetails={projectDetails}
        setProjectDetails={setProjectDetails}
      />
    </Box>
  );
};

export default Dashboard;
