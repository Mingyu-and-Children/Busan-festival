import React from 'react';
import { FestivalCard, FestivalLayout } from './components';

const FestivalPresenter = ({ festivals }) => {
  return (
    <>
      <FestivalLayout>
        <FestivalCard festivals={festivals} />
      </FestivalLayout>
    </>
  );
};

export default FestivalPresenter;
