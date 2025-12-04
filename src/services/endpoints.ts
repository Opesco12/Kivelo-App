export const endpoints = {
  parent: {
    auth: {
      login: "auth/login",
      register: "auth/register-parent",
      verifyEmail: "auth/verify-email",
      resendVerification: "auth/resend-verification",
      generateChildCode: "auth/generate-code",
      logout: "auth/logout",
    },
    chilrenList: "parents/children-list",
  },
  child: {
    auth: {
      login: "auth/child-login",
    },
  },
};
