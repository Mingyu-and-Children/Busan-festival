import React from 'react';
import { MapContainer } from './Components';

const HomePresenter = ({ festival }) => {
  // console.log(festival);
  const { UC_SEQ, LAT, LNG } = festival;
  return (
    <>
      {/* <AutoSlide /> */}
      <MapContainer key={UC_SEQ} LAT={LAT} LNG={LNG} />
      {/* <Maptest key={UC_SEQ} LAT={LAT} LNG={LNG} /> */}
    </>
  );
};

export default HomePresenter;
