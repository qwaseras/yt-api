import React from 'react'
import { Modal } from '@material-ui/core';
import Video from '../../VideoFrame'

export default ({ open, close, url }) => {
  if (!url) return <></>
  return <Modal
    open={open}
    onClose={close}
    className="search-modal"
  >
    <Video url={url} />
  </Modal>
}
