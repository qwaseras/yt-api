import React from 'react'
import {
  TextField,
  Button,
} from '@material-ui/core';

export default ({url, onUrlChange, onParse}) => <>
  <TextField
    value={url}
    className="query-text-field"
    label="Enter the url..."
    variant="outlined"
    onChange={onUrlChange}
  />
  <Button
    className="action-btn"
    variant="contained"
    color="primary"
    onClick={onParse}
  >
    Parse
 </Button>
</>
