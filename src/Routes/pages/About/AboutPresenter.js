import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import { amber, blue, blueGrey, brown } from '@mui/material/colors';

import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import styled from 'styled-components';
import { FooterLayout } from '../../../Components';
import busanImage from '../../../asset/busanImage.jpg';

const BoxCotainer = styled.div`
  /* White */

  background: #ffffff;
  /* Elevation / 24 */
  box-shadow: 0px 11px 15px -7px rgba(0, 0, 0, 0.2),
    0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 9px 46px 8px rgba(0, 0, 0, 0.12);
  border-radius: 4px;
`;

const TextContainer = styled.div`
  height: 246px;

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  /* or 150% */

  letter-spacing: 0.15px;

  /* Text color / Light Mode / Primary */

  color: rgba(0, 0, 0, 0.87);

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;
  padding: 10px;
`;

const BorderStyle = styled.div`
  /* divider */
  height: 1px;

  /* Divider */

  background: #e0e0e0;

  /* Inside auto layout */

  flex: none;
  order: 3;
  flex-grow: 0;
`;

export default function AboutPresenter() {
  return (
    <>
      <React.Fragment>
        <CssBaseline />

        <div
          style={{
            width: '95vw',
            height: '70vh',
            margin: 'auto',
            backgroundColor: '#eee',
            marginBottom: '40px',
          }}
        >
          <img
            srcSet={busanImage}
            alt="error"
            style={{ width: '100%', height: '100%' }}
          />
        </div>

        <Container
          fixed
          sx={{
            display: 'flex',
            justifyContent: 'space-around',
            marginTop: '100px',
            marginBottom: '100px',
            width: '100%',
          }}
        >
          <Box
            sx={{
              bgcolor: '#eee',
              width: '300px',
              height: '300px',
              margin: '10px',
            }}
          >
            <BoxCotainer>
              <div style={{ padding: '10px' }}>
                <Avatar sx={{ bgcolor: amber[500] }}>MG</Avatar>
              </div>
              <BorderStyle />
              <TextContainer>
                <p>1. 다들 너무 고생하셨어요~</p>
              </TextContainer>
            </BoxCotainer>
          </Box>
          <Box
            sx={{
              bgcolor: '#eee',
              width: '300px',
              height: '300px',
              margin: '10px',
            }}
          >
            <BoxCotainer>
              <div style={{ padding: '10px' }}>
                <Avatar sx={{ bgcolor: blue[500] }}>HJ</Avatar>
              </div>
              <BorderStyle />
              <TextContainer>
                <p>
                  1. 페스티벌 상세 페이지 내에서 props를 받아오지 못하는 문제 :
                  페스티벌 페이지 Link 라우터 내에 state 전달, 자식 컴포넌트에서
                  location 객체내 state를 받아오는 것으로 해결 <br /> <br />
                  2. mui 모듈 : 모듈 사용 하기 전 패키지 미설치 문제로 뜨는 에러
                  패키지 설치로 해결, 속성 등은 도큐먼트 참고
                </p>
              </TextContainer>
            </BoxCotainer>
          </Box>
          <Box
            sx={{
              bgcolor: '#eee',
              width: '300px',
              height: '300px',
              margin: '10px',
            }}
          >
            <BoxCotainer>
              <div style={{ padding: '10px' }}>
                <Avatar sx={{ bgcolor: blueGrey[500] }}>UJ</Avatar>
              </div>
              <BorderStyle />
              <TextContainer>
                <p>
                  1. 카카오맵 api : 축제 별로 maker를 표시, 지도가 줌아웃 될 때
                  cluster를 생성을 하는 과정에서 api활용 <br />
                  2. 피그마 UI 제작
                </p>
              </TextContainer>
            </BoxCotainer>
          </Box>
          <Box
            sx={{
              bgcolor: '#eee',
              width: '300px',
              height: '300px',
              margin: '10px',
            }}
          >
            <BoxCotainer>
              <div style={{ padding: '10px' }}>
                <Avatar sx={{ bgcolor: brown[500] }}>HC</Avatar>
              </div>
              <BorderStyle />
              <TextContainer>
                <p>
                  1. 부산 축제 공공데이터 api CORS 에러 : 교차브라우저 제한으로
                  인한 에러로 http-proxy-middleware 설치 후 setupProxy.js 파일
                  생성
                  <br />
                  <br />
                  2. 헤더, 푸터 디자인 : 페이지 스크롤 생기면 헤더 고정(fixed)
                </p>
              </TextContainer>
            </BoxCotainer>
          </Box>
        </Container>
        <FooterLayout />
      </React.Fragment>
    </>
  );
}
