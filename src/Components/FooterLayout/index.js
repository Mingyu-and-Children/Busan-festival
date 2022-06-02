import React from 'react';
import './FooterLayout.css';

const FooterLayout = () => {
  return (
    <div className="Footerdesign">
      <div className="teamName">민규 앤 칠드런 - Mingyu and Children</div>
      <br></br>
      <br></br>
      <div className="member">멤버 : 김민규, 박한주, 서의진, 신현채</div>
      <div className="leader">| 조장 : 김민규</div>
      <br></br>
      <div className="address">
        <a href="https://github.com/Mingyu-and-Children/Busan-festival">
          github : https://github.com/Mingyu-and-Children/Busan-festival
        </a>
      </div>
      <br></br>
    </div>
  );
};

export default FooterLayout;
