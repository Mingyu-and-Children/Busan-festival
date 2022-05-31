import React from "react";
import { Routes, Route } from "react-router-dom";
import { HeaderLayout } from "../Components";
import { Home, Festival, About } from "./pages";

const RootRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<HeaderLayout />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/festival" element={<Festival />}>
          <Route index element={<Festival />} />
          <Route path=":festivalId" element={<Festival />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default RootRoute;
