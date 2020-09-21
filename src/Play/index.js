import React, { useState } from 'react';
import './index.css'

import {
  Container,
  Grid,
  Typography
} from '@material-ui/core';
import { getEmbedYTUrl } from '../helpers/urls'

import SearchBox from './components/SearchBox'
import Video from './components/VideoFrame'

export default () => {
  const [enteredUrl, setEnteredUrl] = useState('')
  const [parsedUrl, setParsedUrl] = useState('')

  const onUrlChange = (event) => {
    const newValue = event.target.value
    setEnteredUrl(newValue)
  }
  const onParse = async () => {
    if (!enteredUrl) return alert('Please enter an URL')
    const newUrl = getEmbedYTUrl(enteredUrl)
    if (!newUrl) return
    setParsedUrl(newUrl)
  }

  return (
    <Container className="play-container">
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        spacing={5}
      >
        <Grid container item justify="center">
          <Typography variant="h4">
            Enter the YouTube video URL
          </Typography>
        </Grid>
        <Grid container item justify="center">
          <SearchBox onUrlChange={onUrlChange} value={enteredUrl} onParse={onParse} />
        </Grid>
        <Grid container item justify="center" >
          <Video url={parsedUrl} />
        </Grid>
      </Grid>
    </Container >
  );
}

