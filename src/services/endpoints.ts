export const endpoints = {
  users: {
    profile: "users/profile",
    updatePassword: "users/update-password",
    deactivate: "users/deactivate",
    dashboard: "users/dashboard",
    avatar: "users/avatar",
  },
  family: {
    family: "families",
  },
  parent: {
    auth: {
      login: "auth/login",
      register: "auth/register-parent",
      verifyEmail: "auth/verify-email",
      resendVerification: "auth/resend-verification",
      generateChildCode: "auth/generate-code",
      logout: "auth/logout",
    },
    profile: "parents",
    dashboardData: "parents/dashboard",
    childrenList: "parents/children-list",
    getReports: "parents/reports",
    notifications: "parents/notifications",
    settings: "parents/settings",
    getChildMood: "parents/mood",
    getChildSummary: "parents/summary",
  },
  child: {
    auth: {
      login: "auth/child-login",
      setChildpassword: "auth/set-child-password",
      resetChildPassword: "auth/reset-child-password",
    },

    mood: {
      recordMood: "moods/record",
      getMood: "moods",
    },

    dashboardData: "children/dashboard",
    activities: "children/activities",
    childProgress: "children/progress",
    childPreferences: "children/preferences",
  },
  ai: {
    chat: "ai/chat",
    getHistory: "ai/chat/history",
    clearHistory: "ai/chat/clear-history",
    status: "ai/status",
  },
};
