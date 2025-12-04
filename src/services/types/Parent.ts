import type { Child } from "@/src/types/child";

export type GetChildrenResponse = {
  children: Child[];
  success: boolean;
  totalChildren: number;
};

export type User = {
  _id: string;
  email: string;
  name: string;
  phone: string;
  dob: string;
};

export type Child = {
  _id: string;
  user: {
    _id: string;
    email: string;
    name: string;
  };
  parent: string;
  dob: string;
  points: number;
  level: number;
  currentStreak: number;
  oneTimeCode?: string;
  codeExpires?: string;
  isCodeUsed?: boolean;
  hasSetPassword: boolean;
  createdAt: string;
  updatedAt: string;
};

export type ParentProfile = {
  success: boolean;
  parent: {
    billing: {
      plan: string;
      paymentMethod: string;
      nextBillingDate: string | null;
    };
    settings: {
      notifications: {
        email: boolean;
        push: boolean;
        activityReminders: boolean;
        progressReports: boolean;
      };
      privacy: {
        shareProgress: boolean;
        showInSearch: boolean;
      };
      limits: {
        dailyScreenTime: number;
        maxActivitiesPerDay: number;
      };
    };
    _id: string;
    user: User;
    familyCode: string;
    subscription: string;
    children: Child[];
    createdAt: string;
    updatedAt: string;
  };
};

export type UpdateParentProfileCredentials = {
  name?: string;
  email?: string;
  phone?: string;
};
