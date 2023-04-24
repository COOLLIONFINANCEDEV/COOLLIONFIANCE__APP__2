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
import { useDispatch, useSelector } from "react-redux";
import { selectLogin } from "../features/Login/LoginSlice";
import { BORROWER, LENDER } from "../Context/Roles/roles";
import randomkey from "../Helpers/randomKey";
import { deleteLoader, setLoader } from "../features/Loader/LoaderSlice";
import SessionService from "../Services/SessionService";
import { AddAllOffers, selectedOffers } from "../features/Offers/OffersSlice";

Chart.register(ArcElement, Tooltip, Legend);

const Dashboard = () => {
  const { width } = useTheme();
  const { user, tenant } = useSelector(selectLogin);
  const dashboardKeyLoader = randomkey();
  const dashboardInvestmentKeyLoader = randomkey();
  const dispatch = useDispatch();
  const offers = useSelector(selectedOffers).offers;
  // const investments = useSelector(selectedInvestments).investments;

  const [projectDetails, setProjectDetails] = React.useState(false);
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

  React.useEffect(() => {
    if (offers === null && user.role === BORROWER()) {
      dispatch(setLoader({ state: true, key: dashboardKeyLoader }));
      SessionService.GetAllProject().then((data) => {
        if (data.error === false) {
          dispatch(AddAllOffers({ offers: data.data }));
        }
        dispatch(deleteLoader({ key: dashboardKeyLoader }));
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [offers]);

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
