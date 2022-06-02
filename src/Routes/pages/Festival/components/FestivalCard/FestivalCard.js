import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import './FestivalCard.css';
import { Link } from 'react-router-dom';

const FestivalCard = ({ festivals }) => {
  console.log(festivals);
  return (
    <>
      <div className="main">
        <img
          src="https://bto.or.kr/attach/IMAGE/PopupMgr/PopupZoneUpload/2022/1/bddH6YtFbRc8xlSc.PNG"
          style={{ width: '100%', height: '100%' }}
        />
      </div>
      <div className="festival_list">
        <h2>축제 리스트 ({festivals.length}건)</h2>
      </div>
      <div className="festival_body">
        {/* {[0, 1, 2, 3].map((value) => (
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
      ))} */}
        {festivals.map((festival) => (
          <Link
            to={`${festival.UC_SEQ}`}
            style={{ textDecoration: 'none' }}
            key={festival.UC_SEQ}
          >
            <Card
              sx={{
                width: 300,
                height: 300,
                margin: '10px',
              }}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="217"
                  image={festival.MAIN_IMG_THUMB}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    sx={{
                      display: '-webkit-box',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      WebkitBoxOrient: 'vertical',
                      WebkitLineClamp: '1',
                      fontSize: '18px',
                    }}
                  >
                    {festival.TITLE}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {festival.GUGUN_NM}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Link>
        ))}
      </div>
    </>
  );
};

export default FestivalCard;
