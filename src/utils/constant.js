
const YOUTUBE_API_KEY = "AIzaSyDClyNMcP5Qs9f9ESF9b2xPMVycf_Ls57U";
export const YOUTUBE_API = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&maxResults=50&key="+YOUTUBE_API_KEY;

export const YOUTUBE_SEARCH_API = "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const YOUTUBE_SEARCH_RESULT_API = "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50"+YOUTUBE_API_KEY+"&q="