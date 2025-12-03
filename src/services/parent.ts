import { axiosInstance } from "./api";
import { endpoints } from "./endpoints";
import {
  ParentLoginCredentials,
  ParentLoginResponse,
  ParentRegisterCredentials,
  ParentRegisterResponse,
  VerifyEmailCredentials,
  VerifyEmailResponse,
} from "./types/auth";

export const parentApi = {
  register: async (
    credentials: ParentRegisterCredentials
  ): Promise<ParentRegisterResponse> => {
    const response = await axiosInstance.post<ParentRegisterResponse>(
      endpoints.parent.auth.register,
      credentials
    );
    return response.data;
  },

  login: async (
    credentials: ParentLoginCredentials
  ): Promise<ParentLoginResponse> => {
    const response = await axiosInstance.post<ParentLoginResponse>(
      endpoints.parent.auth.login,
      credentials
    );
    return response.data;
  },

  verifyEmail: async (credentials: VerifyEmailCredentials) => {
    const response = await axiosInstance.post<VerifyEmailResponse>(
      endpoints.parent.auth.verifyEmail,
      credentials
    );

    return response.data;
  },

  resendVerification: async (credentials: VerifyEmailCredentials) => {
    const response = await axiosInstance.post<VerifyEmailResponse>(
      endpoints.parent.auth.resendVerification,
      credentials
    );

    return response.data;
  },
};
