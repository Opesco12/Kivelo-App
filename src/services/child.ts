import { axiosInstance } from "./api";
import { endpoints } from "./endpoints";

export const childApi = {
  login: async (credentials) => {
    const response = await axiosInstance.post(
      endpoints.child.auth.login,
      credentials
    );
    return {
      data: response.data,
      status: response.status,
    };
  },
};
