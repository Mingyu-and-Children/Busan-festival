import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import AutoSlide from '../AutoSlide';
import MapContainer from '../MapContainer';
import { FooterLayout } from '../../../../../Components';
import FestivalList from '../FestivalList';

const styles = (theme) => ({
  root: {
    margin: '15vh 7vw 0 7vw',
  },
  paper: {
    height: '42.85vh',
  },
});

class GridData extends Component {
  render() {
    const { classes } = this.props;
    return (
      <>
        <div className={classes.root}>
          <Grid container>
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                <AutoSlide />
              </Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper className={classes.paper}>
                <FestivalList />
              </Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper className={classes.paper}>
                <MapContainer />
              </Paper>
            </Grid>
          </Grid>
        </div>
        <FooterLayout />
      </>
    );
  }
}
export default withStyles(styles)(GridData);
