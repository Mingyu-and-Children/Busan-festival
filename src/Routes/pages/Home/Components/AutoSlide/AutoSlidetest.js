// import * as React from 'react';
// import Grid from '@mui/material/Grid';
// import { Paper, Button } from '@mui/material';
// import Carousel from 'react-material-ui-carousel';

// const AutoSlide = () => {
//   var items = [
//     {
//       name: 'Random Name #1',
//       description: 'Probably the most random thing you have ever seen!',
//     },
//     {
//       name: 'Random Name #2',
//       description: 'Hello World!',
//     },
//   ];

//   const Item = (props) => {
//     return (
//       <Paper>
//         <h2>{props.item.name}</h2>
//         <p>{props.item.description}</p>
//         <Button className="CheckButton">Check it out!</Button>{' '}
//       </Paper>
//     );
//   };

//   return (
//     <Grid sx={{ flexGrow: 1 }} container spacing={0}>
//       <Grid>
//         <Grid sx={{ display: 'flex' }}>
//           <Paper
//             sx={{
//               height: '50vh',
//               width: '100vw',
//             }}
//           >
//             <Carousel

//             >
//               {/* {items.map((item, i) => (
//                 <Item key={i} item={item} />
//               ))} */}
//             </Carousel>
//           </Paper>
//           {/* <Paper
//             sx={{
//               height: '50vh',
//               width: '27.5vw',
//             }}
//           ></Paper>
//           <Paper
//             sx={{
//               height: '50vh',
//               width: '27.5vw',
//             }}
//           ></Paper> */}
//         </Grid>
//         <Grid style={{ display: 'flex' }}>
//           {[0, 1].map((value) => (
//             <Grid key={value} item>
//               <Paper
//                 sx={{
//                   height: '50vh',
//                   width: '41vw',
//                   backgroundColor: (theme) =>
//                     theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//                 }}
//               />
//             </Grid>
//           ))}
//         </Grid>
//       </Grid>
//     </Grid>
//   );
// };

// export default AutoSlide;