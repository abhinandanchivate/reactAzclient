import React from "react";
import { Route, Routes } from "react-router-dom";
import Register from "../components/Register";
import Login from "../components/Login";
import Register2 from "../components/Register2";
import Register3 from "../components/Register3";

//auth router /auth/*
const Index = () => {
  return (
    <>
      <Routes>
        <Route path="/register" element={<Register3></Register3>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
      </Routes>
    </>
  );
};

export default Index;
