import { useState, useEffect } from 'react';
import { getFestivalData } from '../api';

const useFestival = () => {
  const festivals = getFestivalData();
  const [festivalData, setFestivalData] = useState(festivals);

  useEffect(() => {
    setFestivalData(festivals);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return festivalData;
};

export default useFestival;
