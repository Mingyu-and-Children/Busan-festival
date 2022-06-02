import React from 'react';

const FestivalList = ({ TITLE }) => {
  console.log(TITLE);

  return (
    <>
      <div style={{ textAlign: 'center' }}>
        <h1>
          <b>{TITLE}</b>
          <br />
          -----------------------------------------------------------
        </h1>
        <div></div>
      </div>
    </>
  );
};

export default FestivalList;
