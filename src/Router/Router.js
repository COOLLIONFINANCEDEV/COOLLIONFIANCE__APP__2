import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../Pages/Dashboard";
import NotFound from "../Pages/NotFound";
import Home from "../Pages/Home";
import {
  AdminBorrowerRouteLink,
  AdminLenderRouteLink,
  AdminProjectRouteLink,
  AdminSettingsRouteLink,
  BorrowerRouteLink,
  BorrowerSettingsRouteLink,
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
import { ADMIN, BORROWER, LENDER } from "../Context/Roles/roles";
import BorrowerDashboard from "../Pages/Borrower/BorrowerDashboard";
import BorrowerSettings from "../Pages/Borrower/BorrowerSettings";
import AdminBorrowers from "../Pages/Admin/AdminBorrowers";
import AdminLenders from "../Pages/Admin/AdminLenders";
import AdminProjects from "../Pages/Admin/AdminProjects";
import AdminSettings from "../Pages/Admin/AdminSettings";

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

        {LoginState.isAuthenticated && (
          <Route
            path={BorrowerSettingsRouteLink()}
            element={
              <RequireAuth allowedRoles={BORROWER()}>
                <BorrowerSettings />
              </RequireAuth>
            }
          />
        )}
      </Route>

      {/* Admin Routes */}
      <Route>
        <Route
          path={AdminBorrowerRouteLink()}
          element={
            <RequireAuth allowedRoles={ADMIN()}>
              <AdminBorrowers />
            </RequireAuth>
          }
        />

        <Route
          path={AdminLenderRouteLink()}
          element={
            <RequireAuth allowedRoles={ADMIN()}>
              <AdminLenders />
            </RequireAuth>
          }
        />

        <Route
          path={AdminProjectRouteLink()}
          element={
            <RequireAuth allowedRoles={ADMIN()}>
              <AdminProjects />
            </RequireAuth>
          }
        />

        <Route
          path={AdminSettingsRouteLink()}
          element={
            <RequireAuth allowedRoles={ADMIN()}>
              <AdminSettings />
            </RequireAuth>
          }
        />
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
