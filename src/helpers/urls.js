import { YT_EMBED_VIDEO_URL } from './config'
import {
  youtubeUrlParser,
} from '../helpers/parsers'

export const getEmbedYTUrl = (url) => {
  const id = youtubeUrlParser(url)
  if (!id) return alert('Enter a valid YouTube URL')
  return YT_EMBED_VIDEO_URL + id
}
