import React from "react";
import { Route, Routes } from "react-router-dom";
import Register from "../components/Register";
import Login from "../components/Login";
import Register2 from "../components/Register2";
import Register3 from "../components/Register3";
import Login3 from "../components/Login3";

//auth router /auth/*
const Index = () => {
  return (
    <>
      <Routes>
        <Route path="/register" element={<Register3></Register3>}></Route>
        <Route path="/login" element={<Login3></Login3>}></Route>
      </Routes>
    </>
  );
};

export default Index;
