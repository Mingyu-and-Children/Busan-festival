import React from 'react';
import Carousel from 'react-material-ui-carousel';
import autoBind from 'auto-bind';
import './styles.css';

import { Card, CardMedia, Grid } from '@material-ui/core';

function Banner(props) {
  const totalItems = props.length ? props.length : 3;
  const mediaLength = totalItems + 1;

  let items = [];
  const content = <Grid item xs={12 / totalItems} key="content"></Grid>;

  for (let i = 0; i < mediaLength; i++) {
    const item = props.item.Items[i];

    const media = (
      <Grid item xs={9 / totalItems} key={item.Name}>
        <CardMedia
          className="Media"
          image={item.Image}
          title={item.Name}
        ></CardMedia>
      </Grid>
    );

    items.push(media);
  }

  return (
    <Card raised className="Banner">
      <Grid container className="BannerGrid">
        {items}
      </Grid>
    </Card>
  );
}

const items = [
  {
    Name: '축제의 바다 속으로',
    Image:
      'https://www.visitbusan.net/uploadImgs/files/cntnts/20191213191711585_ttiel',
    contentPosition: 'left',
    Items: [
      {
        Name: '축제의 바다 속으로',
        Image:
          'https://www.visitbusan.net/uploadImgs/files/cntnts/20191213191711585_ttiel',
      },
      {
        Name: '태종대에서 만난 오색찬란 수국의 매력',
        Image:
          'https://www.visitbusan.net/uploadImgs/files/cntnts/20191222160520749_ttiel',
      },
      {
        Name: '문화로 노닐다 금정산성축제',
        Image:
          'https://www.visitbusan.net/uploadImgs/files/cntnts/20191227115551778_ttiel',
      },
      {
        Name: '기장 봄바다의 맛 기장미역다시마축제',
        Image:
          'https://www.visitbusan.net/uploadImgs/files/cntnts/20191231114635471_ttiel',
      },
    ],
  },
  {
    Name: 'Home Appliances',
    Caption: 'Say no to manual home labour!',
    contentPosition: 'middle',
    Items: [
      {
        Name: '구포나루의 추억과 낭만 낙동강구포나루축제',
        Image:
          'https://www.visitbusan.net/uploadImgs/files/cntnts/20191227120157384_ttiel',
      },
      {
        Name: '아름다운 부산 밤하늘의 하모니, 부산불꽃축제',
        Image:
          'https://www.visitbusan.net/uploadImgs/files/cntnts/20191230180157336_ttiel',
      },
      {
        Name: '오색찬란 연등터널 삼광사 연등축제',
        Image:
          'https://www.visitbusan.net/uploadImgs/files/cntnts/20191230190338310_ttiel',
      },
      {
        Name: '해운대 밤바다를 낭만으로 물들이는 해운대빛축제',
        Image:
          'https://www.visitbusan.net/uploadImgs/files/cntnts/20191231112440678_ttiel',
      },
    ],
  },
  {
    Name: 'Decoratives',
    Caption: 'Give style and color to your living room!',
    contentPosition: 'right',
    Items: [
      {
        Name: '골목 분위기 제대로 즐기는 부산원도심골목길축제',
        Image:
          'https://www.visitbusan.net/uploadImgs/files/cntnts/20191230190825680_ttiel',
      },
      {
        Name: '모래의 변신은 예술, 해운대모래축제를 가다',
        Image:
          'https://www.visitbusan.net/uploadImgs/files/cntnts/20191230191444996_ttiel',
      },
      {
        Name: '해양에 대한 모든 것, 부산항축제',
        Image:
          'https://www.visitbusan.net/uploadImgs/files/cntnts/20191230191940029_ttiel',
      },
      {
        Name: '다대포 바다를 물들이는 예술의 향기, 부산바다미술제',
        Image:
          'https://www.visitbusan.net/uploadImgs/files/cntnts/20191231095147364_ttiel',
      },
    ],
  },
];

class AutoSlide extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      autoPlay: true,
      animation: 'fade',
      timeout: 500,
      navButtonsAlwaysVisible: false,
      navButtonsAlwaysInvisible: false,
      cycleNavigation: true,
      indicators: false,
    };

    autoBind(this);
  }

  render() {
    return (
      <div style={{ color: '#494949', width: '100%' }}>
        <Carousel
          className="Example"
          autoPlay={this.state.autoPlay}
          indicators={this.state.indicators}
          animation={this.state.animation}
          timeout={this.state.timeout}
          cycleNavigation={this.state.cycleNavigation}
          navButtonsAlwaysVisible={this.state.navButtonsAlwaysVisible}
          navButtonsAlwaysInvisible={this.state.navButtonsAlwaysInvisible}
        >
          {items.map((item, index) => {
            return (
              <Banner
                item={item}
                key={index}
                contentPosition={item.contentPosition}
              />
            );
          })}
        </Carousel>
      </div>
    );
  }
}

export default AutoSlide;
