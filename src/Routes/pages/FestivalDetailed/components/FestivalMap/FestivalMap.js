import React, { useEffect, useState } from 'react';

const { kakao } = window;

const FestivalMap = ({ Lat, Lng }) => {
  useEffect(() => {
    const container = document.getElementById('map');
    const options = {
      center: new kakao.maps.LatLng(Lat, Lng),
      level: 5,
    };

    //지도생성
    const map = new kakao.maps.Map(container, options);

    let marker = new kakao.maps.Marker({
      position: new kakao.maps.LatLng(Lat, Lng),
      map: map,
    });
  }, []);
  return (
    <div
      id="map"
      style={{
        width: '700px',
        height: '450px',
      }}
    ></div>
  );
};

export default FestivalMap;
