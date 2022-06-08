import axios from 'axios';

const KEY = 'AIzaSyB8cjYUvMya1mSlG6_6k6LPM3J6foh_Glk';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: { part: 'snippet', type: 'video', maxResults: 5, key: KEY }
});
