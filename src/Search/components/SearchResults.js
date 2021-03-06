import React from 'react'

import ResultCard from './ResultCard'
export default ({ data, changePage, openModal }) => {
  if (!data) return <></>
  const {
    items,
    pageInfo,
    nextPageToken,
    prevPageToken,
  } = data

  return <>
    <span> Total Results: {pageInfo.totalResults}</span>
    {
      items.map((item, i) => (
        <ResultCard
          onClick={() => openModal(item.id.videoId)}
          data={item.snippet}
          key={i}
        />
      ))
    }
    <div className="simple-pagination">
      {prevPageToken ? <span onClick={() => changePage(prevPageToken)}>{'< Previous page'}</span> : <span />}
      {nextPageToken ? <span onClick={() => changePage(nextPageToken)}>{'Next Page >'}</span> : <span />}
    </div>
  </>
}
