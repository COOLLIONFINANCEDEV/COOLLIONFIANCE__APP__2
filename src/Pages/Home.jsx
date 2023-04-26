import { useTheme } from "@emotion/react";
import { Stack } from "@mui/material";
import React from "react";
import Ownloan from "../components/OwnLoan/Ownloan";
import Projects from "../Containers/Projects";
import ProjectDetails from "./ProjectDetails";
import { useDispatch, useSelector } from "react-redux";
import { AddAllTerm, selectedOffers } from "../features/Offers/OffersSlice";
import SessionService from "../Services/SessionService";
import { selectLogin } from "../features/Login/LoginSlice";

const Home = () => {
  const { width } = useTheme();
  const { terms } = useSelector(selectedOffers);
  const { isAuthenticated } = useSelector(selectLogin);
  const { tenant } = useSelector(selectLogin);
  const dispatch = useDispatch();
  const homeStyle = {
    width: width,
    margin: "auto",
  };
  const [projectDetails, setProjectDetails] = React.useState({
    state: false,
    offer: null,
  });

  React.useEffect(() => {
    if (!terms && isAuthenticated) {
      SessionService.GetTerms(tenant.id).then((data) => {
        dispatch(AddAllTerm({ terms: data.data }));
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [terms, isAuthenticated]);

  return (
    <>
      <Stack className="home" sx={homeStyle}>
        <Ownloan />
        <Projects setProjectDetails={setProjectDetails} />
      </Stack>
      <ProjectDetails
        projectDetails={projectDetails}
        setProjectDetails={setProjectDetails}
      />
    </>
  );
};

export default Home;
