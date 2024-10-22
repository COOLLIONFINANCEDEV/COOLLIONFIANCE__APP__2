import React from "react";
import { Route, Routes } from "react-router-dom";
import NotFound from "../Pages/NotFound";
import Home from "../Pages/Home";
import {
  AdminBorrowerRouteLink,
  AdminLenderRouteLink,
  AdminProjectRouteLink,
  AdminSettingsRouteLink,
  BorrowerRouteLink,
  BorrowerSettingsRouteLink,
  GroupeRouteLink,
  // CartRouteLink,
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
// import Cart from "../Pages/Cart";
import Login from "../Pages/Login";
import { useSelector } from "react-redux";
import { selectLogin } from "../features/Login/LoginSlice";
import Settings from "../Pages/Settings";
import Redirect from "../Pages/Redirect";
import RequireAuth from "../Helpers/RequireAuth";
import { ADMIN, BORROWER, LENDER } from "../Context/Roles/roles";
import Dashboard from "../Pages/Dashboard";
import Group from "../Pages/Group";
import Midelware from "../Helpers/Midelware";

const Router = () => {
  const LoginState = useSelector(selectLogin);
  return (
    <Routes>
      {/* lender routes */}
      <Route>
        <Route
          path={HomeRouteLink()}
          element={
            <Midelware
              admin={<Home />}
              lender={<Home />}
              borrower={<Dashboard />}
            />
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
        {/* <Route
          path={CartRouteLink()}
          element={
            <RequireAuth allowedRoles={LENDER()}>
              <Cart />
            </RequireAuth>
          }
        /> */}
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
                <Dashboard />
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
              <Dashboard />
            </RequireAuth>
          }
        />

        <Route
          path={MyProjectRouteLink()}
          element={
            <RequireAuth allowedRoles={BORROWER()}>
              <Dashboard />
            </RequireAuth>
          }
        />

        {LoginState.isAuthenticated && (
          <Route
            path={BorrowerSettingsRouteLink()}
            element={
              <RequireAuth allowedRoles={BORROWER()}>
                <Settings />
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
              <Dashboard />
            </RequireAuth>
          }
        />

        <Route
          path={AdminLenderRouteLink()}
          element={
            <RequireAuth allowedRoles={ADMIN()}>
              <Dashboard />
            </RequireAuth>
          }
        />

        <Route
          path={AdminProjectRouteLink()}
          element={
            <RequireAuth allowedRoles={ADMIN()}>
              <Dashboard />
            </RequireAuth>
          }
        />

        <Route
          path={AdminSettingsRouteLink()}
          element={
            <RequireAuth allowedRoles={ADMIN()}>
              <Dashboard />
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

        {/* {LoginState.isAuthenticated === true && (
          <Route path={WalletRouteLink()} element={<Wallet />} />
        )} */}

        {LoginState.isAuthenticated === true && (
          <Route path={GroupeRouteLink()} element={<Group />} />
        )}
      </Route>
    </Routes>
  );
};

export default Router;
