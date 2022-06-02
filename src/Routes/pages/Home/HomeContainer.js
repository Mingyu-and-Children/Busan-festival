import React from 'react';
import HomePresetner from './HomePresenter';
import useFestival from '../../../Hooks/useFestival';

const HomeContainer = () => {
  const festivalData = useFestival();
  console.log('bbb');

  return (
    <div>
      <HomePresetner festivalData={festivalData} />
    </div>
  );
};

export default HomeContainer;
