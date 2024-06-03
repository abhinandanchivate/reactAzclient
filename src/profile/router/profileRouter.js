import React from "react";
import { Route, Routes } from "react-router-dom";
import CreateProfile from "../components/forms/CreateProfile";

const profileRouter = () => {
  return (
    <>
      {" "}
      <Routes>
        <Route path="/create" element={<CreateProfile></CreateProfile>} />
        <Route path="/edit" element={<CreateProfile></CreateProfile>}></Route>
      </Routes>
    </>
  );
};

export default profileRouter;
