import React from 'react'
import parse from 'html-react-parser'

import {
  Typography,
  Grid
} from '@material-ui/core';

export default ({ data }) => {
  if (!data) return <></>
  return <div className="result-card">
    < Grid
    direction="row"
    justify="space-between"
    spacing={3}
    container
  >
    <Grid item xs={12} sm={3}>
      <img className="result-image" src={data.thumbnails.medium.url} alt={data.title} />
    </Grid>
    <Grid item xs={12} sm={9}  >
      <Grid
        direction="column"
        justify="flex-start"
        alignItems="flex-start"
        spacing={1}
        container
      >
        <Typography variant="h6" color="textPrimary" >
          {parse(data.title)}
        </Typography>
        <p >
          {parse(data.description)}
        </p>
      </Grid>
    </Grid>
  </Grid >
    </div>
}
