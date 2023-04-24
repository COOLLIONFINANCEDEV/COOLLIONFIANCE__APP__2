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
import {
  AddAllOffers,
  AddAllOffersDashboard,
  AddAllStats,
  selectedOffers,
} from "../features/Offers/OffersSlice";

Chart.register(ArcElement, Tooltip, Legend);

const Dashboard = () => {
  const { width } = useTheme();
  const { user, tenant } = useSelector(selectLogin);
  const dashboardKeyLoader = randomkey();
  const dashboardInvestmentKeyLoader = randomkey();
  const dispatch = useDispatch();
  const { offerDashboard, stats } = useSelector(selectedOffers);
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
        value: offerDashboard?.length,
      },
      {
        title: "Total Amount",
        value: offerDashboard?.reduce((total, { amountRequested }) => {
          return total + amountRequested;
        }, 0),
      },
      // {
      //   title: "Total Amount with interest",
      //   value: "0",
      // },
      {
        title: "total investment",
        value: "0",
      },
    ],
    Cart: [
      {
        title: "Total amount per country",
        data: offerDashboard?.map((item) => {
          return { value: item.amountRequested, title: item.projectCountry };
        }),
      },
      {
        title: "Total Amount Per Project",
        data: offerDashboard?.map((item) => {
          return { value: item.amountRequested, title: item.projectTitle };
        }),
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
    if (offerDashboard === null) {
      dispatch(setLoader({ state: true, key: dashboardKeyLoader }));
      SessionService.GetAllProject().then((data) => {
        if (data.error === false) {
          if (user.role === LENDER()) {
            dispatch(
              AddAllOffersDashboard({
                offerDashboard: [],
              })
            );
          } else {
            dispatch(
              AddAllOffersDashboard({
                offerDashboard: data.data.filter(
                  (item) => item.tenant.id === tenant.id
                ),
              })
            );
          }
        }
        if (stats === null) {
          SessionService.GetStats(tenant.id).then((stats) => {
            if (stats.error === false) {
              dispatch(AddAllStats({ stats: stats.data }));
            }
            dispatch(deleteLoader({ key: dashboardKeyLoader }));
          });
        } else {
          dispatch(deleteLoader({ key: dashboardKeyLoader }));
        }
      });
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [offerDashboard]);

  return (
    <Box sx={DashboardStyle}>
      <DashboardCard
        TitleData={user.role === BORROWER() ? Borrower.cardPie : Lender.cardPie}
      />

      {user.role === BORROWER() && (
        <>
          <DashboardChart
            information={user.role === BORROWER() ? Borrower.Cart : Lender.Cart}
          />
          <DashboardTable
            setProjectDetails={setProjectDetails}
            offers={offerDashboard}
          />
        </>
      )}

      {user.role === LENDER() && (
        <>
          <DashboardGraph
            information={
              user.role === BORROWER() ? Borrower.graph : Lender.graph
            }
          />
          <DashboardTableWithDetails
            setProjectDetails={setProjectDetails}
            offers={offerDashboard}
          />
        </>
      )}

      <ProjectDetails
        projectDetails={projectDetails}
        setProjectDetails={setProjectDetails}
      />
    </Box>
  );
};

export default Dashboard;
