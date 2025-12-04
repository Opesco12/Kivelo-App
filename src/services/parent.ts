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
import { GetChildrenResponse } from "./types/Parent";

export const parentApi = {
  register: async (
    credentials: ParentRegisterCredentials
  ): Promise<{ data: ParentRegisterResponse; status: number }> => {
    const response = await axiosInstance.post<ParentRegisterResponse>(
      endpoints.parent.auth.register,
      credentials
    );
    return {
      data: response.data,
      status: response.status,
    };
  },

  login: async (
    credentials: ParentLoginCredentials
  ): Promise<{ data: ParentLoginResponse; status: number }> => {
    const response = await axiosInstance.post<ParentLoginResponse>(
      endpoints.parent.auth.login,
      credentials
    );
    return {
      data: response.data,
      status: response.status,
    };
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

  addChild: async (credentials) => {
    const response = await axiosInstance.post(
      endpoints.parent.auth.generateChildCode,
      credentials
    );

    return response.data;
  },

  getChildrenList: async () => {
    const response = await axiosInstance.get<GetChildrenResponse>(
      endpoints.parent.chilrenList
    );
    return response.data;
  },
};
