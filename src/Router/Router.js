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
  MyProjectRouteLink,
  NotFoundRouteLink,
  ProjectDetailsLink,
  ProjectGlobalLink,
  RedirectRouteLink,
  SettingsRouteLink,
} from "./Routes";
import ProjectDetailsPage from "../Pages/ProjectDetailsPage";
import Cart from "../Pages/Cart";
import Login from "../Pages/Login";
import { useSelector } from "react-redux";
import { selectLogin } from "../features/Login/LoginSlice";
import Settings from "../Pages/Settings";
import Investement from "../Pages/Investement";
import Redirect from "../Pages/Redirect";
import RequireAuth from "../Helpers/RequireAuth";
import { BORROWER, LENDER } from "../Context/Roles/roles";
import BorrowerDashboard from "../Pages/Borrower/BorrowerDashboard";

const Router = () => {
  const LoginState = useSelector(selectLogin);
  return (
    <Routes>
      {/* lender routes */}
      <Route>
        <Route
          path={HomeRouteLink()}
          element={
            <RequireAuth allowedRoles={LENDER()}>
              <Home />
            </RequireAuth>
          }
        />
        <Route path={ProjectGlobalLink()}>
          <Route
            path={`:${ProjectDetailsLink(1)}`}
            element={
              <RequireAuth allowedRoles={LENDER()}>
                <ProjectDetailsPage />
              </RequireAuth>
            }
          />
        </Route>
        <Route
          path={CartRouteLink()}
          element={
            <RequireAuth allowedRoles={LENDER()}>
              <Cart />
            </RequireAuth>
          }
        />
        {LoginState.isAuthenticated && (
          <Route
            path={SettingsRouteLink()}
            element={
              <RequireAuth allowedRoles={LENDER()}>
                <Settings />
              </RequireAuth>
            }
          />
        )}
        {LoginState.isAuthenticated && (
          <Route
            path={InvestmentRouteLink()}
            element={
              <RequireAuth allowedRoles={LENDER()}>
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
            <RequireAuth allowedRoles={BORROWER()}>
              <BorrowerDashboard />
            </RequireAuth>
          }
        />

        <Route
          path={MyProjectRouteLink()}
          element={
            <RequireAuth allowedRoles={BORROWER()}>
              <BorrowerDashboard />
            </RequireAuth>
          }
        />
      </Route>

      {/* Admin Routes */}
      <Route>
        {LoginState.isAuthenticated && (
          <Route path={DashboardRouteLink()} element={<Dashboard />} />
        )}
      </Route>

      {/* Public Routes */}
      <Route>
        <Route path={RedirectRouteLink()} element={<Redirect />} />
        <Route path={NotFoundRouteLink()} element={<NotFound />} />

        {LoginState.isAuthenticated === false && (
          <Route path={LoginRouteLink()} element={<Login />} />
        )}
      </Route>
    </Routes>
  );
};

export default Router;
