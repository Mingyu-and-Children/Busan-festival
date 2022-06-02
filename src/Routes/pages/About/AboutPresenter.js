import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { amber, blue, blueGrey, brown } from '@mui/material/colors';

import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import styled from 'styled-components';
import PhotoContainer from './components/photoContainer';
import { FooterLayout } from '../../../Components';

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

        <PhotoContainer></PhotoContainer>
        <Stack direction="row" spacing={2} justifyContent="center">
          <Avatar sx={{ bgcolor: amber[500] }}>MG</Avatar>
          <Avatar sx={{ bgcolor: blue[500] }}>HJ</Avatar>
          <Avatar sx={{ bgcolor: blueGrey[500] }}>UJ</Avatar>
          <Avatar sx={{ bgcolor: brown[500] }}>HC</Avatar>
        </Stack>

        <Container
          fixed
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-around',
            marginTop: '100px',
            width: '100vw',
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
              <div style={{ padding: '10px' }}>Title</div>
              <BorderStyle />
              <TextContainer>
                <p>
                  Cras mattis consectetur purus sit amet fermentum. Cras justo
                  odio, dapibus ac facilisis in, egestas eget quam. Morbi leo
                  risus, porta ac consectetur ac, vestibulum at eros.
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
              <div style={{ padding: '10px' }}>Title</div>
              <BorderStyle />
              <TextContainer>
                <p>
                  Cras mattis consectetur purus sit amet fermentum. Cras justo
                  odio, dapibus ac facilisis in, egestas eget quam. Morbi leo
                  risus, porta ac consectetur ac, vestibulum at eros.
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
              <div style={{ padding: '10px' }}>Title</div>
              <BorderStyle />
              <TextContainer>
                <p>
                  Cras mattis consectetur purus sit amet fermentum. Cras justo
                  odio, dapibus ac facilisis in, egestas eget quam. Morbi leo
                  risus, porta ac consectetur ac, vestibulum at eros.
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
