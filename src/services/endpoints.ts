export const endpoints = {
  parent: {
    auth: {
      login: "auth/login",
      register: "auth/register-parent",
      verifyEmail: "auth/verify-email",
      resendVerification: "auth/resend-verification",
      generateChildCode: "auth/generate-code",
    },
    chilrenList: "parents/children-list",
  },
  child: {},
};
