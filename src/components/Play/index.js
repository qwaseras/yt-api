import React, { useState } from 'react';
import './index.css'
import {
  Container,
  Grid,
  TextField,
  Button,
  Typography
} from '@material-ui/core';
export default () => {
  const [url, setUrl] = useState('')
  const onTextFieldChange = (event) => {
    const newValue = event.target.value
    setUrl(newValue)
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
          <Typography  variant="h4">
            Enter the YouTube video URL
        </Typography>
        </Grid>
        <Grid container item justify="center">
          <TextField
            value={url}
            id="search-field"
            label="Enter the url..."
            variant="outlined"
            onChange={onTextFieldChange}
          />
          <Button id="search-btn" variant="contained" color="primary" >Search</Button>
        </Grid>
        <Grid container item justify="center" >
          ...
        </Grid>
      </Grid>
    </Container >
  );
}

