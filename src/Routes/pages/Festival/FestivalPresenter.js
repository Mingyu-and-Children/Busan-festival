import React from 'react';
import { FestivalCard, FestivalLayout } from './components';

const FestivalPresenter = ({ festivals }) => {
  return (
    <>
      <FestivalCard festivals={festivals} />
    </>
  );
};

export default FestivalPresenter;
