import React, { useState } from 'react';
import axios from 'axios'
import {
  Container,
  Grid,
  Typography
} from '@material-ui/core';

import QueryInput from './components/QueryInput'
import SearchResults from './components/SearchResults'
import { YT_SEARCH_API_URL, GOOGLE_API_KEY } from '../helpers/config'
import sampleData from '../helpers/sample-data.json'

export default () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [searchResult, setSearchResult] = useState(sampleData)

  const onQueryChange = (event) => {
    const { value } = event.target
    setSearchQuery(value)
  }
  const search = async () => {
    if(!searchQuery) return
    const response = await axios.get(YT_SEARCH_API_URL, {
      params: {
        q: searchQuery,
        key: GOOGLE_API_KEY,
        part: 'snippet',
        type: 'video'
      }
    })
    setSearchResult(response.data)
  }
  const changePage = async (pageToken) => {
    if(!searchQuery) return
    const response = await axios.get(YT_SEARCH_API_URL, {
      params: {
        q: searchQuery,
        key: GOOGLE_API_KEY,
        part: 'snippet',
        type: 'video',
        pageToken: pageToken
      }
    })
    setSearchResult(response.data)
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
        <Grid
          justify="center"
          container
          item
        >
          <Typography variant="h4">
            Find video by query
          </Typography>
        </Grid>
        <Grid
          justify="center"
          container
          item
        >
          <QueryInput
            value={searchQuery}
            onChange={onQueryChange}
            search={search}
          />
        </Grid>
        <Grid
          direction="column"
          justify="center"
          container
          item
        >
          <SearchResults
            data={searchResult}
            changePage={changePage}
          />
        </Grid>
      </Grid>
    </Container>
  );
}


