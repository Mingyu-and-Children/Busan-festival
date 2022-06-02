import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import AutoSlide from '../AutoSlide';
import MapContainer from '../MapContainer';

const styles = (theme) => ({
  root: {
    background: '#eeeeee',
    marginTop: '14vh',
  },
  paper: {
    textAlign: 'center',
    height: '43vh',
  },
});

class GridData extends Component {
  render() {
    const { classes } = this.props;
    return (
      // <Grid container spacing={3} sx={{ p: 5 }}>
      <div className={classes.root}>
        <Grid container>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <AutoSlide />
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.paper}></Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.paper}>
              <MapContainer />
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}
export default withStyles(styles)(GridData);
