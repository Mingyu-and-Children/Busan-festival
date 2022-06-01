import React from 'react';
import FestivalPresenter from './FestivalPresenter';
import { getFestivalData } from '../../../api';
import { useState } from 'react';
import { useEffect } from 'react';

const FestivalContainer = () => {
  const festivals = getFestivalData();

  return <FestivalPresenter festivals={festivals} />;
};

export default FestivalContainer;
