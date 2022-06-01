// // import React from "react";

// // const FestivalPresenter = () => {
// //   return <div>Festival Page</div>;
// // };

// // export default FestivalPresenter;

// import * as React from 'react';
// import Tabs from '@mui/material/Tabs';
// import Tab from '@mui/material/Tab';
// import Box from '@mui/material/Box';
// import styled from 'styled-components';
// // import CssBaseline from '@mui/material/CssBaseline';
// // import Container from '@mui/material/Container';

// const MainImageContainer = styled.div`
//   width: 100vw;
//   height: 45vh;
//   background-color: #eee;
// `;

// const InfoContainer = styled.div`
//   width: 100vw;
//   height: 30vh;
//   margin-top: 20px;
//   display: flex;
//   justify-content: center;
// `;

// const SubImageContainer = styled.div`
//   width: 350px;
//   height: 350px;
//   background-color: #999;
// `;

// export default function FestivalPresenter() {
//   const [value, setValue] = React.useState('one');

//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };

//   return (
//     <>
//       <Box sx={{ width: '100%' }}>
//         <Tabs
//           value={value}
//           onChange={handleChange}
//           textColor="secondary"
//           indicatorColor="secondary"
//           aria-label="secondary tabs example"
//           centered
//         >
//           <Tab value="one" label="부산국제영화제" />
//           <Tab value="two" label="다대포낙조분수" />
//           <Tab value="three" label="광안리불꽃축제" />
//           <Tab value="four" label="광안리불꽃축제" />
//           <Tab value="five" label="광안리불꽃축제" />
//         </Tabs>
//       </Box>

//       {/* <React.Fragment>
//         <CssBaseline />
//         <Container fixed>
//           <Box sx={{ bgcolor: '#cfe8fc', width: '100%', height: '200px' }} />
//         </Container>
//       </React.Fragment> */}
//       <MainImageContainer />
//       <InfoContainer>
//         <SubImageContainer></SubImageContainer>
//         <div style={{ marginLeft: '20px' }}>
//           <div>
//             <h1>태종대유원지</h1>
//           </div>
//           <div>
//             <p>다누비와 함께 떠나는 천혜의 절경 태종대 투어</p>
//           </div>
//           <div style={{ maxWidth: '500px' }}>
//             <p>
//               태종대 입구에서 탈 수 있는 다누비 열차는 태종대 전체(태종대
//               전망대-영도등대-태종사)를 한 바퀴 순환해 중요 스폿을 안내합니다.
//               정류장마다 20분에 한 대씩 다음 열차가 도착하니 감상하고 싶은
//               구간에서 내려 편하게 감상하면 됩니다. 1976년 설립되어 매년 여름
//               수국축제로 큰 관심을 받는 태종사의 대웅전도 방문해보며 여유를
//               누려보세요.
//             </p>
//           </div>
//         </div>
//       </InfoContainer>
//     </>
//   );
// }

// export default FestivalPresenter;

import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function FestivalPresenter() {
  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
      }}
    >
      {[0, 1, 2, 3, 4, 5].map((value) => (
        <Card key={value} sx={{ maxWidth: 345, margin: '10px' }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image="/static/images/cards/contemplative-reptile.jpg"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Lizard
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </div>
  );
}
