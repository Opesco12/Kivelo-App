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

  setChildPassword: async (payload) => {
    const response = await axiosInstance.post(
      endpoints.child.auth.setChildpassword,
      payload
    );
    return {
      data: response.data,
      status: response.status,
    };
  },

  resetChildPassword: async (payload) => {
    const response = await axiosInstance.post(
      endpoints.child.auth.resetChildPassword,
      payload
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
    const response = await axiosInstance.put(endpoints.child.profile, credentials);
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
    const { activityId, ...payload } = activity || {};
    const response = await axiosInstance.put(
      `${endpoints.child.activities}/${activityId}`,
      payload
    );
    return response.data;
  },
  deleteActivity: async (activity) => {
    const activityId = activity?.activityId ?? activity;
    const response = await axiosInstance.delete(
      `${endpoints.child.activities}/${activityId}`
    );
    return response.data;
  },
  getChildProgress: async () => {
    const response = await axiosInstance.get(endpoints.child.childProgress);
    return response.data;
  },
  updateChildPreference: async (preference) => {
    const response = await axiosInstance.put(
      endpoints.child.childPreferences,
      preference
    );
    return response.data;
  },
};
