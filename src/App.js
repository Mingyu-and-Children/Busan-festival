import axios from 'axios';
import { useEffect } from 'react';
import RootRoute from './Routes';

function App() {
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          'http://apis.data.go.kr/6260000/FestivalService/getFestivalKr?ServiceKey=5zDIIIvDyVrv6kqL13%2FHyo1HHfozlGEHg4BogpO6oC2e9oySRLTCQfUAVzsY7RKUJD1qP1t4iNvE9FTviGHwHA%3D%3D&pageNo=1&numOfRows=100&resultType=json'
        );
        console.log(response);
        const data = JSON.stringify(response);
        const dataJson = JSON.parse(data);
        console.log(dataJson.data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);
  return (
    <div>
      <RootRoute />
    </div>
  );
}

export default App;
