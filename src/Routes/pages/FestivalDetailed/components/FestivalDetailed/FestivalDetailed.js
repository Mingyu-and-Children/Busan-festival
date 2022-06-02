import * as React from 'react';
import './FestivalDetailed.css';
import useFestival from '../../../../../Hooks/useFestival';
import { useParams } from 'react-router-dom';
import FestivalMap from '../FestivalMap';
import { FooterLayout } from '../../../../../Components';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const FestivalDetailed = () => {
  const festivals = useFestival();
  const params = useParams();
  const location = useLocation();
  // let temp = {};
  // const [temp, setTemp] = useState({});

  // useEffect(() => {
  //   setTemp(festivals);
  // }, []);

  // console.log(temp);

  const data = location.state.festival;
  const { LAT, LNG } = data;

  return (
    <>
      <div className="festival_detailed_main">
        <img
          src="https://bto.or.kr/attach/IMAGE/UserMenu/SubVisauImg/2019/12/djc4nutiLyNrsbDv.JPG"
          style={{ width: '100%', height: '100%' }}
        />
      </div>
      <div className="detailed_body">
        <div className="info_container">
          <div className="sub_image_container">
            <img src={`${data.MAIN_IMG_THUMB}`}></img>
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
          <div className="find_way_items">장소</div>
        </div>
      </div>
      <FooterLayout />
    </>
  );
};

export default React.memo(FestivalDetailed);
