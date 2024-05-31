import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "../components/Dashboard";

const index = () => {
  return (
    <>
      <Routes>
        <Route path="" element={<Dashboard></Dashboard>}></Route>
      </Routes>
    </>
  );
};

export default index;
