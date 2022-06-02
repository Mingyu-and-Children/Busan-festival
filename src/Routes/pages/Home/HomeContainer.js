import React from 'react';
import HomePresetner from './HomePresenter';
import useFestival from '../../../Hooks/useFestival';

const HomeContainer = () => {
  const festivalData = useFestival();

  return (
    <div
      style={{
        marginLeft: '300px',
        width: '900px',
        marginTop: '150px',
        border: '3px solid green',
      }}
    >
      {festivalData.map((festival) => (
        <HomePresetner key={festival.UC_SEQ} festival={festival} />
      ))}
    </div>
  );
};

export default HomeContainer;
