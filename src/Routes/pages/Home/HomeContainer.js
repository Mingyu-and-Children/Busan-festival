import React from 'react';
import HomePresetner from './HomePresenter';
import useFestival from '../../../Hooks/useFestival';

const HomeContainer = () => {
  const festivalData = useFestival();

  return (
    <div>
      {festivalData.map((festival) => (
        <HomePresetner key={festival.UC_SEQ} festival={festival} />
      ))}
    </div>
  );
};

export default HomeContainer;
