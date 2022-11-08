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
  SettingsRouteLink,
} from "./Routes";
import ProjectDetailsPage from "../Pages/ProjectDetailsPage";
import Cart from "../Pages/Cart";
import Login from "../Pages/Login";
import { useSelector } from "react-redux";
import { selectLogin } from "../features/Login/LoginSlice";
import Settings from "../Pages/Settings";

const Router = () => {
  const LoginState = useSelector(selectLogin);
  return (
    <Routes>
      <Route path={HomeRouteLink()} element={<Home />} />
      <Route path={NotFoundRouteLink()} element={<NotFound />} />
      <Route path={ProjectGlobalLink()} >
        <Route path={`:${ProjectDetailsLink(1)}`} element={<ProjectDetailsPage />} />
      </Route>
      { LoginState.isAuthenticated === false && <Route path={LoginRouteLink()} element={<Login />} />}
      <Route path={CartRouteLink()} element={<Cart/>} />
      {LoginState.isAuthenticated && <Route path={DashboardRouteLink()} element={<Dashboard />} />}
      {LoginState.isAuthenticated && <Route path={SettingsRouteLink()} element={<Settings />} />}
    </Routes>
  );
};

export default Router;
