import axios from "axios";
import { ACCESS_TOKEN } from "@/token";

const api = axios.create({
  baseURL: "https://groupi-0hep.onrender.com"
});

export const anon_api = axios.create({
  baseURL: "https://groupi-0hep.onrender.com"
});


api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem(ACCESS_TOKEN);
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;