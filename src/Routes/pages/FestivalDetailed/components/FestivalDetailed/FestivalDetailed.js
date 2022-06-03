import * as React from 'react';
import './FestivalDetailed.css';
import FestivalMap from '../FestivalMap';
import { FooterLayout } from '../../../../../Components';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import MouseIcon from '@mui/icons-material/Mouse';

const FestivalDetailed = () => {
  const location = useLocation();
  const data = location.state.festival;
  const { LAT, LNG } = data;
  console.log(data);
  console.log(location);

  // 상세페이지 이동 시 스크롤이 맨 위로 위치하지 않는 문제
  // 아래 코드로 해결!
  useEffect(() => {
    console.log('in');
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="container">
        <div className="festival_detailed_main">
          <img
            src="https://bto.or.kr/attach/IMAGE/PopupMgr/PopupZoneUpload/2022/1/bddH6YtFbRc8xlSc.PNG"
            style={{ width: '100%', height: '100%' }}
            alt="main-img"
          />
        </div>
        <div className="detailed_body">
          <div className="info_container">
            <div className="sub_image_container">
              <img src={`${data.MAIN_IMG_THUMB}`} alt="thumb" />
            </div>
            <div style={{ marginLeft: '60px' }}>
              <div>
                <h1>{data.PLACE}</h1>
              </div>
              <div>
                <p>{data.SUBTITLE}</p>
              </div>
              <div style={{ maxWidth: '500px' }}>
                <p
                  style={{
                    display: '-webkit-box',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    WebkitBoxOrient: 'vertical',
                    WebkitLineClamp: '10',
                  }}
                >
                  {data.ITEMCNTNTS}
                </p>
              </div>
            </div>
          </div>
          <div className="sub_info_container">
            <ul>
              <li>축제기간 / {data.USAGE_DAY_WEEK_AND_TIME}</li>
            </ul>
          </div>
          <div className="footer_container">
            <div className="find_way_container">
              <FestivalMap Lat={LAT} Lng={LNG} />
            </div>
            <div className="find_way_items">
              <div className="icon_box">
                <div className="icon_item">
                  <LocationOnIcon fontSize="large" sx={{ color: '#0050a0' }} />
                </div>
                <div>{data.GUGUN_NM}</div>
              </div>
              <div className="icon_box">
                <div className="icon_item">
                  <AccessibilityNewIcon
                    fontSize="large"
                    sx={{ color: '#0593d2' }}
                  />
                </div>
                <div>
                  {data.MIDDLE_SIZE_RM1
                    ? data.MIDDLE_SIZE_RM1
                    : 'No information'}
                </div>
              </div>
              <div className="icon_box">
                <div className="icon_item">
                  <MouseIcon fontSize="large" sx={{ color: '#0593d2' }} />
                </div>
                <div>
                  {data.HOMEPAGE_URL ? (
                    <a href={`${data.HOMEPAGE_URL}`} style={{ color: '#333' }}>
                      {data.HOMEPAGE_URL}
                    </a>
                  ) : (
                    'No information'
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterLayout />
    </>
  );
};

export default React.memo(FestivalDetailed);
