import axios from "axios";

const http = axios.create({
  params: { api_key: process.env.TMDB_API_KEY, language: "en" },
});

export default http;
