export type User = {
  id: string;
  email: string;
  name: string;
  role: "parent" | "child";
  isVerified: boolean;
};
