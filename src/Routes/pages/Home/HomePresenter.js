import React from 'react';
import { HomeLayout, MapContainer, FestivalList } from './Components';

const HomePresenter = ({ festival }) => {
  // console.log(festival);
  const { UC_SEQ, LAT, LNG, TITLE } = festival;
  return (
    <>
      {/* <AutoSlide /> */}
      {/* <MapContainer key={UC_SEQ} LAT={LAT} LNG={LNG} /> */}
      {/* <HomeLayout /> */}
      <FestivalList TITLE={TITLE} />
    </>
  );
};

export default HomePresenter;
