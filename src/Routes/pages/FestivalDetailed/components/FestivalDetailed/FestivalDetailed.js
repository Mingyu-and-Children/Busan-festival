import * as React from 'react';
import './FestivalDetailed.css';
import useFestival from '../../../../../Hooks/useFestival';
import { useParams } from 'react-router-dom';
import FestivalMap from '../FestivalMap';
import { MapContainer } from '../../../Home/Components';

const FestivalDetailed = () => {
  const festivals = useFestival();
  const params = useParams();
  const id = params.festivalId;
  let temp = {};

  // console.log(festivals);
  // console.log('id: ', id);
  festivals.map((festival) => {
    // console.log(festival.UC_SEQ);
    if (id == festival.UC_SEQ) {
      temp = festival;
      return;
    } else {
      return;
    }
  });
  console.log(temp);

  return (
    <>
      <div className="main">
        <img src="https://bto.or.kr/attach/IMAGE/UserMenu/SubVisauImg/2019/12/djc4nutiLyNrsbDv.JPG"></img>
      </div>
      <div className="detailed_body">
        <div className="info_container">
          <div className="sub_image_container">
            <img src={`${temp.MAIN_IMG_THUMB}`}></img>
          </div>
          <div style={{ marginLeft: '60px' }}>
            <div>
              <h1>{temp.PLACE}</h1>
            </div>
            <div>
              <p>{temp.SUBTITLE}</p>
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
                {temp.ITEMCNTNTS}
              </p>
            </div>
          </div>
        </div>
        <div className="sub_info_container">
          <ul>
            <li>축제기간 / {temp.USAGE_DAY_WEEK_AND_TIME}</li>
          </ul>
        </div>
        <div className="footer_container">
          <div className="find_way_container">
            <FestivalMap Lat={temp.LAT} Lng={temp.LNG} />
          </div>
          <div className="find_way_items">장소</div>
        </div>
      </div>
      ;
    </>
  );
};

export default FestivalDetailed;
