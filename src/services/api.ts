import axios from "axios";

export const jsonApi = axios.create({
  baseURL: "https://json-server-anicontrol.herokuapp.com/",
});

export const jikanApi = axios.create({
  baseURL: "https://api.jikan.moe/v4/",
});
