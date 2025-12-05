export type ChildLogin = {
  email?: string;
  code?: string;
  password?: string;
};

export type ChildLoginResponse = {
  success: true;
  accessToken?: string;
  user: {
    hasSetPassword: boolean;
  };
  message?: string;
};
