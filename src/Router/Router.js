import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../Pages/Dashboard";
import NotFound from "../Pages/NotFound";
import Home from "../Pages/Home";
import {
  BorrowerRouteLink,
  CartRouteLink,
  DashboardRouteLink,
  HomeRouteLink,
  InvestmentRouteLink,
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
import Investement from "../Pages/Investement";
import RequireAuth from "../Helpers/RequireAuth";

const Router = () => {
  const LoginState = useSelector(selectLogin);
  return (
    <Routes>
      {/* lender routes */}
      <Route>
        <Route
          path={HomeRouteLink()}
          element={
            <RequireAuth allowedRoles={"LENDER"}>
              <Home />
            </RequireAuth>
          }
        />
        <Route path={ProjectGlobalLink()}>
          <Route
            path={`:${ProjectDetailsLink(1)}`}
            element={
              <RequireAuth allowedRoles={"LENDER"}>
                <ProjectDetailsPage />
              </RequireAuth>
            }
          />
        </Route>
        <Route
          path={CartRouteLink()}
          element={
            <RequireAuth allowedRoles={"LENDER"}>
              <Cart />
            </RequireAuth>
          }
        />
        {LoginState.isAuthenticated && (
          <Route
            path={SettingsRouteLink()}
            element={
              <RequireAuth allowedRoles={"LENDER"}>
                <Settings />
              </RequireAuth>
            }
          />
        )}
        {LoginState.isAuthenticated && (
          <Route
            path={InvestmentRouteLink()}
            element={
              <RequireAuth allowedRoles={"LENDER"}>
                <Investement />
              </RequireAuth>
            }
          />
        )}
      </Route>

      {/* borrower routes */}
      <Route>
        <Route
          path={BorrowerRouteLink()}
          element={
            <RequireAuth allowedRoles={"BORROWER"}>
              <Home />
            </RequireAuth>
          }
        />
      </Route>

      <Route path={NotFoundRouteLink()} element={<NotFound />} />

      {LoginState.isAuthenticated === false && (
        <Route path={LoginRouteLink()} element={<Login />} />
      )}
      {LoginState.isAuthenticated && (
        <Route path={DashboardRouteLink()} element={<Dashboard />} />
      )}
    </Routes>
  );
};

export default Router;
