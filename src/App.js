import './App.css';
import { useEffect } from 'react';
import axios from 'axios';

function App() {
  useEffect(() => {
    const SERVICE_KEY =
      '5zDIIIvDyVrv6kqL13%2FHyo1HHfozlGEHg4BogpO6oC2e9oySRLTCQfUAVzsY7RKUJD1qP1t4iNvE9FTviGHwHA%3D%3D';
    const url = `/getFestivalKr?serviceKey=${SERVICE_KEY}&pageNo=1&numOfRows=10&resultType=json`;
    axios
      .get('/api' + url)
      .then((res) => console.log(res.data.getFestivalKr.item));
  }, []);
  return <div></div>;
}

export default App;
