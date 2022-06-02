import React from 'react';
import { MapContainer, AutoSlide } from './Components';

const HomePresenter = ({ festivalData }) => {
  return (
    <>
      <AutoSlide festivalData={festivalData} />
      <MapContainer festivalData={festivalData} />
    </>
  );
};

export default HomePresenter;
