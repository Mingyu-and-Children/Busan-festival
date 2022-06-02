import * as React from 'react';
import './FestivalDetailed.css';
import useFestival from '../../../../../Hooks/useFestival';
import { useParams } from 'react-router-dom';
// import FestivalMap from '../FestivalMap';
import { FooterLayout } from '../../../../../Components';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const FestivalDetailed = () => {
  const festivals = useFestival();
  const params = useParams();
  const id = params.festivalId;
  const location = useLocation();
  // let temp = {};
  // const [temp, setTemp] = useState({});

  // useEffect(() => {
  //   setTemp(festivals);
  // }, []);

  // console.log(temp);

  // 무한 랜더링 발생....
  // festivals.map((festival) => {
  //   if (id == festival.UC_SEQ) {
  //     temp = festival;
  //     return temp;
  //   }
  //   console.log(temp);
  // });
  // console.log(location);
  const data = location.state.festival;
  console.log(data);

  return (
    // <>
    //   <div className="main">
    //     <img src="https://bto.or.kr/attach/IMAGE/UserMenu/SubVisauImg/2019/12/djc4nutiLyNrsbDv.JPG"></img>
    //   </div>
    //   <div className="detailed_body">
    //     <div className="info_container">
    //       <div className="sub_image_container">
    //         <img src={`${temp.MAIN_IMG_THUMB}`}></img>
    //       </div>
    //       <div style={{ marginLeft: '60px' }}>
    //         <div>
    //           <h1>{temp.PLACE}</h1>
    //         </div>
    //         <div>
    //           <p>{temp.SUBTITLE}</p>
    //         </div>
    //         <div style={{ maxWidth: '500px' }}>
    //           <p
    //             style={{
    //               display: '-webkit-box',
    //               overflow: 'hidden',
    //               textOverflow: 'ellipsis',
    //               WebkitBoxOrient: 'vertical',
    //               WebkitLineClamp: '10',
    //             }}
    //           >
    //             {temp.ITEMCNTNTS}
    //           </p>
    //         </div>
    //       </div>
    //     </div>
    //     <div className="sub_info_container">
    //       <ul>
    //         <li>축제기간 / {temp.USAGE_DAY_WEEK_AND_TIME}</li>
    //       </ul>
    //     </div>
    //     <div className="footer_container">
    //       <div className="find_way_container">{/* <FestivalMap /> */}</div>
    //       <div className="find_way_items">장소</div>
    //     </div>
    //   </div>
    //   <FooterLayout />
    // </>
    <></>
  );
};

export default React.memo(FestivalDetailed);
