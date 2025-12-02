export interface ParentLoginCredentials {
  email: string;
  password: string;
}

export interface ParentLoginResponse {
  success: boolean;
  message: string;
  needsVerification: boolean;
  email: string;
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
  user?: {
    id: string;
    email: string;
    name: string;
    role: "parent" | "child";
    isVerified: boolean;
  };
  parent?: {
    familyCode: string;
  };
}

// export interface ParentLoginResponse {
//   success: boolean;
//   message: string;
//   accessToken: string;
//   refreshToken: string;
//   data: {
//     user: {};
//     familyCode: string;
//     subscription: string;
//     hasSetPassword: boolean;
//     parentId: string;
//   };
// }

// {
//   "success": false,
//   "message": "Please verify your email before logging in. Check your email for the verification code.",
//   "needsVerification": true,
//   "email": "parent@example.com"
// }
