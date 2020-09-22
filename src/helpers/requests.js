import axios from 'axios'
import { YT_SEARCH_API_URL, GOOGLE_API_KEY } from '../helpers/config'
import { log } from '../helpers/logger'

const ytParams = {
  key: GOOGLE_API_KEY,
  part: 'snippet',
  type: 'video',
}

export const loadSearchResults = async (q) => {
  log(`Loading search results for query: ${q}`, 'info')
  try {
    const response = await axios.get(YT_SEARCH_API_URL, {
      params: {
        q,
        ...ytParams
      }
    })
    log('Search results are loaded!', 'info')
    return response
  } catch (err) {
    log(err.response.data.error.message, 'error')
    alert('API returned some errors, open console for detailed info')
    return null
  }
}

export const loadResultsPage = async (q, pageToken) => {
  log(`Loading new page for query: ${q} `, 'info')
  try {
    const response = axios.get(YT_SEARCH_API_URL, {
      params: {
        q,
        pageToken,
        ...ytParams
      }
    })
    log('Search results are loaded!', 'info')
    return response
  } catch (err) {
    log(err.response.data.error.message, 'error')
    alert('API returned some errors, open console for detailed info')
    return null
  }
}
