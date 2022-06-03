import React, { useEffect } from 'react';

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

    new kakao.maps.Marker({
      position: new kakao.maps.LatLng(Lat, Lng),
      map: map,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
