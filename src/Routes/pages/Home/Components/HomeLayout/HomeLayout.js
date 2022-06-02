import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const styles = (theme) => ({
  root: {
    padding: theme.spacing(3),
    background: '#eeeeee',
  },
  paper: {
    padding: theme.spacing(3),
    textAlign: 'center',
    height: '45vh',
  },
});
class GridData extends Component {
  render() {
    const { classes } = this.props;
    return (
      //   <div className={classes.root}>
      <Grid container spacing={3} sx={{ p: 5 }}>
        {/* <Grid item xs={12} />
          <Grid item xs={12} />
          <Grid item xs={12} />
          <Grid item xs={12} />
          <Grid item xs={12} /> */}
        <Grid item xs={12}>
          <Paper className={classes.paper}></Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}></Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}></Paper>
        </Grid>
      </Grid>
      //   </div>
    );
  }
}
export default withStyles(styles)(GridData);
