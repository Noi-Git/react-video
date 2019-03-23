import axios from "axios";
import { GOOGLE_URL, YOUTUBE_API_KEY } from "../config";

const KEY = YOUTUBE_API_KEY || process.env.YOUTUBE_API_KEY;

export default axios.create({
  baseURL: GOOGLE_URL || process.env.YOUTUBE_API_KEY,
  params: {
    part: "snippet",
    maxRusults: 5,
    key: KEY
  }
});
