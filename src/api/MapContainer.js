import React, { useEffect, useState } from 'react';

const { kakao } = window;

const MapContainer = () => {
  const [myMap, setMap] = useState(null);

  useEffect(() => {
    const container = document.getElementById('myMap');
    const options = {
      center: new kakao.maps.LatLng(35.17281793748335, 129.13076811451697),
      level: 3,
    };
    const kakaoMap = new kakao.maps.Map(container, options);

    // 마커가 표시될 위치
    const markerPosition = new kakao.maps.LatLng(
      35.17281793748335,
      129.13076811451697,
    );

    // 마커생성
    const marker = new kakao.maps.Marker({
      position: markerPosition,
    });
    marker.setMap(kakaoMap);

    const iwContent = '<div>센텀벤처타운</div>', // 인포윈도우에 표출될 내용
      iwPosition = new kakao.maps.LatLng(35.17281793748335, 129.13076811451697); //인포윈도우 표시 위치

    // 인포윈도우를 생성합니다
    const infowindow = new kakao.maps.InfoWindow({
      position: iwPosition,
      content: iwContent,
    });

    // 마커 위에 인포윈도우를 표시
    infowindow.open(kakaoMap, marker);
  }, []);

  return (
    <div
      id="myMap"
      style={{
        width: '500px',
        height: '500px',
      }}
    ></div>
  );
};

export default MapContainer;
