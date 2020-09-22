import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Grid
} from '@material-ui/core';
import { Link } from 'react-router-dom';
export default () => {
  return (
    <AppBar position="relative" className="app-bar">
      <Toolbar>
        <Grid
          container
          direction="row"
          justify="flex-start"
          alignItems="center"
          spacing={5}
          className="header-grid"
        >
          <Grid item>
            <Typography variant="h6">
              YouTube API
             </Typography>
          </Grid>
          <Grid item >
            <Link className="nav-link" to="/">play video by link</Link>
          </Grid>
          <Grid item>
            <Link className="nav-link" to="/search">search video</Link>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}

