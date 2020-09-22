import React, { useState } from 'react';

import {
  Container,
  Grid,
  Typography
} from '@material-ui/core';
import { getEmbedVideoUrl } from '../helpers/urls'
import { youtubeUrlParser } from '../helpers/parsers'

import UrlInput from './components/UrlInput'
import Video from '../VideoFrame'

export default () => {
  const [enteredUrl, setEnteredUrl] = useState('')
  const [parsedUrl, setParsedUrl] = useState('')

  const onUrlChange = (event) => {
    const newValue = event.target.value
    setEnteredUrl(newValue)
  }
  const onParse = async () => {
    if (!enteredUrl) return alert('Please enter an URL')
    const id = youtubeUrlParser(enteredUrl)
    if (!id) return alert('Enter a valid YouTube URL')
    const newUrl = getEmbedVideoUrl(id)
    if (!newUrl) return
    setParsedUrl(newUrl)
  }

  return (
    <Container className="container">
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
          <UrlInput onUrlChange={onUrlChange} value={enteredUrl} onParse={onParse} />
        </Grid>
        <Grid container item justify="center" >
          <Video url={parsedUrl} />
        </Grid>
      </Grid>
    </Container >
  );
}

