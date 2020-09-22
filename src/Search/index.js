import React, { useState } from 'react';
import {
  Container,
  Grid,
  Typography,
} from '@material-ui/core';

import { getEmbedVideoUrl } from '../helpers/urls'
import {loadResultsPage, loadSearchResults} from "../helpers/requests"

import QueryInput from './components/QueryInput'
import SearchResults from './components/SearchResults'
import VideoModal from './components/VideoModal'

export default () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [searchResult, setSearchResult] = useState()
  const [modalOpen, setModalOpen] = useState(false)
  const [embedUrl, setEmbedUrl] = useState('')

  const onQueryChange = (event) => {
    const { value } = event.target
    setSearchQuery(value)
  }
  const search = async () => {
    if (!searchQuery) return
    const response = await loadSearchResults(searchQuery)
    if(!response) return
    setSearchResult(response.data)
  }
  const changePage = async (pageToken) => {
    if (!searchQuery) return
    const response = await loadResultsPage(searchQuery, pageToken)
    if(!response) return
    setSearchResult(response.data)
  }
  const openModal = (id) => {
    if(!id) return
    const newEmbedUrl = getEmbedVideoUrl(id)
    setEmbedUrl(newEmbedUrl)
    setModalOpen(true)
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
            openModal={openModal}
          />
        </Grid>
      </Grid>
      <VideoModal
        open={modalOpen}
        close={() => setModalOpen(false)}
        url={embedUrl}
      />
    </Container>
  );
}


