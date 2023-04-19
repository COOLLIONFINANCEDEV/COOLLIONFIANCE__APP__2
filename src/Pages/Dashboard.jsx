/* eslint-disable no-unused-vars */
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
  const [offers, setOffers] = React.useState(null);
  const user = useSelector(selectLogin).user;
  const [information, setInformation] = React.useState({
    totalInvestment: "00",
    totalAmountWithoutInterest: "00",
    totalAmountWithInterest: "00",
    totalAmountReceived: "00",
    totalAmount: "00",
    totalAmountInvest: "00",
  });
  const [chartInformation, setChartInformation] = React.useState({
    totalAmountPerProject: [],
    totalAmountOnProject: [],
    totalAmountByCategory: [],
  });

  const [graph, setGraph] = React.useState(new Array(12).fill(0));

  const DashboardStyle = {
    width: width,
    margin: "5vh auto",
  };

  const Borrower = {
    cardPie: [
      {
        title: "Total Projects",
        value: "0",
      },
      {
        title: "Total Amount",
        value: "0",
      },
      {
        title: "Total Amount with interest",
        value: "0",
      },
      {
        title: "total investment",
        value: "0",
      },
    ],
    Cart: [
      {
        title: "the different investment amounts",
        data: [{ title: "", value: "" }],
      },
      {
        title: "Total Amount Per Project",
        data: [{ title: "", value: "" }],
      },
      {
        title: "Total Projects By Category",
        data: [{ title: "", value: "" }],
      },
    ],
    graph: graph,
  };

  const Lender = {
    cardPie: [
      {
        title: "Total Investment",
        value: "0",
      },
      {
        title: "Total Amount without interest",
        value: "0",
      },
      {
        title: "Totalamount with interest",
        value: "0",
      },
      {
        title: "Total Received with interest",
        value: "0",
      },
    ],
    Cart: [
      {
        title: "the different investment amounts",
        data: [{ title: "", value: "" }],
      },
      {
        title: "Total Amount Per Project",
        data: [{ title: "", value: "" }],
      },
      {
        title: "Total Projects By Category",
        data: [{ title: "", value: "" }],
      },
    ],
    graph: graph,
  };

  return (
    <Box sx={DashboardStyle}>
      <DashboardCard
        TitleData={user.role === BORROWER() ? Borrower.cardPie : Lender.cardPie}
      />
      <DashboardChart
        information={user.role === BORROWER() ? Borrower.Cart : Lender.Cart}
      />
      <DashboardGraph
        information={user.role === BORROWER() ? Borrower.graph : Lender.graph}
      />

      {user.role === BORROWER() && (
        <DashboardTable setProjectDetails={setProjectDetails} offers={offers} />
      )}

      {user.role === LENDER() && (
        <DashboardTableWithDetails
          setProjectDetails={setProjectDetails}
          offers={offers}
          wallet={null}
        />
      )}

      <ProjectDetails
        projectDetails={projectDetails}
        setProjectDetails={setProjectDetails}
      />
    </Box>
  );
};

export default Dashboard;
