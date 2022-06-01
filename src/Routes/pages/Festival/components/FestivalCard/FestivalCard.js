import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const FestivalCard = ({ festivals }) => {
  console.log(festivals);
  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        alignItems: 'center',
      }}
    >
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
        <Card
          key={festival.UC_SEQ}
          sx={{ maxWidth: 345, maxHeight: 450, margin: '10px' }}
        >
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={festival.MAIN_IMG_THUMB}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {festival.SUBTITLE}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {festival.ITEMCNTNTS}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </div>
  );
};

export default FestivalCard;
