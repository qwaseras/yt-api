import React from 'react'
import {
  TextField,
  Button,
} from '@material-ui/core';

export default ({ onChange, value, search }) => <>
  <TextField
    value={value}
    className="query-text-field"
    label="Enter query..."
    variant="outlined"
    onChange={onChange}
  />
  <Button
    className="action-btn"
    variant="contained"
    color="primary"
    onClick={search}
  >
    Search
  </Button>
</>
