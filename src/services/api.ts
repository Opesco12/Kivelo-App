import axios from "axios";

const BASE_URL = "https://family-wellness.onrender.com/api/";

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
});
