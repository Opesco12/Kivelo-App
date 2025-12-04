import axios from "axios";
import * as SecureStore from "expo-secure-store";

import { STORAGE_KEYS } from "../utils/storage/keys";

const BASE_URL = "https://family-wellness.onrender.com/api/";

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 20000,
});

axiosInstance.interceptors.request.use(async (config) => {
  const token = await SecureStore.getItemAsync(STORAGE_KEYS.ACCESS_TOKEN);
  console.log(token);
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      // Server responded with a status code outside 2xx
      const formattedError = {
        status: error.response.status,
        data: error.response.data,
        message:
          error.response.data?.message ||
          "An error occurred while processing your request",
      };

      return Promise.reject(formattedError);
    }

    if (error.request) {
      // Request made but no response (network error, timeout, etc.)
      return Promise.reject({
        status: null,
        message: "Network error. Please check your connection.",
      });
    }

    // Something else happened
    return Promise.reject({
      status: null,
      message: error.message || "Unexpected error occurred",
    });
  }
);
