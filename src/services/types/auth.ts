export type User = {
  id: string;
  email: string;
  name: string;
  role: "parent" | "child";
  isVerified: boolean;
};

export interface ParentLoginCredentials {
  email: string;
  password: string;
}

export interface ParentLoginResponse {
  success: boolean;
  message: string;
  accessToken: string;
  data: {
    user: User;
    familyCode: string;
    subscription: string;
    hasSetPassword: boolean;
    parentId: string;
  };
}

export interface ParentRegisterCredentials {
  name: string;
  email: string;
  password: string;
  phone: string;
  dob: string;
  termsAccepted: boolean;
}

export interface ParentRegisterResponse {
  success: boolean;
  message: string;
  user?: User;
  parent?: {
    familyCode: string;
  };
}

export interface VerifyEmailCredentials {
  email: string;
  verificationCode?: string;
}

export interface VerifyEmailResponse {
  success: boolean;
  message: string;
  accessToken?: string;
  refreshToken?: string;
  user?: User;
}
