import { YT_EMBED_VIDEO_URL } from './config'

export const getEmbedYTUrl = (id) => {
  return YT_EMBED_VIDEO_URL + id
}
