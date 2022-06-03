import axios from "axios";


const KEY= 'AIzaSyDdSovIUebf6oz1kaWQlHpXBDIw1Ic1A0Y';

export default axios.create({
  baseURL:'https://www.googleapis.com/youtube/v3',
  params: {
   part: 'snippet',
   type:'video',
   maxResults: 5,
   key : KEY
  }
});