import React from "react";
import { Routes, Route } from "react-router-dom";
import AuthRouter from "./auth/router";
import DashboardRouter from "./dashboard/routers/";
import Landing from "./core/components/layouts/Landing";
import ProfileRouter from "./profile/router/profileRouter";

const RootRouter = () => {
  return (
    <>
      <Routes>
        <Route path="" element={<Landing></Landing>}></Route>
        <Route path="/auth/*" element={<AuthRouter></AuthRouter>}></Route>
        <Route
          path="/dashboard/*"
          element={<DashboardRouter></DashboardRouter>}></Route>
        <Route
          path="/profile/*"
          element={<ProfileRouter></ProfileRouter>}></Route>
      </Routes>
    </>
  );
};

export default RootRouter;
