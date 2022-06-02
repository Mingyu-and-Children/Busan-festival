import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import './FestivalDetailed.css';

const FestivalDetailed = () => {
  const [value, setValue] = React.useState('one');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Box sx={{ width: '100%' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          textColor="secondary"
          indicatorColor="secondary"
          aria-label="secondary tabs example"
          centered
        >
          <Tab value="one" label="부산국제영화제" />
          <Tab value="two" label="다대포낙조분수" />
          <Tab value="three" label="광안리불꽃축제" />
          <Tab value="four" label="광안리불꽃축제" />
          <Tab value="five" label="광안리불꽃축제" />
        </Tabs>
      </Box>

      {/* <React.Fragment>
        <CssBaseline />
        <Container fixed>
          <Box sx={{ bgcolor: '#cfe8fc', width: '100%', height: '200px' }} />
        </Container>
      </React.Fragment> */}
      <MainImageContainer className="main_image_container" />
      <InfoContainer className="info_container">
        <SubImageContainer className="sub_image_container"></SubImageContainer>
        <div style={{ marginLeft: '20px' }}>
          <div>
            <h1>태종대유원지</h1>
          </div>
          <div>
            <p>다누비와 함께 떠나는 천혜의 절경 태종대 투어</p>
          </div>
          <div style={{ maxWidth: '500px' }}>
            <p>
              태종대 입구에서 탈 수 있는 다누비 열차는 태종대 전체(태종대
              전망대-영도등대-태종사)를 한 바퀴 순환해 중요 스폿을 안내합니다.
              정류장마다 20분에 한 대씩 다음 열차가 도착하니 감상하고 싶은
              구간에서 내려 편하게 감상하면 됩니다. 1976년 설립되어 매년 여름
              수국축제로 큰 관심을 받는 태종사의 대웅전도 방문해보며 여유를
              누려보세요.
            </p>
          </div>
        </div>
      </InfoContainer>
    </>
  );
};

export default FestivalDetailed;
