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
import {
    GetChildrenResponse,
    ParentProfile,
    UpdateParentProfileCredentials,
} from "./types/Parent";

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

  logout: async () => {
    const response = await axiosInstance.post(endpoints.parent.auth.logout);
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

  forgotPassword: async (credentials: { email: string }) => {
    const response = await axiosInstance.post(
      endpoints.parent.auth.forgotPassword,
      credentials
    );
    return response.data;
  },

  verifyResetToken: async (credentials: { email: string; token: string }) => {
    const response = await axiosInstance.post(
      endpoints.parent.auth.verifyResetToken,
      credentials
    );
    return response.data;
  },

  resetPassword: async (credentials: { email: string; token: string; password: string }) => {
    const response = await axiosInstance.post(
      endpoints.parent.auth.resetPassword,
      credentials
    );
    return response.data;
  },

  getParentProfile: async (): Promise<ParentProfile["parent"]> => {
    const response = await axiosInstance.get(endpoints.parent.profile);
    return response.data;
  },

  updateParentProfile: async (
    credentials: UpdateParentProfileCredentials
  ): Promise<ParentProfile["parent"]> => {
    const response = await axiosInstance.put(
      endpoints.parent.profile,
      credentials
    );
    return response.data;
  },

  getDashboard: async () => {
    const response = await axiosInstance.get(endpoints.parent.dashboardData);
    return response.data;
  },

  getReports: async () => {
    const response = await axiosInstance.get(endpoints.parent.getReports);
    return response.data;
  },

  getNotifications: async () => {
    const response = await axiosInstance.get(endpoints.parent.notifications);
    return response.data;
  },
  markNotificationAsRead: async (notificationId) => {
    const response = await axiosInstance.put(
      `${endpoints.parent.notifications}/${notificationId}/read`
    );
    return response.data;
  },

  getSettings: async () => {
    const response = await axiosInstance.get(endpoints.parent.settings);
    return response.data;
  },

  updateSettings: async (credentials) => {
    const response = await axiosInstance.put(
      endpoints.parent.settings,
      credentials
    );
    return response.data;
  },
  getChildMood: async (childId) => {
    const response = await axiosInstance.get(
      `${endpoints.parent.getChildMood}/${childId}`
    );
    return response.data;
  },

  getChildMoodSummary: async (childId) => {
    const response = await axiosInstance.get(
      `${endpoints.parent.getChildSummary}/${childId}`
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
      endpoints.parent.childrenList
    );
    return response.data;
  },
  addNewChild: async (credentials) => {
    const response = await axiosInstance.post(
      `${endpoints.parent.childrenList}/${credentials?.childId}`,
      credentials
    );
    return response.data;
  },
  updateChildInfo: async (credentials) => {
    const response = await axiosInstance.put(
      `${endpoints.parent.childrenList}/${credentials?.childId}`,
      credentials
    );
    return response.data;
  },

  removeChild: async (credentials) => {
    const response = await axiosInstance.delete(
      `${endpoints.parent.childrenList}/${credentials?.childId}`
    );
    return response.data;
  },
};
