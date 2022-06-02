import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { HeaderLayout } from '../Components';
import { Home, Festival, FestivalDetailed, About } from './pages';

const RootRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<HeaderLayout />}>
        <Route index element={<Home />} />
        <Route path="/festival" element={<Festival />}>
          <Route index element={<Festival />} />
          <Route path="/detailedPage" element={<FestivalDetailed />} />
        </Route>
        <Route path="/about" element={<About />} />
      </Route>
    </Routes>
  );
};

export default RootRoute;
