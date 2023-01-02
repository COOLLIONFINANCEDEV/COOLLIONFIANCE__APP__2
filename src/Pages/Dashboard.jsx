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
import { selectLogin, UpdateUser } from "../features/Login/LoginSlice";
import { BORROWER, LENDER } from "../Context/Roles/roles";
import randomkey from "../Helpers/randomKey";
import { deleteLoader, setLoader } from "../features/Loader/LoaderSlice";
import SessionService from "../Services/SessionService";
import { setPoppu } from "../features/Poppu/PoppuSlice";
import { errorContent } from "../Context/Content/AppContent";
import {
  AddAllOffers,
  AddUserOffer,
  selectedOffers,
} from "../features/Offers/OffersSlice";
import { AddWallet, selectedWallet } from "../features/Wallet/WalletSlice";

Chart.register(ArcElement, Tooltip, Legend);

const Dashboard = () => {
  const { width } = useTheme();
  const [projectDetails, setProjectDetails] = React.useState(false);
  const User = useSelector(selectLogin);
  const company = User.user.companies[User.user.companies.length - 1];
  const DashboardLoaderKey = randomkey();
  const walletLoaderkey = randomkey();
  const dispatch = useDispatch();
  const offers = useSelector(selectedOffers).offers;
  const user = useSelector(selectLogin).user;
  const wallet = useSelector(selectedWallet).wallet;
  const [information, setInformation] = React.useState({
    totalInvestment: "00",
    totalAmountWithoutInterest: "00",
    totalAmountWithInterest: "00",
    totalAmountReceived: "00",
  });
  const [chartInformation, setChartInformation] = React.useState({
    totalAmountPerProject: [],
    totalAmountOnProject: [],
    totalAmountByCategory: [],
  });

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

  const Lender = {
    cardPie: [
      {
        title: "Total Investment",
        value: information.totalInvestment,
      },
      {
        title: "Total Amount without interest",
        value: information.totalAmountWithoutInterest,
      },
      {
        title: "Totalamount with interest",
        value: information.totalAmountWithInterest,
      },
      {
        title: "Total Received with interest",
        value: information.totalAmountReceived,
      },
    ],
    Cart: [
      {
        title: "the different investment amounts",
        data: chartInformation.totalAmountPerProject,
      },
      {
        title: "Total Amount Per Project",
        data: chartInformation.totalAmountOnProject,
      },
      {
        title: "Total Projects By Category",
        data: chartInformation.totalAmountByCategory,
      },
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
            console.log(datas.data, "lll");
            dispatch(AddUserOffer({ offers: datas.data.data }));
          }
        })
        .catch((error) => {
          console.log(error);
          dispatch(deleteLoader({ key: DashboardLoaderKey }));
          dispatch(setPoppu({ state: "error", content: errorContent() }));
        });
    } else if (User.user.role === LENDER()) {
      SessionService.GetWalletByUser(user.wallet.id)
        .then((datas) => {
          dispatch(deleteLoader({ key: walletLoaderkey }));
          dispatch(deleteLoader({ key: walletLoaderkey }));
          dispatch(AddWallet({ wallet: datas.data.data }));
          dispatch(
            UpdateUser({
              newUser: JSON.stringify(datas.data.data.user),
              user: user,
            })
          );
          console.log(datas.data);
        })
        .catch((error) => {
          dispatch(deleteLoader({ key: walletLoaderkey }));
          dispatch(deleteLoader({ key: walletLoaderkey }));
          console.log(error);
        });

      SessionService.GetAllOffer()
        .then((datas) => {
          dispatch(AddAllOffers({ offers: datas.data.data }));
        })
        .catch((error) => {
          console.log(error);
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  React.useEffect(() => {
    if (wallet !== null && offers !== null) {
      let totalAmountWithoutInterest = 0;
      let totalAmountWithInterest = 0;
      let totalAmountReceived = 0;
      let totalAmountPerProject = [];
      let totalAmountOnProject = [];
      let totalAmountByCategory = [];
      wallet.investments.forEach((item) => {
        totalAmountWithoutInterest += item.amount;
        totalAmountPerProject.push({
          title: item.offer_id,
          value: item.amount,
        });

        const find = totalAmountOnProject.find(
          (element) => element?.title === item.offer_id
        );
        const category = totalAmountByCategory.find(
          (element) => element?.title === item.offer_id
        );
        if (find === undefined) {
          totalAmountOnProject.push({
            title: item.offer_id,
            value: item.amount,
          });
        } else {
          const index = totalAmountOnProject.indexOf(find);
          totalAmountOnProject[index].value += item.amount;
        }

        if (category === undefined) {
          totalAmountByCategory.push({
            title: item.offer_id,
            value: item.amount,
          });
        } else {
          const index = totalAmountByCategory.indexOf(category);
          totalAmountByCategory[index].value += item.amount;
        }
      });

      wallet.transactions.forEach((trans) => {
        if (
          trans.status.toLowerCase() === "accepted" &&
          trans.service.toLowerCase() === "coollionfi" &&
          trans.type.toLowerCase() === "deposit"
        ) {
          totalAmountReceived += trans.amount;
        }
      });

      offers.forEach((offer) => {
        totalAmountPerProject.forEach((item) => {
          if (offer.id === item.title) {
            item.title = offer.name;
          }
        });

        totalAmountOnProject.forEach((item) => {
          if (offer.id === item.title) {
            item.title = offer.name;
          }
        });

        totalAmountByCategory.forEach((item) => {
          if (offer.id === item.title) {
            item.title = offer.category;
          }
        });
      });

      setInformation((state) => {
        state.totalInvestment =
          wallet?.investments?.length <= 9
            ? `0${wallet?.investments?.length}`
            : wallet?.investments?.length;
        state.totalAmountWithoutInterest =
          totalAmountWithoutInterest <= 9
            ? `0${totalAmountWithoutInterest}`
            : totalAmountWithoutInterest;
        state.totalAmountReceived =
          totalAmountReceived <= 9
            ? `0${totalAmountReceived}`
            : totalAmountReceived;
        state.totalAmountWithInterest =
          totalAmountWithInterest <= 9
            ? `0${totalAmountWithInterest}`
            : totalAmountWithInterest;
        return state;
      });

      setChartInformation((state) => {
        state.totalAmountPerProject = totalAmountPerProject;
        state.totalAmountOnProject = totalAmountOnProject;
        state.totalAmountByCategory = totalAmountByCategory;
        return state;
      });
    }
  }, [wallet]);

  return (
    <Box sx={DashboardStyle}>
      <DashboardCard
        TitleData={
          User.user.role === BORROWER() ? Borrower.cardPie : Lender.cardPie
        }
      />
      <DashboardChart
        information={
          User.user.role === BORROWER() ? Borrower.Cart : Lender.Cart
        }
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
