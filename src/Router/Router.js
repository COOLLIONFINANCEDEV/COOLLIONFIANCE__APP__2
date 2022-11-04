import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../Pages/Dashboard";
import NotFound from "../Pages/NotFound";
import Home from "../Pages/Home";
import {
  CartRouteLink,
  DashboardRouteLink,
  HomeRouteLink,
  LoginRouteLink,
  NotFoundRouteLink,
  ProjectDetailsLink,
  ProjectGlobalLink,
} from "./Routes";
import ProjectDetailsPage from "../Pages/ProjectDetailsPage";
import Cart from "../Pages/Cart";
import Login from "../Pages/Login";

const Router = () => {
  return (
    <Routes>
      <Route path={HomeRouteLink()} element={<Home />} />
      <Route path={NotFoundRouteLink()} element={<NotFound />} />
      <Route path={ProjectGlobalLink()} >
        <Route path={`:${ProjectDetailsLink(1)}`} element={<ProjectDetailsPage />} />
      </Route>
      <Route path={LoginRouteLink()} element={<Login />} />
      <Route path={CartRouteLink()} element={<Cart/>} />
      {true && <Route path={DashboardRouteLink()} element={<Dashboard />} />}
    </Routes>
  );
};

export default Router;
