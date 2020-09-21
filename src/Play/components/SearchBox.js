import React from 'react'
import {
  TextField,
  Button,
} from '@material-ui/core';

export default ({url, onUrlChange, onParse}) => <>
  <TextField
    value={url}
    id="search-field"
    label="Enter the url..."
    variant="outlined"
    onChange={onUrlChange}
  />
  <Button
    id="search-btn"
    variant="contained"
    color="primary"
    onClick={onParse}
  >
    Parse
 </Button>
</>
