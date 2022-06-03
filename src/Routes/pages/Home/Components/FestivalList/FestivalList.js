import React from 'react';
import useFestival from '../../../../../Hooks/useFestival';
import './FestivalList.css';

const FestivalList = () => {
  const festivals = useFestival();
  return (
    <div className="container-festivalList">
      <h1>
        <b>부산의 축제 목록</b>
        <br />
        <hr />
      </h1>
      <div className="festival-item">
        {festivals.map((festival) => (
          <p key={festival.UC_SEQ}>{festival.TITLE}</p>
        ))}
      </div>
    </div>
  );
};

export default FestivalList;

// const FestivalList = () => {
//   return <div></div>;
// };
// export default FestivalList;
