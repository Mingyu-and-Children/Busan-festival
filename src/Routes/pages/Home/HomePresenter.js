import React from 'react';
import { HomeLayout, MapContainer } from './Components';

const HomePresenter = ({ festival }) => {
  // console.log(festival);
  const { UC_SEQ, LAT, LNG } = festival;
  return (
    <>
      {/* <AutoSlide /> */}
      {/* <MapContainer key={UC_SEQ} LAT={LAT} LNG={LNG} /> */}
      <HomeLayout />
      {/* <Maptest key={UC_SEQ} LAT={LAT} LNG={LNG} /> */}
    </>
  );
};

export default HomePresenter;
