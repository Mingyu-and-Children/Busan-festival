import React from 'react';
import { FestivalCard } from './components';

const FestivalPresenter = ({ festivalData }) => {
  console.log(festivalData);
  return (
    <>
      <FestivalCard />
    </>
  );
};

export default FestivalPresenter;
