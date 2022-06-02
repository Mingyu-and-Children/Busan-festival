import React from 'react';
import FestivalDetailedPresenter from './FestivalDetailedPresenter';
import { getFestivalData } from '../../../api';

const FestivalDetailedContainer = () => {
  const festivals = getFestivalData();

  return <FestivalDetailedPresenter festivals={festivals} />;
};

export default FestivalDetailedContainer;
