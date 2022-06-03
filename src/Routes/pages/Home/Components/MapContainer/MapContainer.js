import React, { useEffect } from 'react';
import { getFestivalData } from '../../../../../api';

const { kakao } = window;

const MapContainer = () => {
  const festivals = getFestivalData();

  useEffect(() => {
    const container = document.getElementById('map');
    const options = {
      center: new kakao.maps.LatLng(35.19494041207048, 129.0044483531791),
      level: 9,
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

    for (let i = 0; i < festivals.length; i++) {
      let marker = new kakao.maps.Marker({
        position: new kakao.maps.LatLng(festivals[i].LAT, festivals[i].LNG),
        map: map,
      });
      //   console.log(marker);
      markers.push(marker);
    }

    //클러스터러에 마커들을 추가
    clusterer.addMarkers(markers);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      id="map"
      style={{
        width: '100%',
        height: '100%',
      }}
    ></div>
  );
};

export default MapContainer;
