import { axiosInstance } from "./api";
import { endpoints } from "./endpoints";
import { ChildLogin, ChildLoginResponse } from "./types/Child";

export const childApi = {
  login: async (credentials: ChildLogin) => {
    const response = await axiosInstance.post<ChildLoginResponse>(
      endpoints.child.auth.login,
      credentials
    );
    return {
      data: response.data,
      status: response.status,
    };
  },

  getProfile: async () => {
    const response = await axiosInstance.get(endpoints.child.profile);
    return response.data;
  },
  updateChildProfile: async (credentials) => {
    const response = await axiosInstance.put(endpoints.child.profile);
    return response.data;
  },
  getDashboard: async () => {
    const response = await axiosInstance.get(endpoints.child.dashboardData);
    return response.data;
  },
  getChildActivities: async () => {
    const response = await axiosInstance.get(endpoints.child.activities);
    return response.data;
  },
  addNewAcitivity: async (activity) => {
    const response = await axiosInstance.post(
      endpoints.child.activities,
      activity
    );
    return response.data;
  },
  updateActivity: async (activity) => {
    const response = await axiosInstance.put(
      `${endpoints.child.activities}/${activity.acitvityId}`,
      activity
    );
    return response.data;
  },
  deleteActivity: async (activity) => {
    const response = await axiosInstance.delete(
      `${endpoints.child.activities}/${activity.acitvityId}`
    );
    return response.data;
  },
  getChildProgress: async () => {
    const response = await axiosInstance.get(endpoints.child.childProgress);
    return response.data;
  },
  updateChildPreference: async (preference) => {
    const response = await axiosInstance.put(endpoints.child.childPreferences);
    return response.data;
  },
};
