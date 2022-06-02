import React from 'react';
import FestivalPresenter from './FestivalPresenter';
import useFestival from '../../../Hooks/useFestival';

const FestivalContainer = () => {
  const festivalData = useFestival();
  return (
    <div>
      <FestivalPresenter festivalData={festivalData} />
    </div>
  );
};

export default FestivalContainer;
