import axios from "axios";
import * as SecureStore from "expo-secure-store";

const BASE_URL = "https://family-wellness.onrender.com/api/";

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 20000,
});

axiosInstance.interceptors.request.use(async (config) => {
  const token = await SecureStore.getItemAsync("authToken");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});
