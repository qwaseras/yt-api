import React, { useState, useRef } from 'react';
import './index.css'
import {
  Container,
  Grid,
  TextField,
  Button,
  Typography
} from '@material-ui/core';
import {
  youtubeUrlParser,
} from '../helpers/parsers'

import {
  getEmbedYTUrlById
} from '../helpers/urls'

export default () => {
  const [enteredUrl, setEnteredUrl] = useState('')
  const [parsedUrl, setParsedUrl] = useState('')
  const playerRef = useRef()
  const onTextFieldChange = (event) => {
    const newValue = event.target.value
    setEnteredUrl(newValue)
  }
  const search = async () => {
    if (!enteredUrl) return alert('Please enter an URL')
    const id = youtubeUrlParser(enteredUrl)
    if (!id) return alert('Enter a valid YouTube URL')
    const newUrl = getEmbedYTUrlById(id)
    debugger
    setParsedUrl(newUrl)
  }
  return (
    <Container
      className="play-container"
    >
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
          <TextField
            value={enteredUrl}
            id="search-field"
            label="Enter the url..."
            variant="outlined"
            onChange={onTextFieldChange}
          />
          <Button
            id="search-btn"
            variant="contained"
            color="primary"
            onClick={search}
          >
            Search
          </Button>
        </Grid>
        <Grid container item justify="center" >
          <iframe id="yt-iframe" src={parsedUrl}
            frameBorder='0'
            allow='autoplay; encrypted-media'
            allowFullScreen
            title='video'
          />
        </Grid>
      </Grid>
    </Container >
  );
}

