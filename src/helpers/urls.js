import { YT_EMBED_VIDEO_URL } from './config'

export const getEmbedYTUrlById = (id) => {
  return YT_EMBED_VIDEO_URL + id
}
