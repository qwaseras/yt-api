import { YOUTUBE_PARSER_REGEX } from './config'

export const youtubeUrlParser = (url) => {
  var match = url.match(YOUTUBE_PARSER_REGEX);
  return (match && match[1].length === 11) ? match[1] : false;
}
