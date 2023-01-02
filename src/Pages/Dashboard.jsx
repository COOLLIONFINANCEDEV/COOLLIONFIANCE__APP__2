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
import { setPoppu } from "../features/Poppu/PoppuSlice";
import { errorContent } from "../Context/Content/AppContent";
import { AddUserOffer, selectedOffers } from "../features/Offers/OffersSlice";

Chart.register(ArcElement, Tooltip, Legend);

const Dashboard = () => {
  const { width } = useTheme();
  const [projectDetails, setProjectDetails] = React.useState(false);
  const User = useSelector(selectLogin);
  const company = User.user.companies[User.user.companies.length - 1];
  const DashboardLoaderKey = randomkey();
  const dispatch = useDispatch();
  const offers = useSelector(selectedOffers).offers;

  const DashboardStyle = {
    width: width,
    margin: "5vh auto",
  };
  const Borrower = {
    cardPie: [
      {
        title: "Total Projects",
        value: offers?.length <= 9 ? `0${offers?.length}` : offers?.length,
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

  React.useEffect(() => {
    console.log(User.user.role);
    if (User.user.role === BORROWER()) {
      dispatch(setLoader({ state: true, key: DashboardLoaderKey }));
      SessionService.GetOfferByUser(company.id)
        .then((datas) => {
          dispatch(deleteLoader({ key: DashboardLoaderKey }));
          if (datas.data.error === true) {
            dispatch(setPoppu({ state: "error", content: errorContent() }));
          } else {
            dispatch(AddUserOffer({ offers: datas.data.data }));
          }
        })
        .catch((error) => {
          console.log(error);
          dispatch(deleteLoader({ key: DashboardLoaderKey }));
          dispatch(setPoppu({ state: "error", content: errorContent() }));
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  React.useEffect(() => {
    console.log(offers);
  }, [offers]);

  return (
    <Box sx={DashboardStyle}>
      <DashboardCard
        TitleData={User.user.role === BORROWER() ? Borrower.cardPie : ""}
      />
      <DashboardChart
        TitleData={User.user.role === BORROWER() ? Borrower.Cart : ""}
      />
      <DashboardGraph
        Title={User.user.role === BORROWER() ? Borrower.graph : ""}
      />

      {User.user.role === BORROWER() && (
        <DashboardTable setProjectDetails={setProjectDetails} data={offers} />
      )}

      {User.user.role === LENDER() && (
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
