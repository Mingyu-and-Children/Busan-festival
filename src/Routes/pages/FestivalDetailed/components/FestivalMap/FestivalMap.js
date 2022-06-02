import React, { useEffect, useState } from 'react';

const { kakao } = window;

const FestivalMap = ({ festivals }) => {
  console.log(festivals);

  var mapContainer = document.getElementById('map'), // 지도를 표시할 div
    mapOption = {
      center: new kakao.maps.LatLng(37.5667, 126.97845), // 지도의 중심좌표
      level: 3, // 지도의 확대 레벨
      mapTypeId: kakao.maps.MapTypeId.ROADMAP, // 지도종류
    };
  // 지도를 생성한다
  var map = new kakao.maps.Map(mapContainer, mapOption);
  // 지도에 마커를 생성하고 표시한다
  var marker = new kakao.maps.Marker({
    position: new kakao.maps.LatLng(37.56682, 126.97865), // 마커의 좌표
    map: map, // 마커를 표시할 지도 객체
  });
  return <div id="map" style="width:100%;height:350px;"></div>;
};

export default FestivalMap;
