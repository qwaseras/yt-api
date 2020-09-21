import React from 'react'

import {
  Grid,
} from '@material-ui/core';
export default ({ url }) => {
  if (!url) {
    return <>
      <Grid id="iframe-placeholder" container item justify="center" alignItems="center" >
        <span>Nothing to show yet...</span>
      </Grid>
    </>
  }
  return <iframe id="iframe" src={url}
    frameBorder='0'
    allow='autoplay; encrypted-media'
    allowFullScreen
    title='video'
  />
}
