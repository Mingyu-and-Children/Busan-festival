import React from 'react';
import { HomeLayout } from './Components';
import useFestival from '../../../Hooks/useFestival';

const HomePresenter = () => {
  const festivals = useFestival();
  console.log(festivals);
  return (
    <>
      <HomeLayout festivals={festivals} />
    </>
  );
};

export default HomePresenter;
