import React, { useEffect, useState, useRef } from 'react';
import data from './Data.json';

const { kakao } = window;

const MapContainer = () => {
  const [myMap, setMap] = useState(null);

  useEffect(() => {
    const container = document.getElementById('MyMap');
    const options = {
      center: new kakao.maps.LatLng(35.17281793748335, 129.13076811451697),
      level: 3,
    };
    const kakaoMap = new kakao.maps.Map(container, options);

    const map = new kakao.maps.Map(document.getElementById('map'), {
      level: 14, // 지도의 확대 레벨
    });

    // // 마커 클러스터러를 생성합니다
    const clusterer = new kakao.maps.MarkerClusterer({
      map: map, // 마커들을 클러스터로 관리하고 표시할 지도 객체
      averageCenter: true, // 클러스터에 포함된 마커들의 평균 위치를 클러스터 마커 위치로 설정
      minLevel: 10, // 클러스터 할 최소 지도 레벨
    });

    // 마커들을 저장할 변수 생성(마커 클러스터러 관련)
    var markers = [];
    for (var i = 0; i < data.length; i++) {
      // 지도에 마커를 생성하고 표시한다.
      var marker = new kakao.maps.Marker({
        position: new kakao.maps.LatLng(data.lat[i][0], data.lng[i][1]), // 마커의 좌표
        map: map, // 마커를 표시할 지도 객체
      });
      // 생성된 마커를 마커 저장하는 변수에 넣음(마커 클러스터러 관련)
      markers.push(marker);
    }

    // const markers = data.positions.map(function (position) {
    //   return new kakao.maps.Marker({
    //     position: new kakao.maps.LatLng(position.lat, position.lng),
    //   });
    // });

    //클러스터러에 마커들을 추가합니다
    clusterer.addMarkers(markers);

    // // 마커가 표시될 위치
    // const markerPosition = new kakao.maps.LatLng(
    //   35.17281793748335,
    //   129.13076811451697,
    // );

    // // 마커생성
    // const marker = new kakao.maps.Marker({
    //   position: markerPosition,
    // });
    // marker.setMap(kakaoMap);
  }, []);

  return (
    <div
      id="MyMap"
      style={{
        width: '500px',
        height: '500px',
      }}
    ></div>
  );
};

export default MapContainer;
