import React, { useEffect, useState, useRef } from 'react';

const { kakao } = window;

const MapContainer = () => {
  const [myMap, setMap] = useState(null);
  const mapRef = useRef();
  const [positions, setPositions] = useState([]);

  useEffect(() => {
    const container = document.getElementById('myMap');
    const options = {
      center: new kakao.maps.LatLng(35.17281793748335, 129.13076811451697),
      level: 3,
    };
    const kakaoMap = new kakao.maps.Map(container, options);

    useEffect(() => {
      setPositions(clusterPositionsData.positions);
    }, []);

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

    // 인포윈도우를 생성
    const infowindow = new kakao.maps.InfoWindow({
      position: iwPosition,
      content: iwContent,
    });

    // 마커 위에 인포윈도우를 표시
    infowindow.open(kakaoMap, marker);
  }, []);

  const onClusterclick = (_target, cluster) => {
    const map = mapRef.current;
    // 현재 지도 레벨에서 1레벨 확대한 레벨
    const level = map.getLevel() - 1;

    // 지도를 클릭된 클러스터의 마커의 위치를 기준으로 확대합니다
    map.setLevel(level, { anchor: cluster.getCenter() });
  };

  return (
    <>
      <div
        id="myMap"
        style={{
          width: '500px',
          height: '500px',
        }}
      ></div>
      <Map // 지도를 표시할 Container
        center={{
          // 지도의 중심좌표
          lat: 36.2683,
          lng: 127.6358,
        }}
        style={{
          // 지도의 크기
          width: '100%',
          height: '450px',
        }}
        level={14} // 지도의 확대 레벨
        ref={mapRef}
      >
        <MarkerClusterer
          averageCenter={true} // 클러스터에 포함된 마커들의 평균 위치를 클러스터 마커 위치로 설정
          minLevel={10} // 클러스터 할 최소 지도 레벨
          disableClickZoom={true} // 클러스터 마커를 클릭했을 때 지도가 확대되지 않도록 설정한다
          // 마커 클러스터러에 클릭이벤트를 등록합니다
          // 마커 클러스터러를 생성할 때 disableClickZoom을 true로 설정하지 않은 경우
          // 이벤트 헨들러로 cluster 객체가 넘어오지 않을 수도 있습니다
          onClusterclick={onClusterclick}
        >
          {positions.map((pos) => (
            <MapMarker
              key={`${pos.lat}-${pos.lng}`}
              position={{
                lat: pos.lat,
                lng: pos.lng,
              }}
            />
          ))}
        </MarkerClusterer>
      </Map>
    </>
  );
};

export default MapContainer;
