import React from 'react';
import { FestivalCard } from './components';

const FestivalPresenter = ({ festivals }) => {
  return (
    <>
      <FestivalCard festivals={festivals} />
    </>
  );
};

export default FestivalPresenter;
