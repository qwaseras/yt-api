import React from 'react';
import {
  Toolbar,
  Grid
} from '@material-ui/core';
export default () => {
  return (
    <Toolbar className="footer">
      <Grid
        container
        direction="row"
        justify="flex-end"
        alignItems="center"
      >
        ©<a
          id="cr-link"
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/qwaseras"
        >
          Roman Zhukouski
          </a>
      </Grid>
    </Toolbar>
  );
}
