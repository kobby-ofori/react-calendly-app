import React from "react";
import { Route, Routes } from "react-router-dom";
import Multipage from "../pages/Multipage";
import Enterprise from "../pages/Enterprise";
import Teams from "../pages/Teams";
import Individuals from "../pages/Individuals";
import ErrorPage from "../pages/ErrorPage";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Multipage />} />
      <Route path="/individuals" element={<Individuals />} />
      <Route path="/teams" element={<Teams />} />
      <Route path="/enterprise" element={<Enterprise />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export default Router;
