import * as React from 'react';
import './FestivalDetailed.css';

const FestivalDetailed = () => {
  return (
    <>
      <div className="detailed_body">
        <div className="main_image_container">메인이미지</div>
        <div className="info_container">
          <div className="sub_image_container">서브이미지</div>
          <div style={{ marginLeft: '60px' }}>
            <div>
              <h1>태종대유원지</h1>
            </div>
            <div>
              <p>다누비와 함께 떠나는 천혜의 절경 태종대 투어</p>
            </div>
            <div style={{ maxWidth: '500px' }}>
              <p>
                태종대 입구에서 탈 수 있는 다누비 열차는 태종대 전체(태종대
                전망대-영도등대-태종사)를 한 바퀴 순환해 중요 스폿을 안내합니다.
                정류장마다 20분에 한 대씩 다음 열차가 도착하니 감상하고 싶은
                구간에서 내려 편하게 감상하면 됩니다. 1976년 설립되어 매년 여름
                수국축제로 큰 관심을 받는 태종사의 대웅전도 방문해보며 여유를
                누려보세요.
              </p>
            </div>
          </div>
        </div>
        <div className="sub_info_container"></div>
        <div className="footer_container">
          <div className="find_way_container">찾아오는길</div>
          <div className="find_way_items">장소</div>
        </div>
      </div>
    </>
  );
};

export default FestivalDetailed;
