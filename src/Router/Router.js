import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../Pages/Dashboard";
import NotFound from "../Pages/NotFound";
import Home from "../Pages/Home";
import {
  DashboardRouteLink,
  HomeRouteLink,
  NotFoundRouteLink,
  ProjectDetailsLink,
  ProjectGlobalLink,
} from "./Routes";
import ProjectDetails from "../Pages/ProjectDetails";
import ProjectDetailsPage from "../Pages/ProjectDetailsPage";

const Router = () => {
  return (
    <Routes>
      <Route path={HomeRouteLink()} element={<Home />} />
      <Route path={NotFoundRouteLink()} element={<NotFound />} />
      <Route path={ProjectGlobalLink()} >
        <Route path={ProjectDetailsLink(1)} element={<ProjectDetailsPage />} />
      </Route>
      {true && <Route path={DashboardRouteLink()} element={<Dashboard />} />}
    </Routes>
  );
};

export default Router;
