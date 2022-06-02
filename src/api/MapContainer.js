import React, { useEffect, useState } from 'react';

const { kakao } = window;

const MapContainer = () => {
  const [myMap, setMap] = useState(null);

  useEffect(() => {
    const container = document.getElementById('map');
    const options = {
      center: new kakao.maps.LatLng(35.17281793748335, 129.13076811451697),
      level: 3,
    };
    //지도생성
    const map = new kakao.maps.Map(container, options);

    // // 마커 클러스터러를 생성
    const clusterer = new kakao.maps.MarkerClusterer({
      map: map, // 마커들을 클러스터로 관리하고 표시할 지도 객체
      averageCenter: true, // 클러스터에 포함된 마커들의 평균 위치를 클러스터 마커 위치로 설정
      minLevel: 5, // 클러스터 할 최소 지도 레벨
    });

    // 마커들을 저장할 변수 생성(마커 클러스터러 관련)
    let markers = [];

    const data = {
      positions: [
        {
          lat: 37.27943075229118,
          lng: 127.01763998406159,
        },
        {
          lat: 37.55915668706214,
          lng: 126.92536526611102,
        },
        {
          lat: 35.13854258261161,
          lng: 129.1014781294671,
        },
        {
          lat: 37.55518388656961,
          lng: 126.92926237742505,
        },
        {
          lat: 35.20618517638034,
          lng: 129.07944301057026,
        },
        {
          lat: 37.561110808242056,
          lng: 126.9831268386891,
        },
      ],
    };

    for (let i = 0; i < data.positions.length; i++) {
      // 지도에 마커를 생성하고 표시
      let marker = new kakao.maps.Marker({
        position: new kakao.maps.LatLng(
          data.positions[i].lat,
          data.positions[i].lng,
        ), // 마커의 좌표
        map: map, // 마커를 표시할 지도 객체
      });

      // 생성된 마커를 마커 저장하는 변수에 넣음(마커 클러스터러 관련)
      markers.push(marker);
    }

    //클러스터러에 마커들을 추가
    clusterer.addMarkers(markers);
  }, []);

  return (
    <div
      id="map"
      style={{
        width: '500px',
        height: '500px',
      }}
    ></div>
  );
};

export default MapContainer;
